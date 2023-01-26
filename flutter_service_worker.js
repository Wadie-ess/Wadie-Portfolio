'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "bd341ba74d38c530da636604a427deda",
"index.html": "52b504c446bea0971fdde20413b02249",
"/": "52b504c446bea0971fdde20413b02249",
"loader.css": "3ed0540af717cd56f01a37a08f714759",
"main.dart.js": "98fe9acc05f5bd5cb76f08bd9e91fc51",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "76858bfccb016815b5d8257df072ea5f",
"assets/AssetManifest.json": "bff0d7abd801f72d31c14e49b5549252",
"assets/NOTICES": "15f1b26fbba5641bc9aff9ec4b2ced31",
"assets/FontManifest.json": "7aaf3996738086bbd796613e14ef9e45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/brand3.png": "c0915a84744f3481a2105c5aea6727e0",
"assets/assets/me.png": "b88aee0d644450360de86fa1c4e8172d",
"assets/assets/ecom.png": "d7da8875323c8c9242106d1aad295f52",
"assets/assets/email.png": "5eb3c4b86aafbee72b8c471b29413a50",
"assets/assets/mappin.png": "9cc090022ae31337336d2024160714b8",
"assets/assets/design.png": "6aaec412d8837ac9a83f03f453877606",
"assets/assets/hash.png": "e6a298a3f3873272de1ccd9611ba43c4",
"assets/assets/brand2.png": "91c6d8820e35e10e39757e0de6ac4345",
"assets/assets/plants2.png": "3832f07e5a321190029eb338fd800e0d",
"assets/assets/fiver.png": "44bb9ce0af9de6ca7dfbba7428d7c4f4",
"assets/assets/group_1%25202.png": "83dcbc6d523fb99ff1f56994a3c4a653",
"assets/assets/train.png": "cabc44b50190f3385f6a69e1f0a61ae3",
"assets/assets/music2.png": "2d79f5895314a1c435a48686c73347a1",
"assets/assets/brand1.png": "f3a3a0de79048e1f14aac62ec76609b8",
"assets/assets/finawa.png": "b34a844ac50fe6b854f79045b71a5777",
"assets/assets/brand5.png": "fc57e9a9ff95830ea207e2452ffd4bd6",
"assets/assets/desk.png": "83dcbc6d523fb99ff1f56994a3c4a653",
"assets/assets/cub.gif": "0d72c1ff11f03144270eea59ea83fe48",
"assets/assets/Untitled-1.xd": "4594a80d4d988c1e3b90f09122dbb396",
"assets/assets/brand4.png": "e9441e9a5d26e508f592aa31b9febff6",
"assets/assets/logos.xd": "1bfba21f0e4afda5c663b633b0f613e5",
"assets/assets/um6.png": "c81889fa65391154648fa19ccd9f6e41",
"assets/assets/oncf.png": "6b143393ad379dc348c358684c5b64ce",
"assets/assets/chairs.png": "e33bcda2612c8cde6c18c7502735a04b",
"assets/assets/in.png": "64254834c371550d527f9c773b02c28a",
"assets/assets/load2.gif": "1af68cbeb63f40d4262f43779e113161",
"assets/assets/all5.gif": "1e1431f8a8ff0bdb071cd5c5de4a10b8",
"assets/assets/male.png": "a687ddbf4597360c3b9e293a58b1d829",
"assets/assets/1337.jpeg": "c28d619da980a24c80081d1fccef2497",
"assets/assets/github.png": "da64f0237fa1533b76d5f456ed7a7d48",
"assets/assets/ofpptt.png": "d6e58b2a54b749306cdaac8f181f66d6",
"assets/assets/music.png": "24b49e00b6385dc404741c4c9fabf435",
"assets/assets/todo.png": "246f6086897b69da9a8f6744742cabdf",
"assets/assets/company_name.png": "ee5f55854134eb6f3fb1838cf1973ae9",
"assets/assets/loading.gif": "4441959edeb870f1583845a64155ae84",
"assets/assets/promote.png": "2bd8adcad79a4ebb80888d1a0583b3c4",
"assets/assets/tools.png": "be364d9f0c4e0f71d9849a59c0dfacf8",
"assets/assets/weather.png": "d6d23a1273c2092f6aebba3c678f84a4",
"assets/assets/test2.png": "16c6c650ace010cfd5707e26e27114f4",
"assets/assets/image_2.png": "bf23d484c54e92abac515f9de7863e7b",
"assets/assets/ecom2.png": "2d249ad6365e95b66194a4e44e2e1d11",
"assets/assets/test.png": "1fe91cd271c7f9866ba59e0c01d86f18",
"assets/assets/female.png": "29c52b49d99a5de88d34ab04aafe3f59",
"assets/assets/fin.png": "8866a82d34e598df6c951ae18bd96d7a",
"assets/assets/weatherswift.png": "505bece18186e38d522522282d806d3e",
"assets/assets/image_1.png": "307fbd043f592ce71b2b7d538b6c5bb0",
"assets/assets/hive.png": "248bd21cf9352e4e5ca07b02bff745d0",
"assets/assets/plants.png": "830b3e35552ede134048951f838d33ef",
"assets/assets/um6p.png": "6757db7f69aacfe98fe012ebe04975de",
"assets/assets/quote.png": "1a0aa9a06293ac5689bc32012e0e13e6",
"assets/assets/UMSP_Logo-white-300.png": "e6c2aa3cb4268867002b09cd7d463753",
"assets/assets/develop.png": "471c2c94d5d04112086eba9fd78c6809",
"assets/assets/net.png": "c19b12fd9b9434532178433313368961",
"assets/assets/laptop.png": "fb49e3c0c36437239db5f8c114b03062",
"assets/assets/twitter.png": "2b4076392151e10a4155aa951d0319e7",
"assets/assets/profile.png": "1547d2a5d9e78e424144d4ec7e5d47a4",
"assets/assets/dribble.png": "9e082d5711f5a4b2ee57a98bcdbe9c76",
"assets/assets/phone.png": "45903a1ffa9ede882171aca9f71c4c29",
"assets/assets/ios.png": "49f79e21da11e96b8cf0e3b8bef6616c",
"assets/assets/me2.png": "7048fbb802e0e0491846537a98acc9c3",
"assets/assets/profile2.jpeg": "fc69595e2626b5d524e760da227cbe91",
"assets/assets/log.png": "fd3aca80fbeea47ecd11278a7b21037e",
"assets/assets/ng_4_cpp_module_01.pdf": "63ef24ec7cfdd03dd80ba4f0705444cd",
"assets/assets/write.png": "dc4f0d3df06d5fc9b13b9168b88e2560",
"assets/assets/um6.jpeg": "0c8725ddd6b38d93f73ac0050fb6c9d8",
"assets/assets/whatsapp.png": "426617ad28567da23a2346566d84b5a6",
"assets/assets/1337WhitePng.png": "98cb34a7d7078db200616833d210cef5",
"assets/assets/mostaqal.png": "e14cb8ac44fd01d6aa7ac6ddb47beadd",
"assets/assets/gek.png": "f1bd3fe7ad152a1b1c4dbd0fddf1116f",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
