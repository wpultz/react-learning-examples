import { boardUpdate } from '../modules/tictactoe'

let isSWSetup = false

function setupSW(store) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', event => {
      console.log('receive from service worker')
      try {
        const eventData = JSON.parse(event.data)

        if (eventData && eventData.type === 'SYNC_STORE') {
          console.log('great, update the store!', eventData)
          store.dispatch(boardUpdate(eventData.store.positions, eventData.store.currentPlayer))
        }
      } catch (err) {
        console.log('store sync did not receive proper JSON')
      }
    })
  }

  isSWSetup = true
}

function sayHello(store) {
  return new Promise(function(resolve, reject) {
    // Create a Message Channel
    const channel = new MessageChannel()

    // Handler for recieving message reply from service worker
    channel.port1.onmessage = function(event) {
      try {
        const eventData = JSON.parse(event.data)

        if (eventData && Object.keys(eventData).length) {
          store.dispatch(boardUpdate(eventData.positions, eventData.currentPlayer))
        }
      } catch (err) {
        console.log('whoops, hello did not return json')
      }
      console.log('event data in client hello')
      if (event.data.error) {
        reject(event.data.error)
      } else {
        resolve(event.data)
      }
    }

    // Send message to service worker along with port for reply
    navigator.serviceWorker.controller.postMessage(JSON.stringify({ type: 'HELLO' }), [channel.port2])
  })
}

function syncStoreToWorker(appState) {
  navigator.serviceWorker.controller.postMessage(JSON.stringify({ type: 'SYNC_STORE', store: appState }))
}

const storeSync = store => next => action => {
  const actionResult = next(action)

  if (!isSWSetup) {
    setupSW(store)
    sayHello(store)
  } else if (['MAKE_MOVE', 'RESET'].includes(action.type)) {
    syncStoreToWorker(store.getState())
  }

  return actionResult
}

export default storeSync
