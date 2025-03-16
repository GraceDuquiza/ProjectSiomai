// service_worker.js

const CACHE_NAME = 'siomai-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/images/JapaneseSolo_Chickensolo.jpg',
    '/images/Plus_two.jpg',
    '/images/Combo_Meal.jpg',
    '/images/Japanese_JavaRice.jpg',
    '/images/Japanese_Solo.jpg',
    '/images/MixCombo.jpg',
    '/images/FriedCombo_Japanese_Asst10pcs.jpg',
    '/images/Japanese_Solo_13pcs.jpg',
    '/images/Japanese_14pcs.jpg',
    '/images/MixandMatch.jpg',
    '/images/MixandMatch1.jpg',
    '/images/messenger.png',
    '/images/phone-solid.svg',
    '/images/couple customers.jpg',
    '/images/siomaicart.jpg',
    '/images/falling inline customer.jpg',
    '/images/foodcarts customer.jpg',
    '/images/happy customers.jpg',
    '/images/SM customers.jpg'

  // List other files you want to cache here
];

// Install event: cache the files
self.addEventListener('install', (event) => {
    event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(urlsToCache);
    })
);
});

// Fetch event: serve cached files when offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
    })
    );
});
