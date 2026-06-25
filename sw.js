// Service Worker for Deutsch B1 PWA
const CACHE_NAME = 'deutsch-b1-v1';
const STATIC_ASSETS = [
  '/app/today.html',
  '/app/vocabulary.html',
  '/app/grammar.html',
  '/app/listening.html',
  '/app/reading.html',
  '/app/practice.html',
  '/app/alphabet.html',
  '/app/roadmap.html',
  '/app/dashboard.html',
  '/css/style.css',
  '/js/firebase-config.js',
  '/js/auth.js',
  '/js/progress.js',
  '/js/app.js',
  '/js/tts.js',
  '/js/data/vocabulary.js',
  '/js/data/daily-plans.js',
  '/js/data/grammar.js',
  '/js/data/listening.js',
  '/js/data/reading.js',
  '/js/data/alphabet.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

self.addEventListener('fetch', function(e) {
  // Skip Firebase/external requests
  if (e.request.url.includes('firebasejs') || 
      e.request.url.includes('googleapis') ||
      e.request.url.includes('gstatic') ||
      e.request.url.includes('cdnjs')) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(k) { return k !== CACHE_NAME; }).map(function(k) { return caches.delete(k); }));
    })
  );
});
