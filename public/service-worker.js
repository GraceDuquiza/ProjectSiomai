// Combined Service Worker and Cache File

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
];

// Install event: Cache the files
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
        console.log('Caching files...');
        return cache.addAll(urlsToCache);  // Cache the files listed in urlsToCache
        }).catch((err) => {
        console.error('Error during caching:', err);
        })
    );
});

// Activate event: Clean up old caches (if needed)
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated');
  // Optional: You can clean up old caches here if you want to
});

// Fetch event: Cache-first strategy with network fallback
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
            console.log(`Serving from cache: ${event.request.url}`);
            return cachedResponse;  // Return the cached file if it exists
        }

        console.log(`Fetching from network: ${event.request.url}`);
        return fetch(event.request);  // Fetch from the network if not cached
        })
    );
});
