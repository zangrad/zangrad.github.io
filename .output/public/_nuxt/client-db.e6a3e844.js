import{r as j,U as K,R as M,w as T}from"./app.config.7c92b3e1.js";import{u as W}from"./cookie.92f1a596.js";import{g as B,a as $,e as A,s as J,b as R,w as H,d as b,c as q}from"./query.c3f7607a.js";import{p as G}from"./index.a6ef77ff.js";const Z=()=>{const t=new Map;return{hasItem(e){return t.has(e)},getItem(e){return t.get(e)||null},getItemRaw(e){return t.get(e)||null},setItem(e,n){t.set(e,n)},setItemRaw(e,n){t.set(e,n)},removeItem(e){t.delete(e)},getKeys(){return Array.from(t.keys())},clear(){t.clear()},dispose(){t.clear()}}};function F(t){return!t||typeof t.then!="function"?Promise.resolve(t):t}function p(t,...e){try{return F(t(...e))}catch(n){return Promise.reject(n)}}function k(t){const e=typeof t;return t===null||e!=="object"&&e!=="function"}function Q(t){const e=Object.getPrototypeOf(t);return!e||e.isPrototypeOf(Object)}function U(t){if(k(t))return String(t);if(Q(t)||Array.isArray(t))return JSON.stringify(t);if(typeof t.toJSON=="function")return U(t.toJSON());throw new Error("[unstorage] Cannot stringify value!")}function z(){if(typeof Buffer===void 0)throw new TypeError("[unstorage] Buffer is not supported!")}const _="base64:";function V(t){if(typeof t=="string")return t;z();const e=Buffer.from(t).toString("base64");return _+e}function X(t){return typeof t!="string"||!t.startsWith(_)?t:(z(),Buffer.from(t.slice(_.length),"base64"))}const ee=()=>{const t=new Map;return{hasItem(e){return t.has(e)},getItem(e){return t.get(e)||null},getItemRaw(e){return t.get(e)||null},setItem(e,n){t.set(e,n)},setItemRaw(e,n){t.set(e,n)},removeItem(e){t.delete(e)},getKeys(){return Array.from(t.keys())},clear(){t.clear()},dispose(){t.clear()}}},te=["hasItem","getItem","setItem","removeItem","getMeta","setMeta","removeMeta","getKeys","clear","mount","unmount"];function re(t,e){if(e=I(e),!e)return t;const n={...t};for(const i of te)n[i]=(a="",...s)=>t[i](e+a,...s);return n.getKeys=(i="",...a)=>t.getKeys(e+i,...a).then(s=>s.map(c=>c.slice(e.length))),n}function g(t){return t?t.split("?")[0].replace(/[/\\]/g,":").replace(/:+/g,":").replace(/^:|:$/g,""):""}function I(t){return t=g(t),t?t+":":""}function ne(t={}){const e={mounts:{"":t.driver||ee()},mountpoints:[""],watching:!1,watchListeners:[],unwatch:{}},n=r=>{for(const u of e.mountpoints)if(r.startsWith(u))return{relativeKey:r.slice(u.length),driver:e.mounts[u]};return{relativeKey:r,driver:e.mounts[""]}},i=(r,u)=>e.mountpoints.filter(o=>o.startsWith(r)||u&&r.startsWith(o)).map(o=>({relativeBase:r.length>o.length?r.slice(o.length):void 0,mountpoint:o,driver:e.mounts[o]})),a=(r,u)=>{if(e.watching){u=g(u);for(const o of e.watchListeners)o(r,u)}},s=async()=>{if(!e.watching){e.watching=!0;for(const r in e.mounts)e.unwatch[r]=await x(e.mounts[r],a,r)}},c=async()=>{if(e.watching){for(const r in e.unwatch)await e.unwatch[r]();e.unwatch={},e.watching=!1}},m={hasItem(r){r=g(r);const{relativeKey:u,driver:o}=n(r);return p(o.hasItem,u)},getItem(r){r=g(r);const{relativeKey:u,driver:o}=n(r);return p(o.getItem,u).then(l=>j(l))},getItemRaw(r){r=g(r);const{relativeKey:u,driver:o}=n(r);return o.getItemRaw?p(o.getItemRaw,u):p(o.getItem,u).then(l=>X(l))},async setItem(r,u){if(u===void 0)return m.removeItem(r);r=g(r);const{relativeKey:o,driver:l}=n(r);l.setItem&&(await p(l.setItem,o,U(u)),l.watch||a("update",r))},async setItemRaw(r,u){if(u===void 0)return m.removeItem(r);r=g(r);const{relativeKey:o,driver:l}=n(r);if(l.setItemRaw)await p(l.setItemRaw,o,u);else if(l.setItem)await p(l.setItem,o,V(u));else return;l.watch||a("update",r)},async removeItem(r,u=!0){r=g(r);const{relativeKey:o,driver:l}=n(r);l.removeItem&&(await p(l.removeItem,o),u&&await p(l.removeItem,o+"$"),l.watch||a("remove",r))},async getMeta(r,u){r=g(r);const{relativeKey:o,driver:l}=n(r),h=Object.create(null);if(l.getMeta&&Object.assign(h,await p(l.getMeta,o)),!u){const f=await p(l.getItem,o+"$").then(d=>j(d));f&&typeof f=="object"&&(typeof f.atime=="string"&&(f.atime=new Date(f.atime)),typeof f.mtime=="string"&&(f.mtime=new Date(f.mtime)),Object.assign(h,f))}return h},setMeta(r,u){return this.setItem(r+"$",u)},removeMeta(r){return this.removeItem(r+"$")},async getKeys(r){r=I(r);const u=i(r,!0);let o=[];const l=[];for(const h of u){const d=(await p(h.driver.getKeys,h.relativeBase)).map(y=>h.mountpoint+g(y)).filter(y=>!o.some(w=>y.startsWith(w)));l.push(...d),o=[h.mountpoint,...o.filter(y=>!y.startsWith(h.mountpoint))]}return r?l.filter(h=>h.startsWith(r)&&!h.endsWith("$")):l.filter(h=>!h.endsWith("$"))},async clear(r){r=I(r),await Promise.all(i(r,!1).map(async u=>{if(u.driver.clear)return p(u.driver.clear);if(u.driver.removeItem){const o=await u.driver.getKeys();return Promise.all(o.map(l=>u.driver.removeItem(l)))}}))},async dispose(){await Promise.all(Object.values(e.mounts).map(r=>C(r)))},async watch(r){return await s(),e.watchListeners.push(r),async()=>{e.watchListeners=e.watchListeners.filter(u=>u!==r),e.watchListeners.length===0&&await c()}},async unwatch(){e.watchListeners=[],await c()},mount(r,u){if(r=I(r),r&&e.mounts[r])throw new Error(`already mounted at ${r}`);return r&&(e.mountpoints.push(r),e.mountpoints.sort((o,l)=>l.length-o.length)),e.mounts[r]=u,e.watching&&Promise.resolve(x(u,a,r)).then(o=>{e.unwatch[r]=o}).catch(console.error),m},async unmount(r,u=!0){r=I(r),!(!r||!e.mounts[r])&&(e.watching&&r in e.unwatch&&(e.unwatch[r](),delete e.unwatch[r]),u&&await C(e.mounts[r]),e.mountpoints=e.mountpoints.filter(o=>o!==r),delete e.mounts[r])}};return m}function x(t,e,n){return t.watch?t.watch((i,a)=>e(i,n+a)):()=>{}}async function C(t){typeof t.dispose=="function"&&await p(t.dispose)}function ie(t={}){const e=ae(n,t.operators);function n(i,a){return typeof a!="object"||a instanceof RegExp?e.$eq(i,a):Object.keys(a||{}).every(s=>{const c=a[s];if(s.startsWith("$")&&e[s]){const m=e[s];return typeof m=="function"?m(i,c):!1}return n(B(i,s),c)})}return n}function ae(t,e={}){return{$match:(n,i)=>t(n,i),$eq:(n,i)=>i instanceof RegExp?i.test(n):n===i,$ne:(n,i)=>i instanceof RegExp?!i.test(n):n!==i,$not:(n,i)=>!t(n,i),$and:(n,i)=>($(i,"$and requires an array as condition"),i.every(a=>t(n,a))),$or:(n,i)=>($(i,"$or requires an array as condition"),i.some(a=>t(n,a))),$in:(n,i)=>A(i).some(a=>Array.isArray(n)?t(n,{$contains:a}):t(n,a)),$contains:(n,i)=>(n=Array.isArray(n)?n:String(n),A(i).every(a=>n.includes(a))),$icontains:(n,i)=>{if(typeof i!="string")throw new TypeError("$icontains requires a string, use $contains instead");return n=String(n).toLocaleLowerCase(),A(i).every(a=>n.includes(a.toLocaleLowerCase()))},$containsAny:(n,i)=>($(i,"$containsAny requires an array as condition"),n=Array.isArray(n)?n:String(n),i.some(a=>n.includes(a))),$exists:(n,i)=>i?typeof n<"u":typeof n>"u",$type:(n,i)=>typeof n===String(i),$regex:(n,i)=>{if(!(i instanceof RegExp)){const a=String(i).match(/\/(.*)\/([dgimsuy]*)$/);i=a?new RegExp(a[1],a[2]||""):new RegExp(i)}return i.test(String(n||""))},$lt:(n,i)=>n<i,$lte:(n,i)=>n<=i,$gt:(n,i)=>n>i,$gte:(n,i)=>n>=i,...e||{}}}function P(t){const e=ie(),n=(a,{query:s,before:c,after:m})=>{const r=typeof s=="string"?{_path:s}:s,u=a.findIndex(l=>e(l,r));c=c||1,m=m||1;const o=new Array(c+m).fill(null,0);return u===-1?o:o.map((l,h)=>a[u-c+h+Number(h>=c)]||null)},i=[(a,s)=>a.filter(c=>A(s.where).every(m=>e(c,m))),(a,s)=>A(s.sort).forEach(c=>J(a,c)),(a,s)=>s.surround?n(a,s.surround):a,(a,s)=>s.skip?a.slice(s.skip):a,(a,s)=>s.limit?a.slice(0,s.limit):a,(a,s)=>R(H(s.without))(a),(a,s)=>R(b(s.only))(a)];return async a=>{const s=await t(),c=a.params(),m=i.reduce((r,u)=>u(r,c)||r,s);return c.first?m[0]:m}}var se=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L={},oe={get exports(){return L},set exports(t){L=t}};(function(t,e){(function(n,i,a){t.exports=a(),t.exports.default=a()})("slugify",se,function(){var n=JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`),i=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function a(s,c){if(typeof s!="string")throw new Error("slugify: string argument expected");c=typeof c=="string"?{replacement:c}:c||{};var m=i[c.locale]||{},r=c.replacement===void 0?"-":c.replacement,u=c.trim===void 0?!0:c.trim,o=s.normalize().split("").reduce(function(l,h){var f=m[h]||n[h]||h;return f===r&&(f=" "),l+f.replace(c.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return c.strict&&(o=o.replace(/[^A-Za-z0-9\s]/g,"")),u&&(o=o.trim()),o=o.replace(/\s+/g,r),c.lower&&(o=o.toLowerCase()),o}return a.extend=function(s){Object.assign(n,s)},a})})(oe);const ce=t=>t.split(/[\s-]/g).map(G).join(" ");function ue(t,e){const{navigation:n}=K().content,i=s=>({...fe(["title",...n.fields])(s),...me(s==null?void 0:s.navigation)?s.navigation:{}}),a=t.sort((s,c)=>s._path.localeCompare(c._path)).reduce((s,c)=>{const m=c._path.substring(1).split("/"),r=c._id.split(":").slice(1),u=!!r[r.length-1].match(/([1-9][0-9]*\.)?index.md/g),o=f=>({title:f.title,_path:f._path,_file:f._file,children:[],...i(f),...f._draft?{_draft:!0}:{}}),l=o(c);if(u){const f=e[l._path];if(typeof(f==null?void 0:f.navigation)<"u"&&!(f!=null&&f.navigation))return s;if(c._path!=="/"){const d=o(c);l.children.push(d)}Object.assign(l,i(f))}return m.length===1?(s.push(l),s):(m.slice(0,-1).reduce((f,d,y)=>{const w="/"+m.slice(0,y+1).join("/"),v=e[w];if(typeof(v==null?void 0:v.navigation)<"u"&&!v.navigation)return[];let O=f.find(N=>N._path===w);return O||(O={title:ce(d),_path:w,_file:c._file,children:[],...i(v)},f.push(O)),O.children},s).push(l),s)},[]);return D(a)}const le=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function D(t){const e=t.sort((n,i)=>le.compare(n._file,i._file));for(const n of e)n.children.length?D(n.children):delete n.children,delete n._file;return t}function fe(t){return e=>(e=e||{},t&&t.length?t.filter(n=>typeof e[n]<"u").reduce((n,i)=>Object.assign(n,{[i]:e[i]}),{}):e)}function me(t){return Object.prototype.toString.call(t)==="[object Object]"}const he=t=>T(t,K().public.content.api.baseURL),pe=re(ne({driver:Z()}),"@content"),Y=()=>W("previewToken").value;function ge(t){async function e(){const n=new Set(await t.getKeys("cache:")),i=Y();if(i){(await t.getItem(`${i}$`).then(r=>r||{})).ignoreBuiltContents&&n.clear();const c=await t.getKeys(`${i}:`),m=await Promise.all(c.map(r=>t.getItem(r)));for(const r of m)n.delete(`cache:${r._id}`),r.__deleted||n.add(`${i}:${r._id}`)}return await Promise.all(Array.from(n).map(s=>t.getItem(s)))}return{storage:t,fetch:P(e),query:n=>q(P(e),n)}}let S=null,E=null;async function de(){return E?await E:S||(E=ye(),S=await E),S}async function ye(){const t=M(),{content:e}=K().public,n=ge(pe),i=await n.storage.getItem("integrity");if(e.integrity!==+(i||0)){const{contents:a,navigation:s}=await $fetch(he(e.integrity?`cache.${e.integrity}.json`:"cache.json"));await Promise.all(a.map(c=>n.storage.setItem(`cache:${c._id}`,c))),await n.storage.setItem("navigation",s),await n.storage.setItem("integrity",e.integrity)}return await t.callHook("content:storage",n.storage),n}async function Oe(t){const e=await de();if(!Y()&&Object.keys(t||{}).length===0)return e.storage.getItem("navigation");const n=await e.query(t).where({_partial:!1,navigation:{$ne:!1}}).find(),a=(await e.query().where({_path:/\/_dir$/i,_partial:!0}).find()).reduce((s,c)=>{var r;((r=c.title)==null?void 0:r.toLowerCase())==="dir"&&(c.title=void 0);const m=c._path.split("/").slice(0,-1).join("/")||"/";return s[m]={...c,...c.body},s},{});return ue(n,a)}export{pe as contentStorage,ge as createDB,Oe as generateNavigation,Y as getPreview,de as useContentDatabase};
