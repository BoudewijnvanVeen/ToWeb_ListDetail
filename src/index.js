
import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import rootReducer from './reducers'
import App from './components/app'

let store = createStore(
  rootReducer,
        <App/>
    </Provider>,