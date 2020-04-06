'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "06e76dad3ff3f6ed22ba0c4d9831e33e",
"assets/assets/images/categories-bg.jpg": "e1cfc3ff5396f1f287cd575946a90eb4",
"assets/assets/myblog/dart%25E6%2596%25B0%25E7%2589%25B9%25E6%2580%25A7.md": "7aa78382d06696ab240ed7e241c2922e",
"assets/assets/myblog/Flutter%25E5%2585%25A5%25E9%2597%25A8%25E7%25AE%2580%25E4%25BB%258B.md": "b4a0c59033e8e228f98f055030171d68",
"assets/assets/myblog/flutter%25E7%2582%25B9%25E5%2587%25BB%25E4%25BA%258B%25E4%25BB%25B6.md": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/myblog/flutter%25E7%258E%25AF%25E5%25A2%2583%25E9%2585%258D%25E7%25BD%25AE.md": "7894a22acc9fafe2d75be076bee2af69",
"assets/assets/myblog/flutter%25E7%25BC%2596%25E7%25A8%258B%25E6%2580%259D%25E6%2583%25B3.md": "5d7add1ac76cd8c8dd88310f78b6ac2a",
"assets/assets/myblog/flutter%25E9%25A3%258E%25E6%25A0%25BC.md": "a3599d944c28f38be122460751df519a",
"assets/assets/myblog/sample.md": "d6de0a6df6927dd57ec5bd1df8abfe7f",
"assets/assets/myblog/widget.md": "8c80482e7a9ae86787443bf0c095ee75",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "9fbbfb7734b37a13ea1de5daa7537bd4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "95ada3f33ed4f1430ed308b3e8792399",
"main.dart.js": "a3c3200932ee8d8957de4e63f5c966cb",
"manifest.json": "55a3632628f9743ade539139dc3dc4c4"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
