import { PLAYER_X, PLAYER_O, EMPTY } from '../../constants'
import reducer, { makeMove, reset } from '../tictactoe'

it('should have default state', () => {
  const state = reducer(undefined, { type: 'INIT' })

  expect(state).toMatchSnapshot()
})

it('should react to a move by X', () => {
  let state = reducer(undefined, { type: 'INIT' })

  expect(state).toMatchSnapshot()

  state = reducer(state, makeMove(PLAYER_X, 0))

  expect(state).toMatchSnapshot()
})

it('should react to a move, then be reset', () => {
  let state = reducer(undefined, { type: 'INIT' })

  expect(state).toMatchSnapshot()

  state = reducer(state, makeMove(PLAYER_O, 5))

  expect(state).toMatchSnapshot()

  state = reducer(state, reset())

  expect(state).toMatchSnapshot()
})