import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// having to use require is dumb, but typescript hates default imports apparently
const ReactModal = require('react-modal')

// import the stylesheet, which will be loaded via webpack
import '../css/tictactoe.css'

// import action creators for making a move and resetting the board
import { makeMove, reset } from '../modules/tictactoe'

// import the GameBoard component
import GameBoard from '../components/GameBoard'

const init = () => ({ type: 'INIT' })

interface ITicProps {
  positions: Array<string>;
  currentPlayer: string;
  init: Function;
  makeMove: Function;
  reset: Function;
}

interface ITicState {
  isOpen: boolean;
}


class TicTacToeR extends React.Component<ITicProps, ITicState> {
  readonly state: ITicState = {
    isOpen: false
  }

  handlePositionClick = (position: number) => {
    debugger
    const { currentPlayer } = this.props

    this.props.makeMove(currentPlayer, position)
  }


  handleReset = () => {
    this.props.reset()
  }


  componentDidMount() {
    this.props.init()
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
interface IState {
  positions: Array<string>;
  currentPlayer: string;
}
function mapStateToProps(state: IState) {
  return {
    positions: state.positions,
    currentPlayer: state.currentPlayer
  }
}

function mapDispatchToProps(dispatch: any): any {
  return bindActionCreators({
    makeMove, init, reset
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToeR)
