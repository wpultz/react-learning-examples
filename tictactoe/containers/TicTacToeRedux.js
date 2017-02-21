import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

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

  constructor(props) {
    super(props)

    // we've been able to eliminate the component state altogether!
    // the applciation state is now being maintained in the Redux store, and all mutations will
    // take place via actions and reducers

    // notice the function rebinding to ensure that `this` references this TicTacToe component
    // inside the `handlePositionClick` function
    // ditto for `handleReset`
    this.handlePositionClick = ::this.handlePositionClick
    this.handleReset = ::this.handleReset
  }


  handlePositionClick(position) {
    const { dispatch, currentPlayer } = this.props

    dispatch(makeMove(currentPlayer, position))
  }


  handleReset() {
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
