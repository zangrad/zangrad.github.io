import{_ as n}from"./entry.c6f02bc2.js";import{u as o,a2 as f,ab as g,af as E,ag as k,z as s}from"./app.config.7c92b3e1.js";const P={__name:"nuxt-error-page",props:{error:Object},setup(c){const{error:t}=c;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),a=r===404,u=t.statusMessage??(a?"Page Not Found":"Internal Server Error"),i=t.message||t.toString(),p=void 0,_=o(()=>n(()=>import("./error-404.e086ee7e.js"),["./error-404.e086ee7e.js","./app.config.7c92b3e1.js","./composables.9ccad08e.js","./entry.c6f02bc2.js","./entry.2d9998b4.css","./error-404.23f2309d.css"],import.meta.url).then(e=>e.default||e)),l=o(()=>n(()=>import("./error-500.7d7280f9.js"),["./error-500.7d7280f9.js","./app.config.7c92b3e1.js","./composables.9ccad08e.js","./entry.c6f02bc2.js","./entry.2d9998b4.css","./error-500.aa16ed4d.css"],import.meta.url).then(e=>e.default||e)),m=a?_:l;return(e,d)=>(f(),g(s(m),E(k({statusCode:s(r),statusMessage:s(u),description:s(i),stack:s(p)})),null,16))}},b=P;export{b as default};
