import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import App from './components/App'

const store = createStore(rootReducer)
store.subscribe(() => window.console.log(store.getState()))

render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root')
)