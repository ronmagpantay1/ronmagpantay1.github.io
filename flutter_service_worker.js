'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "963ff88fd8be43df8b4a7f377c88bc2f",
"assets/AssetManifest.bin.json": "5c8dd80778edf8e96323b5ffdcd58775",
"assets/AssetManifest.json": "fb519c0f25a583e94b138b4aa39f4083",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/ZenDots-Regular.ttf": "9bdc5e0fad9a4bf6d9aafdafef775904",
"assets/assets/icons/forward.png": "f24e80593401ee557585321c52a62c5f",
"assets/assets/icons/rewind.png": "b2075c6b1d4eb49b4f044ad5bf1a2477",
"assets/assets/images/adai.jpg": "29f9bd7fae164ce9e843f4f0469ddb64",
"assets/assets/images/afterhours.jpg": "6a12abbfaf805828371cf100412c285d",
"assets/assets/images/arctic.jpg": "e1225346008adeb5279e4abc0fa6210f",
"assets/assets/images/atl.jpg": "6221837d786fe5f5e894a5238c021ef8",
"assets/assets/images/bp.jpg": "2b483d9e91fd8fd3bdd73b4a6f683547",
"assets/assets/images/cas.jpg": "0420de6e7615d6d405e651f8fa2ea359",
"assets/assets/images/cte.jpg": "6de1db538688cbb1f231488f9cd17a7d",
"assets/assets/images/currents.jpg": "110c3e6f3bacd9bfc1c4bb740cb56b71",
"assets/assets/images/double.jpg": "146156b63194e813c198f7069815b492",
"assets/assets/images/giphy.gif": "986b9717ced1d29a11937f809c7a2173",
"assets/assets/images/gorillaz.jpg": "0bb12db656180f6e9c1fbd7a95ad33f0",
"assets/assets/images/graduation.jpg": "3766ca4be63e257f182c79f312992f34",
"assets/assets/images/gs.jpg": "afb7c63f069627563ddd38a16d281846",
"assets/assets/images/igor.jpg": "3089f06ca24a8a4036d465bcebb73ca3",
"assets/assets/images/linkin.jpg": "716f922cec3b01c12271d9ab869e2a96",
"assets/assets/images/mac.jpg": "55eeb6856eb21c31799e88aae58c7b59",
"assets/assets/images/mcr.jpg": "db997bd76ba913615d2e9a6b840d0c12",
"assets/assets/images/nd.jpg": "f64acb51f30938db12eaa70e8203b09a",
"assets/assets/images/paramore.jpg": "8f7fdecc29a8c785b404cae0f8b1e229",
"assets/assets/images/patp.jpg": "31eb7ea1e1671e7b0de777237d8c5672",
"assets/assets/images/ptv.jpg": "075048e272cdfde4d65224111b512100",
"assets/assets/images/roc.jpg": "e12dee31a3d4e7e30f26f9d11fea4cf2",
"assets/assets/images/steve.jpg": "be0db51791840cec0956bc1a44dc6a22",
"assets/assets/images/tame.jpg": "ab07dedc75f027163108b9bb0d201ffb",
"assets/assets/images/tyler.jpg": "67462cefff9bf987f3df6ab068a71be1",
"assets/assets/images/vinyl_record.png": "087ed8bd2fd87e0c49fa35aa62052f5f",
"assets/assets/songs/inbloom.mp3": "aa453d2f15324134649c4134221eb172",
"assets/FontManifest.json": "c628a37d2300aa74874846ea3bbcce3c",
"assets/fonts/MaterialIcons-Regular.otf": "bd8a9217e5168823031e5a7694de2cb1",
"assets/NOTICES": "27ddf9d48d6633d0a0887aac7c0c6c7c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "f64bdb5d938914b4fac144c2c3aa1c94",
"canvaskit/canvaskit.wasm": "fcab7f9681c8a50daadbc3c242319078",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "907d264290252a44de8422c5898c4158",
"canvaskit/chromium/canvaskit.wasm": "f6d2a460565f3f70c54aa207ce502b69",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "01a3e940f2ae353a6097a61be6efc01f",
"canvaskit/skwasm.wasm": "2eba7de284f5b90a5710d2fc922efedd",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "07633f7798946813fedc8d22c435bdf6",
"/": "07633f7798946813fedc8d22c435bdf6",
"main.dart.js": "6032170858e19ef0dba4c6920f4c514c",
"manifest.json": "4c49c4fe0abfa17c75cf84a65eb76573",
"version.json": "0c57e397d77bf89c20ee45727bd59040"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
