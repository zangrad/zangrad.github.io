import"./ContentNavigation.0fd0176c.js";import{e}from"./entry.c6f02bc2.js";import{a2 as o,a3 as i,a4 as m}from"./app.config.7c92b3e1.js";import"./ContentQuery.bcb9f43f.js";import"./cookie.92f1a596.js";import"./query.c3f7607a.js";import"./utils.414d63e2.js";import"./ContentDoc.4912274d.js";import"./composables.9ccad08e.js";import"./ContentRenderer.cf6af34f.js";import"./ContentRendererMarkdown.0afe43c7.js";import"./index.a6ef77ff.js";import"./ContentList.9181cf4e.js";import"./ContentSlot.8c0445f5.js";import"./DocumentDrivenEmpty.116223ef.js";import"./DocumentDrivenNotFound.461702a9.js";import"./Markdown.d583df2e.js";import"./ProseCode.451a0d7f.js";const a={name:"VImg",props:{src:{type:String,required:!0},alt:{type:String,required:!0}},computed:{imgSrc(){return require(`~/assets/images/${this.src}`)}}},s={class:"image"},p=["src","alt"];function c(n,_,r,d,l,t){return o(),i("picture",s,[m("img",{src:t.imgSrc,alt:r.alt,draggable:"false"},null,8,p)])}const w=e(a,[["render",c],["__scopeId","data-v-e373bbe4"]]);export{w as default};