import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ReactModal from 'react-modal'

// import the stylesheet, which will be loaded via webpack
import '../css/tictactoe.css'

// import action creators for making a move and resetting the board
import { makeMove, reset } from '../modules/tictactoe'

// import the GameBoard component
import GameBoard from '../components/GameBoard'

class TicTacToe extends Component {
  static propTypes = {
    positions: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentPlayer: PropTypes.string.isRequired
  }


  handlePositionClick = position => {
    const { dispatch, currentPlayer } = this.props

    dispatch(makeMove(currentPlayer, position))
  }


  handleReset = () => {
    this.props.dispatch(reset())
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

// mapStateToProps maps the redux store state to props to the TicTacToe component
function mapStateToProps(state) {
  return {
    positions: state.positions,
    currentPlayer: state.currentPlayer
  }
}

export default connect(mapStateToProps)(TicTacToe)
