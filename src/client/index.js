import {render} from 'react-dom'
import React from 'react'
import {ThemeProvider} from 'styled-components'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from "react-redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import { reducer as reduxFormReducer } from 'redux-form'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './components/app.js'

const renderApp = () => {
  render(
    <App></App>
    , document.getElementById("app"))
}

renderApp(App)


if(module.hot){
  module.hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default
    renderApp(NextApp)
  })
}
