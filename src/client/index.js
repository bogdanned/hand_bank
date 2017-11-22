import {render} from 'react-dom'
import React from 'react'
import {ThemeProvider} from 'styled-components'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from "react-redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import { reducer as reduxFormReducer } from 'redux-form'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './components/app.js'


const theme = {
  brandColor: "#27AE61",
  primaryColor: "#F5F5F5",
  secondaryColor: "white"
}

const renderApp = () => {
  render(
    <ThemeProvider theme={theme}>
      <App></App>
    </ThemeProvider>
    , document.getElementById("app"))
}

renderApp(App)


if(module.hot){
  module.hot.accept("./components/app", () => {
    const NextApp = require("./components/app").default
    renderApp(NextApp)
  })
}
