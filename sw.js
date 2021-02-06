const counts = {
  installs: 0,
  activations: 0,
  fetches: 0
};

const CURRENT_CACHE = 'cache-v-1';

const cacheFiles = [
  './index.html',
  './css/main.css'
]


self.addEventListener('install', event => {
  console.log('installing sw',++counts.installs);
  event.waitUntil(
    caches.open(CURRENT_CACHE).then(cache => {
      return cache.addAll(cacheFiles)
    })
  );
});

self.addEventListener('activate', event => {
  console.log('activating sw',++counts.activations);
  event.waitUntil(
    caches.keys().then(cacheVersions => Promise.all(cacheVersions.filter(cacheVersion => {
      return cacheVersion != CURRENT_CACHE
    }).map(cacheVersion => caches.delete(cacheVersion))))
  );
});

self.addEventListener('fetch', event => {
  console.log('fetching sw',++counts.fetches);
  event.respondWith(
    caches.match(event.request).then(async function (cachedResponse) {
      if (cachedResponse) {
        return cachedResponse;
      }
      try {
        let freshResponse = await fetch(event.request);
        if (freshResponse) {
          return freshResponse;
        }
      }
      catch (error) {
        var offlinePageResponse = new Response(
          '',
          {
            status: 302,
            statusText: 'found',
            headers: {
              Location: '/offline.html'
            }
          }
        )
        return offlinePageResponse;
      }
    })
  )
});