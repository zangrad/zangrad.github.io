import{a as h}from"./utils.414d63e2.js";import{M as g,ah as c,N as y,h as p,D as m}from"./app.config.7c92b3e1.js";import"./cookie.92f1a596.js";const v=g({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(e){const{parent:i}=m(),{between:s,default:l}=c(),u=y(()=>typeof e.unwrap=="string"?e.unwrap.split(" "):["*"]);return{fallbackSlot:l,tags:u,between:s,parent:i}},render({use:e,unwrap:i,fallbackSlot:s,between:l,tags:u,parent:n}){var f;try{let o=e;if(typeof e=="string"&&(o=(n==null?void 0:n.slots[e])||((f=n==null?void 0:n.parent)==null?void 0:f.slots[e]),console.warn(`Please set :use="$slots.${e}" in <ContentSlot> component to enable reactivity`)),!o)return s?s():p("div");if(!i)return[o()];const{flatUnwrap:d}=h(),a=d(o(),u);return l?a.flatMap((t,r)=>r===0?[t]:[l(),t]):a.reduce((t,r)=>(typeof r.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=r.children:t.push(r.children):t.push(r),t),[])}catch{return p("div")}}});export{v as default};