if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts("fallback-NpAOL4Vm-Wd-R-N4qZj52.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"8b13d1f0411ed161a97d875ca5d9d4a0"},{url:"/_next/static/NpAOL4Vm-Wd-R-N4qZj52/_buildManifest.js",revision:"172e769da91baa11de9b258fb2d92f86"},{url:"/_next/static/NpAOL4Vm-Wd-R-N4qZj52/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-b47e11fc784a7d73.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/109-231e801b6c4bba0a.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/117-4b305e226ee4aa78.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/145-e6b4e296ac2471e0.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/199-16a462f9b69a927b.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/282-130320d30fd7853a.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/319-a77a4f6048f2d574.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/420.da57b1f83d0db9fc.js",revision:"da57b1f83d0db9fc"},{url:"/_next/static/chunks/429-9e28b7a9803ccee2.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/481.f299acfb96ec956e.js",revision:"f299acfb96ec956e"},{url:"/_next/static/chunks/491-d0105414539ab9d0.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/5e094596.a20c3a90177f9e23.js",revision:"a20c3a90177f9e23"},{url:"/_next/static/chunks/605-a816a33470c15d11.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/640-6908f423374447c4.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/742-4eb67c7c7a3816f4.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/779.9d7d1c3b9d5cf9e6.js",revision:"9d7d1c3b9d5cf9e6"},{url:"/_next/static/chunks/8e1d74a4-f59806d648e72678.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/8ffc485e.a450760c6ca4db62.js",revision:"a450760c6ca4db62"},{url:"/_next/static/chunks/app/(auth)/login/layout-01adaa7edfa758f6.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/app/(auth)/login/page-3e52089fef3cd9f6.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/app/(auth)/signup/layout-27d9f005c820ad16.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/app/(auth)/signup/page-200e453841965c41.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/app/_not-found/page-574628c7755d44b0.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/app/dashboard/page-992e56ca8745896d.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/app/history/page-00429e47ec6367d5.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/app/home/layout-5f829e3c53494859.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/app/home/page-1bf3734427a6cf0e.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/app/layout-16df0c362429f7e7.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/app/map/page-f4876961bc317175.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/app/page-5ce8394d95280995.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/app/profile/page-882925361ef116b3.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/b536a0f1.c12e4c357651cb34.js",revision:"c12e4c357651cb34"},{url:"/_next/static/chunks/d0deef33.414f5e0355024f0b.js",revision:"414f5e0355024f0b"},{url:"/_next/static/chunks/fd9d1056-aa9b9ca480dc9276.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/framework-cf2d8f6f8d843863.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/main-app-0ffadf6808523b47.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/main-f5e082af1539b6a3.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/pages/_app-15e2daefa259f0b5.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/pages/_error-28b803cb2479b966.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-1bb74363f9d010a1.js",revision:"NpAOL4Vm-Wd-R-N4qZj52"},{url:"/_next/static/css/48340cfe5c3cfec7.css",revision:"48340cfe5c3cfec7"},{url:"/_next/static/css/857aa62baa17c894.css",revision:"857aa62baa17c894"},{url:"/_next/static/css/a87ce5d932c92670.css",revision:"a87ce5d932c92670"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/favicon.svg",revision:"0185998d874c93c92cbac90ac52aa22d"},{url:"/images/gps-time-tracking.webp",revision:"7a4d67449fe6db9852abcedb4974e6c0"},{url:"/images/main-image.webp",revision:"e2f5b19f016a74bc86874f747f59b9c5"},{url:"/images/retrieve-location-and-time.webp",revision:"bcdc35adc396a8e4c94d39f355879f47"},{url:"/logo.svg",revision:"c5446005db6c9bdcea662971c86704f7"},{url:"/logo1.svg",revision:"b9271a977087a1c2c9be3aa9869a8e86"},{url:"/manifest.json",revision:"296ed2d5e6a3d1a1cc2d552602b29801"},{url:"/offline.html",revision:"3321086d80443aeef402d43bc524f2e4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
