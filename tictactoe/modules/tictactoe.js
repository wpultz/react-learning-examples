// import the X and O player constants
import {
  PLAYER_X,
  PLAYER_O,
  EMPTY
} from '../constants'


// constant for the `MAKE_MOVE` action type
const MAKE_MOVE = 'MAKE_MOVE'
// constant for the `RESET` action type
const RESET = 'RESET'
const BOARD_UPDATE = 'BOARD_UPDATE'


// action creator for the `MAKE_MOVE` action type
export function makeMove(playerType, position) {
  return {
    type: MAKE_MOVE,
    payload: {
      playerType,
      position
    }
  }
}

// action creator for the `RESET` action type
export function reset() {
  return {
    type: RESET
  }
}


export function boardUpdate(positions, currentPlayer) {
  return {
    type: BOARD_UPDATE,
    payload: {
      positions,
      currentPlayer
    }
  }
}


// initial state of the redux store
const initialState = {
  positions: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  currentPlayer: PLAYER_X
}


// reducer to interpret actions and mutate the state accordingly
export default function tictactoe(state = initialState, action) {
  const { type, payload } = action

  switch(type) {
    case MAKE_MOVE:
      // when we get a MAKE_MOVE action, set the player type in the specified position
      const { playerType, position } = payload

      // create a new state, so that mutations to the old state don't affect the UI
      const newState = {}
      // based on the action's player type, set the next player type
      newState.currentPlayer = payload.playerType === PLAYER_X ? PLAYER_O : PLAYER_X
      // replace the positions with a new array with the playerType spliced into the old positions
      newState.positions = [...state.positions]
      newState.positions.splice(position, 1, playerType)

      // return the new state of the tic tac toe board
      return newState

    case BOARD_UPDATE: {
      return action.payload
    }

    case RESET:
      // when resetting the game, return the initial state
      return initialState

    default:
      return state
  }
}
