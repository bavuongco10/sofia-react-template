import React from 'react'
import CreateReactAppEntryPoint from '../src/App'
import {useMountedState} from 'react-use';

function App() {
    const isMounted = useMountedState();
    if(!isMounted()) return null

    return (
      <CreateReactAppEntryPoint />
    )
}

export default App