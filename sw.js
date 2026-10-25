// Uygulama olarak yüklenebilmesi için en sade servis çalışanı: sayfayı önbelleğe alır, gerisini ağa bırakır.
var CACHE = "edith-v2";
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(["./", "index.html", "manifest.webmanifest", "edith-icon.png"]); }));
  self.skipWaiting();
});
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(fetch(e.request).catch(function () { return caches.match(e.request); }));
});
