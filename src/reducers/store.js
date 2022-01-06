import {applyMiddleware, createStore} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import {composeWithDevTools} from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

const makeConfiguredStore = reducers => createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return makeConfiguredStore(() => {});
  }

  const reducers = require("./index").default;

  // we need it only on client side
  const {persistStore, persistReducer} = require('redux-persist');
  const storage = require('redux-persist/lib/storage').default;

  const persistConfig = {
    key: 'root',
    whitelist: ['auth'], // make sure it does not clash with server keys
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, reducers);
  const store = makeConfiguredStore(persistedReducer);

  store.__persistor = persistStore(store); // Nasty hack

  return store;

};

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});