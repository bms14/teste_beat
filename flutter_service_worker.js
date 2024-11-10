'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "642b7f49ccff400691f32c03ed194509",
"version.json": "2b4d6a9d078137f6a1285c214191cc64",
"index.html": "88e430d3c6b5d0d443228d44443de71a",
"/": "88e430d3c6b5d0d443228d44443de71a",
"main.dart.js": "9f3044530c1082803f6424bcdf66c912",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "57e1bc34e20900f923ed77417ee7a2c9",
"assets/AssetManifest.json": "8ca8a9be897e43525e9ae4e728b18aa5",
"assets/NOTICES": "34d85989d29f144f91d5ee9940252495",
"assets/FontManifest.json": "036a29be941d2e419698412a08cf1552",
"assets/AssetManifest.bin.json": "9ff8e09033ff09f257f129716e2b7461",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f1ddeb65da509c5c29e67f3039212d1c",
"assets/fonts/MaterialIcons-Regular.otf": "961cf0cbbb2f6da5544478e48ade3114",
"assets/assets/images/profile_photo_majose.png": "8d20e46354108fb2c43f3bc83c5f746d",
"assets/assets/images/logo_black.png": "726d61208541b26d1dea90d8f07badac",
"assets/assets/images/profile_photo_lucilia.png": "28c63101d8046d7b443ed9c510875dac",
"assets/assets/images/profile_photo2.png": "c253cd9306945dbffe5700d2a6dd9c67",
"assets/assets/images/profile_photo1.png": "b02af4bc1aa1e135e08419567a946248",
"assets/assets/images/map.png": "54e9ddfb7c2a5f63e051c29647ae39c3",
"assets/assets/images/profile_photo_hugo.png": "1674ee4e74a78f002ecbd61a29946fd3",
"assets/assets/images/cell.png": "bc90bd5954875d9477c02c7db78747f5",
"assets/assets/images/backgroundImage.png": "b88a56342ee865a2d09cc94ad64d6e65",
"assets/assets/images/logo_white.png": "45693231aead5d8328f15042f7d7c7ea",
"assets/assets/images/partners/partners_1.jpg": "2a5be668b4223d074c91a5f6d5974fde",
"assets/assets/images/partners/partners_1.png": "2d28fb82911f27560e4da5c32660d0c6",
"assets/assets/images/partners/partners_0.png": "bb00937599c43b7ac48e06995b4cefcd",
"assets/assets/images/partners/partners_0.jpg": "7afb1d3d27691e74f4da56eeadf992f6",
"assets/assets/images/partners/partners_2.jpg": "7198da219396c8c3e33dbbb45206d7e5",
"assets/assets/images/partners/partners_2.png": "a45de23b369cf9fccaa1bded5486417f",
"assets/assets/images/partners/partners_3.png": "8b8f9eee4ed6983bdf54165dd54b1b09",
"assets/assets/images/partners/partners_3.jpg": "5e6537285c9bb2b72c6c6fc5fe73a6f6",
"assets/assets/images/partners/partners_7.jpg": "431682280e5a82ceaf0c31b4e5870236",
"assets/assets/images/partners/partners_7.png": "d81714bf0c396efca99a417f3fca61ef",
"assets/assets/images/partners/partners_6.png": "9d3d5bd02a23ddee157bfd34b9547b87",
"assets/assets/images/partners/partners_6.jpg": "bdf2ce108eb6c5474ef85eea3d38c15b",
"assets/assets/images/partners/partners_4.jpg": "be8a35e80bfe28f2a56af8e677e85900",
"assets/assets/images/partners/partners_4.png": "eab00a5c6f3e24c88a0fbc71484646a7",
"assets/assets/images/partners/partners_5.png": "371ac9dd7824d5040861bf686284732c",
"assets/assets/images/partners/partners_5.jpg": "9c474dc3ada7ae3f25173535aea5026e",
"assets/assets/images/microscope.png": "6a75aa3c7761564496932d8ed1d419b6",
"assets/assets/images/awards/awards_2.png": "656a7150ee4a7712e4bd47f3ec05d2ab",
"assets/assets/images/awards/awards_3.png": "7b841a7e86b39d3150168b4459a83bd8",
"assets/assets/images/awards/awards_1.png": "44ea8953581d81a590476eae150aeec6",
"assets/assets/images/awards/awards_0.png": "2e83ce340feeb86c8081dc4eaf463ccb",
"assets/assets/images/awards/awards_4.png": "b99d0afc60a341042c229b0676da96c5",
"assets/assets/images/awards/awards_5.png": "14b9a50a03e4e0aa62d991ab113ac1aa",
"assets/assets/images/awards/awards_7.png": "86fda5df971079fa0f6604b0a5c18615",
"assets/assets/images/awards/awards_6.png": "9abc6711dc062175ef223c51621344e1",
"assets/assets/images/awards/awards_8.png": "41cc2d6b97f2c749b5e34ea52370335b",
"assets/assets/images/awards/awards_9.png": "51c88bcd8111c9cbd9bf48fa545f43f9",
"assets/assets/images/contacts.jpg": "1db500c839b0fe572d86d9f755cd2fa9",
"assets/assets/images/profile_photo_lucio.png": "97f2684d0ad70100a9467c237d2f1d66",
"assets/assets/images/profile_photo_angela.png": "dd563fa906498d96272748540b38f20a",
"assets/assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/Inter-Light.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/assets/fonts/BigCaslon.ttf": "e4731b57b3fd6686d46ac22e7126411b",
"assets/assets/fonts/Inter-Thin.ttf": "4558ff85abeab91af24c86aab81509a7",
"assets/assets/fonts/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter-ExtraBold.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/assets/fonts/Inter-ExtraLight.ttf": "7a177fa21fece72dfaa5639d8f1c114a",
"assets/assets/fonts/Inter-Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/assets/fonts/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
