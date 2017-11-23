import {render} from 'react-dom'
import React from 'react'
import {ThemeProvider} from 'styled-components'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from "react-redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import { reducer as reduxFormReducer } from 'redux-form'
import {BrowserRouter as Router} from 'react-router-dom'

import Flow from './flow'

const theme = {
  brandColor: "#2ecc71",
  primaryColor: "#27ae60",
  secondaryColor: "#86cca4",
  terciaryColor: "#2980b9"
}

const Root = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const renderApp = () => {
  render(
    <Root>
      <Flow>

      </Flow>
    </Root>
    , document.getElementById("app"))
}

renderApp(App)
