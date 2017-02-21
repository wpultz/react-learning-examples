import React, { Component } from 'react'

// import the stylesheet, which will be loaded via webpack
import '../css/tictactoe.css'

import {
  PLAYER_X,
  PLAYER_O,
  EMPTY
} from '../constants'

// import the GameBoard component
import GameBoard from '../components/GameBoard'

export default class TicTacToe extends Component {
  constructor(props) {
    super(props)

    // this will be the state of the application
    // since this container component is at the top of the component tree, it is the optimal
    // place to maintain the application state so that it's children may consume the state or
    // pieces of the state without too many acrobatics
    this.state = {
      positions: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
      currentPlayer: PLAYER_X
    }

    // notice the function rebinding to ensure that `this` references this TicTacToe component
    // inside the `handlePositionClick` function
    // ditto for `reset`
    this.handlePositionClick = ::this.handlePositionClick
    this.reset = ::this.reset
  }


  handlePositionClick(position) {
    const { currentPlayer , positions } = this.state

    positions[position] = currentPlayer

    this.setState({
      positions,
      currentPlayer: currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X
    })
  }

  reset() {
    this.setState({
      positions: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
      currentPlayer: PLAYER_X
    })
  }


  render() {
    const { positions, currentPlayer } = this.state

    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <div>It is <strong>{ currentPlayer }</strong>'s turn</div>
        <br />
        <GameBoard positions={ positions } handlePositionClick={ this.handlePositionClick } />
        <br />
        <button onClick={ this.reset }>Reset Game</button>
      </div>
    )
  }
}
