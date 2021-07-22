const cacheName = 'v1';

self.addEventListener('install', () => { });

self.addEventListener('activate', e => e.waitUntil(async () => {
  const cacheNames = await caches.keys();

  await Promise.all(cacheNames.map(cache => {
    if (cache !== cacheName) {
      return caches.delete(cache);
    }
  }));

  return self.skipWaiting();
}))

self.addEventListener('fetch', e => e.respondWith(
  fetch(e.request)
    .then((res) => (
      caches.open(cacheName)
        .then(cache => cache.put(e.request, res.clone()))
        .then(() => res)
    ))
    .catch(() => caches.match(e.request))
));
