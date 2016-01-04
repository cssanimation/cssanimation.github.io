// Service worker to help make the site load more quickly / offline first
importScripts('javascript/vendor/serviceworker-cache-polyfill.js');

// Cache name - Update to invalidate current cache
var CACHE_NAME = 'install-cache-';
var VERSION = 'v2';

var urlsToCache = [
  '/',
  '/css/main.css',
  '/javascript/site.js'
];

// Install event
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME + VERSION)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

var expectedCaches = [
  'install-cache-' + VERSION
];

self.onactivate = function(event) {
  // remove caches beginning "trains-" that aren't in
  // expectedCaches
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (expectedCaches.indexOf(cacheName) == -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
};

// Fetch event(s)
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return the response from the cached version
        if (response) {
          return response;
        }

        // Not in cache - return the result from the live server
        // `fetch` is essentially a "fallback"
        return fetch(event.request);
      }
    )
  );
});
