if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("./sw.js")
			.then((reg) => console.log("Service worker registered"))
			.catch((err) => console.error(`Service Worker Error: ${err}`));
	});
} else {
	console.log("Service Worker is not supported by browser.");
}

const staticCache = "assets-v29"; // Can be any string
const dynamicCache = "dynamic-v14";
const cachedAssets = [
	"../src/img/logo.png",
	"../src/img/bg_home.png",
	"../src/img/bg_home_mobile.png",
	"../src/img/play.png",
	"../src/img/about_1.png",
	"offline.html",
	"offline.png",
];

const limteCacheSize = (name, size) => {
	caches.open(name).then((cache) => {
		cache.keys((keys) => {
			if (keys.length >= size) {
				cache.delete(keys[0]).then(() => limteCacheSize(name, size));
			}
		});
	});
};
// Call install event
self.addEventListener("install", (e) => {
	e.waitUntil(
		caches
			.open(staticCache)
			.then((cache) => cache.addAll(cachedAssets))
			.then(() => self.skipWaiting()),
	);
});

self.addEventListener("activate", (e) => {
	e.waitUntil(
		caches.keys().then((keys) => {
			return Promise.all(
				keys
					.filter((key) => key != staticCache && key !== dynamicCache)
					.map((key) => caches.delete(key)),
			);
		}),
	);
});

self.addEventListener("fetch", (event) => {
	if (event.request.url.indexOf("contentful.com") === -1) {
		event.respondWith(
			caches.match(event.request).then((cacheRes) => {
				return (
					cacheRes ||
					fetch(event.request)
						.then((fetchRes) => {
							return caches.open(dynamicCache).then((cache) => {
								cache.put(event.request.url, fetchRes.clone());
								limteCacheSize(dynamicCache, 15);
								return fetchRes;
							});
						})
						.catch(() => {
							return caches.match("offline.html");
						})
				);
			}),
		);
	}
});
