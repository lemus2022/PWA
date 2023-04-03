const version = "v1"
const staticRickMorty = "rick_and_morty-" + version

const assets = [
    "/index.html",
    "/app2.js",
    "/icon2.png",
]

self.addEventListener('install', installEvent => {
    installEvent.waitUntil(
        caches.open(staticRickMorty).then(cache=> {
            cache.addAll(assets)
        })
    )
})
self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys()
        .then(cacheNames =>
          Promise.all(
            cacheNames
              .map(c => c.split('-'))
              .filter(c => c[0] === 'rick_and_morty')
              .filter(c => c[1] !== version)
              .map(c => caches.delete(c.join('-')))
          )
        )
    );
  });
self.addEventListener('fetch', fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    )
})