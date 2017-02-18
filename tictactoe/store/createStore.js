import { createStore } from 'redux'

import reducer from '../modules/tictactoe'

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, window.devToolsExtension ? window.devToolsExtension() : noop => noop)

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('../modules/tictactoe', () => store.replaceReducer(require('../modules/tictactoe')))
  }

  return store
}
