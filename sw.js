const cachedFiles = [
  'http://localhost:8000/Desktop/mws-restaurant-stage-1/',
  'http://localhost:8000/Desktop/mws-restaurant-stage-1/index.html',
  'http://localhost:8000/Desktop/mws-restaurant-stage-1/restaurant.html',
  'http://localhost:8000/Desktop/mws-restaurant-stage-1/css/styles.css',
  'http://localhost:8000/Desktop/mws-restaurant-stage-1/data/restaurants.json',
  'http://localhost:8000/Desktop/mws-restaurant-stage-1/js/dbhelper.js',
  'http://localhost:8000/Desktop/mws-restaurant-stage-1/js/main.js',
  'http://localhost:8000/Desktop/mws-restaurant-stage-1/js/restaurant_info.js',
  'http://localhost:8000/Desktop/mws-restaurant-stage-1/img/1.jpg',
  'http://localhost:8000/Desktop/mws-restaurant-stage-1/img/2.jpg',
  'http://localhost:8000/Desktop/mws-restaurant-stage-1/img/3.jpg',
  'http://localhost:8000/Desktop/mws-restaurant-stage-1/img/4.jpg',
  'http://localhost:8000/Desktop/mws-restaurant-stage-1/img/5.jpg',
  'http://localhost:8000/Desktop/mws-restaurant-stage-1/img/6.jpg',
  'http://localhost:8000/Desktop/mws-restaurant-stage-1/img/7.jpg',
  'http://localhost:8000/Desktop/mws-restaurant-stage-1/img/8.jpg',
  'http://localhost:8000/Desktop/mws-restaurant-stage-1/img/9.jpg',
  'http://localhost:8000/Desktop/mws-restaurant-stage-1/img/10.jpg'
];

http://localhost:8000/Desktop/mws-restaurant-stage-1/

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll(cachedFiles);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
		if (response) {
			return response;
		}
		else {
			return fetch(e.request)
			.then(function(response) {
				const clonedResponse = response.clone();
				caches.open('v1').then(function(cache) {
					cache.put(e.request, clonedResponse);
				})
				return response;
			})
			.catch(function(err) {
				console.error(err);
			});
		}
	})
  );
});
