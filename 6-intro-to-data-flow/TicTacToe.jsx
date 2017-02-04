import React, { Component, PropTypes } from 'react'
import Immutable from 'immutable'

import GameBoard from './GameBoard'

class TicTacToe extends Component {
  static propTypes = {
    playerType: PropTypes.string.isRequired,
    positionMatrix: PropTypes.instanceOf(Immutable.Map).isRequired
  }


  constructor(props) {
    super(props)

    // notice the function rebinding
    this.handlePositionClick = ::this.handlePositionClick
  }


  handlePositionClick(row, position) {
    this.props.makeMove(playerType, row, position)
  }


  render() {
    const { positionMatrix } = this.props
    return (
      <GameBoard positionMatrix={ positionMatrix } />
    )
  }
}

// function that will pull out the relevant parts of the redux store state for our game
const mapStateToProps = state => ({
  playerType: state.playerType
  positionMatrix: state.positionMatrix
})


// create a collection of action creators that can be dispatched from this container
const dispatchableActions = {
  makeMove
}

// connect the TicTacToe component to the redux store
export default connect(mapStateToProps, dispatchableActions)(TicTacToe)
