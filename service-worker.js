const CACHE = "becklan-bms-icon-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./config.js",
  "./manifest.webmanifest",
  "./apple-touch-icon.png",
  "./favicon-16x16.png",
  "./favicon-32x32.png",
  "./icons/becklan-icon-192.png",
  "./icons/becklan-icon-512.png",
  "./icons/becklan-maskable-192.png",
  "./icons/becklan-maskable-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
