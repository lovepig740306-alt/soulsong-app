const CACHE_NAME = 'soulsong-pwa-v2';
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e) => {
  if (e.request.url.includes('/media/')) return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
