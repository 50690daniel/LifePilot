// LifePilot Service Worker v2.0
const CACHE_NAME = 'lifepilot-v4';
const STATIC_ASSETS = [
  '/LifePilot/',
  '/LifePilot/index.html',
  '/LifePilot/mobile.html',
  '/LifePilot/ocio.html',
  '/LifePilot/ejercicios.html',
  '/LifePilot/manifest.json',
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap',
  'https://accounts.google.com/gsi/client'
];

// INSTALL — cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching static assets');
      return cache.addAll(STATIC_ASSETS).catch(err => {
        console.log('[SW] Some assets failed to cache:', err);
      });
    })
  );
  self.skipWaiting();
});

// ACTIVATE — clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => {
          console.log('[SW] Deleting old cache:', k);
          return caches.delete(k);
        })
      )
    )
  );
  self.clients.claim();
});

// FETCH — network first, fallback to cache
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Skip non-GET, chrome-extension, and API calls
  if (event.request.method !== 'GET') return;
  if (url.protocol === 'chrome-extension:') return;
  if (url.hostname.includes('googleapis.com') ||
      url.hostname.includes('groq.com') ||
      url.hostname.includes('notion.com') ||
      url.hostname.includes('firebaseapp.com') ||
      url.hostname.includes('icloud.com') ||
      url.hostname.includes('corsproxy.io')) return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache successful responses for HTML and fonts
        if (response.ok &&
            (url.hostname === 'fonts.googleapis.com' ||
             url.pathname.endsWith('.html') ||
             url.pathname.endsWith('.json'))) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // Offline fallback
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          // Return offline page for navigation
          if (event.request.mode === 'navigate') {
            return caches.match('/LifePilot/index.html');
          }
        });
      })
  );
});

// PUSH NOTIFICATIONS (for future use)
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'LifePilot', {
      body: data.body || '',
      icon: '/LifePilot/icon-192.png',
      badge: '/LifePilot/icon-192.png',
      tag: data.tag || 'lifepilot',
      data: data
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/LifePilot/')
  );
});
