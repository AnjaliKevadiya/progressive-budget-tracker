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
