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


  state = {
    isOpen: false
  }


  handlePositionClick = position => {
    const { dispatch, currentPlayer } = this.props

    dispatch(makeMove(currentPlayer, position))
  }


  handleReset = () => {
    this.props.dispatch(reset())
  }


  componentDidMount() {
    this.props.dispatch({ type: 'INIT' })
  }


  render() {
    const { positions, currentPlayer } = this.props

    return (
      <div className="u-flex u-flexCol u-flexJustifyCenter">
        <h1 className="u-flex u-flexJustifyCenter">Tic Tac Toe</h1>
        <div className="u-flex u-flexJustifyCenter">It is&nbsp;<strong>{ currentPlayer }</strong>'s turn</div>
        <GameBoard positions={ positions } handlePositionClick={ this.handlePositionClick } />
        <button style={{ width: 200, left: 0, right: 0, margin: 'auto' }} onClick={ this.handleReset }>Reset Game</button>

        <br />

        <ReactModal
          isOpen={ this.state.isOpen }
          onRequestClose={ () => this.setState({ isOpen: false }) }
          shouldCloseOnEsc={ false }
        >
          hi
        </ReactModal>
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
