import React, { Component } from 'react'

import GameBoard from './GameBoard'

export default class TicTacToe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playerType: 'X',
      positionMatrix: [['', '', ''], ['', '', ''], ['', '', '']]
    }

    // notice the function rebinding
    this.handlePositionClick = ::this.handlePositionClick
  }


  handlePositionClick(row, position) {
    const { playerType, positionMatrix } = this.state

    this.stateState({
      positionMatrix: positionMatrix[row][position] = playerType,
      playerType: playerType === 'X' ? 'O' : 'X'
    })
  }


  render() {
    const { positionMatrix } = this.state
    return (
      <GameBoard positionMatrix={ positionMatrix } />
    )
  }
}
