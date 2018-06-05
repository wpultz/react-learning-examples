import { createStore, applyMiddleware, compose } from 'redux'

import reducer from '../modules/tictactoe'

import workerMiddleware from './workerMiddleware'

export default function configureStore(initialState) {
  const devToolsAvailable = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

  // if DevTools is available and we desire to enable them, grab it's compose function
  const composeEnhancers = devToolsAvailable ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(workerMiddleware)
    )
  )

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('../modules/tictactoe', () => store.replaceReducer(require('../modules/tictactoe')))
  }


  return store
}
