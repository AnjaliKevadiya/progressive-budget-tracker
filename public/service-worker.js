console.log("Hello from service worker!");
const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/manifest.json",
    "/service-worker.js",
    "/assets/css/style.css",
    "/assets/images/icons/icon-192x192.png",
    "/assets/images/icons/icon-512x512.png",
    "/assets/js/index.js"
];

const CACHE_NAME = "static-cache-v2",
const DATA_CACHE_NAME = "data-cache-v1"

//install
self.addEventListener("install", function(evt) {
    
    // pre cache all static assets
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Your files were pre-cached successfully!");
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});

//activate
self.addEventListener("activate", function(evt) {
    evt.waitUntil(
        caches.keys().then(keyList => {
            keyList.map(key => {
                if(key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                    console.log("Removing old cache data", key);
                    return caches.delete(key);
                }
            })
        }) 
    );

    self.clients.claim();
});