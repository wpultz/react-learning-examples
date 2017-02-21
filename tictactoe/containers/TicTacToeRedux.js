import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import '../css/tictactoe.css'

import { makeMove, reset } from '../modules/tictactoe'

import GameBoard from '../components/GameBoard'

class TicTacToe extends Component {
  static propTypes = {
    positions: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentPlayer: PropTypes.string.isRequired
  }


  constructor(props) {
    super(props)

    // we've been able to eliminate the component state altogether!
    // the applciation state is now being maintained in the Redux store, and all mutations will
    // take place via actions and reducers

    // notice the function rebinding to ensure that `this` references this TicTacToe component
    // inside the `handlePositionClick` function
    this.handlePositionClick = ::this.handlePositionClick
    this.handleReset = ::this.handleReset
  }


  handlePositionClick(position) {
    const { makeMove, currentPlayer } = this.props

    makeMove(currentPlayer, position)
  }


  handleReset() {
    this.props.reset()
  }


  render() {
    const { positions, currentPlayer } = this.props

    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <div>It is <strong>{ currentPlayer }</strong>'s turn</div>
        <br />
        <GameBoard positions={ positions } handlePositionClick={ this.handlePositionClick } />
        <br />
        <button onClick={ this.handleReset }>Reset Game</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    positions: state.positions,
    currentPlayer: state.currentPlayer
  }
}

const dispatchableActions = {
  makeMove,
  reset
}

export default connect(mapStateToProps, dispatchableActions)(TicTacToe)
