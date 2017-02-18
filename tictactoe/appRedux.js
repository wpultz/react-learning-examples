import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/createStore'

import TicTacToe from './containers/TicTacToeRedux'

const appContainer = document.getElementById('app-container')

const store = configureStore()

ReactDOM.render(
  <Provider store={ store }>
    <TicTacToe />
  </Provider>
  , appContainer
)
