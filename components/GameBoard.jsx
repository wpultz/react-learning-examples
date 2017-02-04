import React, { Component } from 'react'

import Ex from './Ex'
import Oh from './Oh'
import Empty from './Empty'

export default class GameBoard extends Component {
  render() {
    const { positionMatrix, handlePositionClick } = this.props

    // iterate over the rows of the position matrix to build up the positions
    const boardRows = positionMatrix.map((row, i) => {
      // for a row, iterate over the the positions of the row to fill in markers
      return row.map((position, k) => {
        let marker
        if (position === 'X') {
          marker = <Ex />
        } else if (position === 'O') {
          marker = <Oh />
        } else {
          marker = <Empty onClick={ () => handlePositionClick(i, k) } />
        }
        return marker
      })
    })

    return (
      <div>
        { boardRows }
      </div>
    )
  }
}
