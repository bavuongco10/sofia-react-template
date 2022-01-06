import React from 'react';
import {ReactReduxContext} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import { wrapper } from '../src/reducers/store'

const ReduxWrapper = ({ children }) => (
  <div>
    <ReactReduxContext.Consumer>
      {({store}) => (
        <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
          {children}
        </PersistGate>
      )}
    </ReactReduxContext.Consumer>
  </div>
)

export default wrapper.withRedux(ReduxWrapper);
