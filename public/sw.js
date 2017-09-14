self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('pwa').then(cache => {
      return cache.addAll([
        '/',
        '/sw.js',
        '/index.html',
        '/planets',
        '/bundle.js',
        '/index.css',
        '/cat.png',
        '/duck.png',
        '/donut.png',
        '/racoon.png',
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
