import React, { Component } from 'react'

import {
  PLAYER_X,
  PLAYER_O,
  EMPTY
} from '../constants'

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
    this.handlePositionClick = ::this.handlePositionClick
  }


  handlePositionClick(position) {
    const { playerType, positions } = this.state

    positions[position] = playerType,

    this.setState({
      positions,
      playerType: playerType === PLAYER_X ? PLAYER_O : PLAYER_X
    })
  }


  render() {
    const { positions } = this.state
    return (
      <div>
        <h1>Tic Tac Toenails</h1>
        <GameBoard positions={ positions } handlePositionClick={ this.handlePositionClick } />
      </div>
    )
  }
}
