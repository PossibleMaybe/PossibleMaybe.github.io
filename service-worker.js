var cacheName = 'hello,world';
self.addEventListener('install',event => {
    event.waitUntil(caches.open(cacheName).then( cache => cache.addAll(['./js/script.js','./img/94cad1c8a786c9179e80a80cc23d70cf3bc75700.jpg'])));
})