import React, { Component, PropTypes } from 'react'

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

    // iterate over the rows of the position matrix to build up the positions
    const boardRows = []
    let currentRow = []
    positions.forEach((position, i) => {
      // get the type of marker for each space
      let marker
      if (position === PLAYER_X) {
        marker = <Ex />
      } else if (position === PLAYER_O) {
        marker = <Oh />
      } else {
        // empty spaces get a click handler to take the space
        marker = <Empty onClick={ () => handlePositionClick(i) }/>
      }

      // push a table cell with the marker into the current row
      currentRow.push(<td key={ `cell-${i}` }>{ marker }</td>)

      // if the current index is a multiple of three, push the current row into the board rows and reset currentRow
      if ((i + 1) % 3 === 0) {
        boardRows.push(currentRow)
        currentRow = []
      }
    })

    // `boardRows` is now an array of table cells with Ex|Oh|Empty components, representing the board
    // [
    //   [ table cell component, table cell component, table cell component ]
    //   [ table cell component, table cell component, table cell component ]
    //   [ table cell component, table cell component, table cell component ]
    // ]

    // inside the JSX, iterate over the rows, each row becomes a table row(<tr>) with it's cells
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
