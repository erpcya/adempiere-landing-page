if(!self.define){let s,e={};const a=(a,f)=>(a=new URL(a+".js",f).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(f,d)=>{const c=s||("document"in self?document.currentScript.src:"")||location.href;if(e[c])return;let r={};const b=s=>a(s,c),i={module:{uri:c},exports:r,require:b};e[c]=Promise.all(f.map((s=>i[s]||b(s)))).then((s=>(d(...s),r)))}}define(["./workbox-fa99c014"],(function(s){"use strict";s.setCacheNameDetails({prefix:"hope"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/css/2997.styles.091bf7f4.css",revision:"bb366fcb575e88e586c9863e4b3a7148"},{url:"assets/css/6514.styles.ddb5f354.css",revision:"48a4724061d5835d4b319c7fdd4ededb"},{url:"assets/css/7102.styles.03540960.css",revision:"dd488423e3404b88a1778b109d808ea2"},{url:"assets/css/775.styles.643a48cc.css",revision:"14d98d96fb0d732e152e548b8b1dcf3a"},{url:"assets/css/styles.d0c6920c.css",revision:"5f0454811f120242af44d29d314e73cd"},{url:"assets/fonts/league-gothic.080eee2a.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/fonts/league-gothic.12baac5d.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/fonts/league-gothic.6ae91382.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/fonts/source-sans-pro-italic.10a5cb40.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/fonts/source-sans-pro-italic.97e79d3e.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/fonts/source-sans-pro-italic.983d97ca.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/fonts/source-sans-pro-regular.36443d24.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/fonts/source-sans-pro-regular.45c54810.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/fonts/source-sans-pro-regular.d1653550.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/fonts/source-sans-pro-semibold.6ebea875.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/fonts/source-sans-pro-semibold.83db537e.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/fonts/source-sans-pro-semibold.f11ba60a.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/fonts/source-sans-pro-semibolditalic.522a9ee9.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/fonts/source-sans-pro-semibolditalic.a43f56ac.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/fonts/source-sans-pro-semibolditalic.fb03c660.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/img/vuepress-hope-logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/js/1231.2975943c.js",revision:"d01e4d8639d8004ad96557a8ba220e20"},{url:"assets/js/2135.421975fb.js",revision:"3a1e605968717d43bd3a7fe00e637f36"},{url:"assets/js/2352.161b7552.js",revision:"ba78ac459d772d58f34a2134e2b177a5"},{url:"assets/js/3150.279ff59c.js",revision:"99f92f9edf4c56cc50c7b77ab8a44fd8"},{url:"assets/js/3259.e125667e.js",revision:"dc65d82780c9a167bc30684a290da2bf"},{url:"assets/js/4140.4d2cfecb.js",revision:"29e1f6e2d361a718214713fe93d66e08"},{url:"assets/js/4792.2268efe7.js",revision:"abe117b7627ac8e130f1b310fda9aa02"},{url:"assets/js/5304.4af3eaa9.js",revision:"50988f0f311bbf5970128ff158b268e6"},{url:"assets/js/5577.b6beedc7.js",revision:"70ecfb57e23efe27b637ed5146829b71"},{url:"assets/js/5603.b09abd12.js",revision:"6c9e539ac82061a511c4ec40cd3020e8"},{url:"assets/js/5817.6e67e90b.js",revision:"e2e6dc9e08c42960f0cedb0c7d7a6989"},{url:"assets/js/7694.656b0ec6.js",revision:"d1f5b93fe60e6e0f5845dbeba6e74fd9"},{url:"assets/js/7751.a7a13719.js",revision:"4aa954a7b01fae70eb3fc446cdbfe869"},{url:"assets/js/7778.278d0818.js",revision:"19703fa453e33f47fa9e0b7089243657"},{url:"assets/js/7891.5ae93837.js",revision:"299cede3e3ce78f536a382571443bb0d"},{url:"assets/js/8969.3f7b6c62.js",revision:"12b324078d1c26bd2427de4d1de6109f"},{url:"assets/js/9097.652f718b.js",revision:"e4a462ef9380f6113f94d218f137e5a1"},{url:"assets/js/app.ee3c8c11.js",revision:"f17fced2280c72b1a983330493a399b7"},{url:"assets/js/runtime~app.e2a6fa61.js",revision:"238e22640ac2fb61da824cf727449773"},{url:"assets/js/v-01560935.547dcf2b.js",revision:"c3dffede554ca1605deb489f3e15c02d"},{url:"assets/js/v-0c1e2985.db21ed09.js",revision:"031f7a00b2d14e4cce76aedc2dbf7683"},{url:"assets/js/v-0fe4a77d.a155ac83.js",revision:"935a5c243745e676f26427ce4267fcba"},{url:"assets/js/v-11d18bd5.44594a17.js",revision:"e0dbe4f35bb51a4e438e11b896307eba"},{url:"assets/js/v-154dc4c4.ac974d74.js",revision:"76cb322f26fa1c7e328f1bea5e33a662"},{url:"assets/js/v-20f71d1f.6857aa90.js",revision:"2f77aa03c691a55c4956e1c72721a849"},{url:"assets/js/v-26aa7516.524b0fd7.js",revision:"d1d85492dbb3127752c7c882f3683dc7"},{url:"assets/js/v-281d6d34.2639ce4e.js",revision:"0c049e0f2b52df6767b6a02ae038fea9"},{url:"assets/js/v-28dc0e2e.0f6341f3.js",revision:"dd0438f0a4b7e108fe5846cfb12ffd6c"},{url:"assets/js/v-2a431c62.b9eccd7e.js",revision:"26a59e8ef59c260166fd8ce632a5c2ae"},{url:"assets/js/v-2d0a87a8.14255d38.js",revision:"20c0062524ab5708bf0a650ac665ffcc"},{url:"assets/js/v-3141efb8.8326c73d.js",revision:"3e4c0def8c720e7331d40ca59c982b05"},{url:"assets/js/v-32719b04.193f7f51.js",revision:"a9f566a48af98f8adc7355adab9f697d"},{url:"assets/js/v-33d2c221.6af31326.js",revision:"f95ce5a1368136e8aece2c804ddb47f4"},{url:"assets/js/v-36c28bdc.3c1102d6.js",revision:"49acfd67ca5e38e9b08a360c03be9c3b"},{url:"assets/js/v-3706649a.55c88048.js",revision:"ad0be518e5b9fc045259cb66e3095a72"},{url:"assets/js/v-3d954bec.55f63641.js",revision:"b8e22ce62f49a6e8e40ebd69d68d748c"},{url:"assets/js/v-3f339314.676a804e.js",revision:"4221681ffd2f12410143309e73167632"},{url:"assets/js/v-428bd6da.6397cd7a.js",revision:"d22a9e5a201a5af30b3ff45af3285499"},{url:"assets/js/v-441acf9e.d8a0fe34.js",revision:"5f963954376c7400e34c576f7a757c29"},{url:"assets/js/v-46647849.8407260f.js",revision:"1a7e792a0c7df1927b06a51eba07e71a"},{url:"assets/js/v-49a1245d.7f0a93d9.js",revision:"8b639386928a0bc8f490f60091fb631e"},{url:"assets/js/v-51fd405c.8de148c6.js",revision:"4789b64763797848c2f9d415c77417be"},{url:"assets/js/v-586be6a4.32d06a11.js",revision:"237a57cfd1315d8ef96f2ba9abe47275"},{url:"assets/js/v-5963163c.aa8ddd1e.js",revision:"004872a6a9f07d2234ed54b866e2fa82"},{url:"assets/js/v-59dae4b3.a266c32e.js",revision:"2a9e58df236c3bddb6552b16db6f109f"},{url:"assets/js/v-5bc93818.84fa33a9.js",revision:"d73fa8c9f81cd04097fb37afd55f8139"},{url:"assets/js/v-61fbe5b8.c6501239.js",revision:"c5fafcefbf204727f6588aba95ff4e27"},{url:"assets/js/v-63bad279.018539e1.js",revision:"4acc810df9ecdedbff675c7eb5597d9e"},{url:"assets/js/v-6cdd2e22.8289817d.js",revision:"855e9c8196945ef87b157e3cf464a175"},{url:"assets/js/v-744d024e.c4b64e62.js",revision:"833b6f5761b7f37fe20193d1bbb18a07"},{url:"assets/js/v-74bc627b.7d6008b4.js",revision:"edcbab04ce0f3a880d556e07d7c5e0f0"},{url:"assets/js/v-75ed4ea4.77141f26.js",revision:"8730ae3160f469028b2b0e16ad4add94"},{url:"assets/js/v-770f08a8.e8d9b62b.js",revision:"fa7322a42a9bd6037e283b73627e9d51"},{url:"assets/js/v-785d584c.a60e8e5a.js",revision:"2857413e7beaadc6037bdcfcdb7053a9"},{url:"assets/js/v-8a4b26ee.a77945ea.js",revision:"c0c6f8d7559a982751b47af46b675f96"},{url:"assets/js/v-8daa1a0e.c029b901.js",revision:"28a4bc60a369759c579f9578143dcfa5"},{url:"assets/js/v-9b242b68.6173c7cc.js",revision:"09a0605b0bf6a152b065a9876df76dfa"},{url:"assets/js/v-a04271fe.d239d899.js",revision:"5e05dc3509915fa30212a36296dbb6eb"},{url:"assets/js/v-aaaf9e70.f4452e4c.js",revision:"7f2113061ff9f26339ad733752dc2caa"},{url:"assets/js/v-af7ebb74.48fbf0f3.js",revision:"c8b24851bd1a89e8b33f798d779eeae1"},{url:"assets/js/v-c5859cbe.cd5c3aec.js",revision:"0dd86db39922e372fc5531bd2545c03d"},{url:"assets/js/v-c79ad626.16bad8bc.js",revision:"339dbd59ebbcd0f0d3652822ef139941"},{url:"assets/js/v-ca5689ce.430b490e.js",revision:"1d74dfa5651df03a7a8e1fdb58337d03"},{url:"assets/js/v-d804e652.d6a5df10.js",revision:"e51507d1549f0e1e99076757e250a8d5"},{url:"assets/js/v-d861a984.c7fb93ef.js",revision:"9be6ac223886eafdcfd4c40881d0d098"},{url:"assets/js/v-e52c881c.f686d989.js",revision:"3fc6b3bc8984bba0e3d99c9f0f2d06a8"},{url:"assets/js/v-ec7839e4.5757def2.js",revision:"b90f75738ddba8f421fccfc00eade99f"},{url:"assets/js/v-ee01102c.4d453888.js",revision:"dbc2448f8f705fd62b5d32fe3bc21e18"},{url:"assets/js/v-fcae060a.1b61cb9a.js",revision:"23d07b82b70011e1e7873ca727e2ba8b"},{url:"assets/js/v-fda8dc40.59ddf0cd.js",revision:"d15b417f66235cf0a493789cd9dbef45"},{url:"logo.svg",revision:"27df92f87a5cd8c23f71443302b56019"},{url:"index.html",revision:"c446900d0f32a88149088ab83891f8b0"},{url:"404.html",revision:"3eab2410b8328c7fdded563d7568fe34"}],{}),s.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
