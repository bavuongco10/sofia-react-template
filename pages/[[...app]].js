import React, { useState, useEffect } from 'react'
import CreateReactAppEntryPoint from '../src/App'
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import ReduxThunk from "redux-thunk";
import {useMountedState} from 'react-use';

function App() {
    const isMounted = useMountedState();

    if(!isMounted()) return null

    const reducers = require("../src/reducers").default;
    const store = createStore(
        reducers,
        applyMiddleware(ReduxThunk)
    );

    return (
        <Provider store={store}>
            <CreateReactAppEntryPoint />
        </Provider>
    )
}

export default App