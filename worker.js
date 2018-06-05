const cachedAssetUrls = [
  '/',
  '/bundles/app.bundle.js',
  '/bundles/shared.bundle.js',
  '/assets/upthere.png',
  '/assets/wd.png'
]
const TIC_CACHE_NAME = 'tictaccache-v1'

let crudeStorage = ''


function notifyClient(client, msg) {
  const channel = new MessageChannel()

  client.postMessage(msg, [channel.port2])
}


function notifyClients(msg) {
  clients.matchAll().then(clients => {
    clients.forEach(client => {
      notifyClient(client, msg)
    })
  })
}


self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(TIC_CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(cachedAssetUrls)
      })
  )
})


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response
        }
        return fetch(event.request)
      }
    )
  )
})


self.addEventListener('message', function(event) {
  try {
    const eventData = JSON.parse(event.data)

    if (eventData && eventData.type) {
      if (eventData.type === 'SYNC_STORE') {
        crudeStorage = eventData.store
        notifyClients(event.data)
      } else if (eventData.type === 'HELLO') {
        event.ports[0].postMessage(JSON.stringify(crudeStorage))
      }
    }
  } catch (err) {
    console.log('SW did not receive proper JSON')
  }
})