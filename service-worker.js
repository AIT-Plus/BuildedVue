if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const c=e=>i(e,o),t={module:{uri:o},exports:l,require:c};s[o]=Promise.all(n.map((e=>t[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ait"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"202311.csv",revision:"86222185660cf9a2e3eda72b2d0dfcf0"},{url:"css/app.dff1ed7c.css",revision:null},{url:"css/chunk-vendors.c95e43a1.css",revision:null},{url:"firebase-messaging-sw.js",revision:"3ccf0cd72478d7d09f24083621c0a449"},{url:"fonts/materialdesignicons-webfont.21f691f0.ttf",revision:null},{url:"fonts/materialdesignicons-webfont.54b0f60d.woff2",revision:null},{url:"fonts/materialdesignicons-webfont.5d875350.eot",revision:null},{url:"fonts/materialdesignicons-webfont.d671cbf6.woff",revision:null},{url:"img/aitplus.png",revision:"a8647d572977a3b84a15acb15cf5b234"},{url:"index.html",revision:"60f76003fec72b39dc1e94331b2dad13"},{url:"js/app.b8d00b6f.js",revision:null},{url:"js/chunk-vendors.ec6b8c6e.js",revision:null},{url:"js/webfontloader.e592187f.js",revision:null},{url:"latest.csv",revision:"d0cca0df2890f179a6dc08765632c818"},{url:"manifest.json",revision:"b3fc6d3d7736c8891acb25b3bdd914ab"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
