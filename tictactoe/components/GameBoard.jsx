import React, { Component, PropTypes } from 'react'

import '../css/tictactoe.css'

import {
  PLAYER_X,
  PLAYER_O
} from '../constants'

import Ex from './Ex'
import Oh from './Oh'
import Empty from './Empty'

export default class GameBoard extends Component {
  static propTypes = {
    positions: PropTypes.arrayOf(PropTypes.string).isRequired,
    handlePositionClick: PropTypes.func.isRequired
  }

  render() {
    const { positions, handlePositionClick } = this.props

    // segment the positions into three rows of three
    const positionMatrix = [
      positions.slice(0, 3),
      positions.slice(3, 6),
      positions.slice(6)
    ]

    // iterate over the rows of the position matrix to build up the positions
    const boardRows = positionMatrix.map((row, i) => {
      // for a row, iterate over the the positions of the row to fill in markers
      return row.map((position, k) => {
        let marker
        if (position === PLAYER_X) {
          marker = <td key={ `cell-${i}-${k}` }><Ex /></td>
        } else if (position === PLAYER_O) {
          marker = <td key={ `cell-${i}-${k}` }><Oh /></td>
        } else {
          // empty spaces will get a click handler to set the player type in that space
          marker = <td key={ `cell-${i}-${k}` }><Empty onClick={ () => handlePositionClick((3 * i) + k) } /></td>
        }
        return marker
      })
    })

    return (
      <div>
        <table>
          <tbody>
            {
              boardRows.map((row, idx) => <tr key={ `row-${idx}` }>{ row }</tr>)
            }
          </tbody>
        </table>
      </div>
    )
  }
}
