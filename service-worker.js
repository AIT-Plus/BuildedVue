if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>i(e,o),f={module:{uri:o},exports:l,require:c};s[o]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ait"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"202204.csv",revision:"0e61a2b39960b5be8f96bc102ae6f763"},{url:"202210.csv",revision:"02d86810f40cb45374647547e14970fb"},{url:"202211.csv",revision:"e3e1288d981aa0e38d3d2ffac36b913b"},{url:"202212.csv",revision:"1751bbab5cd0055e502244b7c8161637"},{url:"202301.csv",revision:"8c0b370e5152911192685b8065a0011e"},{url:"202302.csv",revision:"ef6d7c5ce823692998d1ba72a25c5e87"},{url:"css/app.6a828f33.css",revision:null},{url:"css/chunk-vendors.34ed28a7.css",revision:null},{url:"firebase-messaging-sw.js",revision:"3ccf0cd72478d7d09f24083621c0a449"},{url:"fonts/materialdesignicons-webfont.21f691f0.ttf",revision:null},{url:"fonts/materialdesignicons-webfont.54b0f60d.woff2",revision:null},{url:"fonts/materialdesignicons-webfont.5d875350.eot",revision:null},{url:"fonts/materialdesignicons-webfont.d671cbf6.woff",revision:null},{url:"img/aitplus.png",revision:"a8647d572977a3b84a15acb15cf5b234"},{url:"index.html",revision:"e968bad35192b29735df0f7c83b9f43c"},{url:"js/app.b82a4bf1.js",revision:null},{url:"js/chunk-vendors.0a9dff53.js",revision:null},{url:"js/webfontloader.e592187f.js",revision:null},{url:"manifest.json",revision:"b3fc6d3d7736c8891acb25b3bdd914ab"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
