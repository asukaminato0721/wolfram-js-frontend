"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[5328],{78352:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var t=l(17624),i=l(4552);const s={draft:!1},a=void 0,r={id:"frontend/Advanced/Slides/Styling",title:"Styling",description:"The most basics styling",source:"@site/docs/frontend/Advanced/Slides/Styling.md",sourceDirName:"frontend/Advanced/Slides",slug:"/frontend/Advanced/Slides/Styling",permalink:"/frontend/Advanced/Slides/Styling",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"Backgrounds",permalink:"/frontend/Advanced/Slides/Backgrounds"},next:{title:"Graphics animation & interaction",permalink:"/frontend/Advanced/Slides/animations"}},d={},o=[{value:"Global settings",id:"global-settings",level:2},{value:"Local",id:"local",level:2},{value:"Using data attributes",id:"using-data-attributes",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The most basics styling"}),"\n",(0,t.jsx)(n.h2,{id:"global-settings",children:"Global settings"}),"\n",(0,t.jsxs)(n.p,{children:["One can set a global style applied for all slides in your notebook. You need to use ",(0,t.jsx)(n.a,{href:"/frontend/Cell%20types/HTML",children:"HTML"})," or ",(0,t.jsx)(n.a,{href:"/frontend/Cell%20types/WLX",children:"WLX"})," cels for it and redefine ",(0,t.jsx)(n.code,{children:".reveal"})," class"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="cell 1"',children:".wlx\n\n<style>\n  .reveal {\n    font-family: Arial;\n  }\n</style>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["now the default font will be ",(0,t.jsx)(n.code,{children:"Arial"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="cell 2"',children:".slide\n\n# Hey, I am Arial!\n"})}),"\n",(0,t.jsx)(n.h2,{id:"local",children:"Local"}),"\n",(0,t.jsxs)(n.p,{children:["One can do the same with an individual slide by wrapping the text into HTML or ",(0,t.jsx)(n.a,{href:"/frontend/Cell%20types/WLX",children:"WLX"})," tags"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'.slide\n\n<div style="font-family: Arial">\n\n# Title, I am Arial\n\n</div>\n\nI am not Arial\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsxs)(n.p,{children:["In order to mix Markdown with HTML or ",(0,t.jsx)(n.a,{href:"/frontend/Cell%20types/WLX",children:"WLX"})," correctly, remove white spaces from the beginning markdown, i.e."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:".slide\n\n<div>\n\t# It wont work\n</div>\n"})}),(0,t.jsx)(n.p,{children:"but instead"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:".slide\n\n<div>\n\n# It will work\n\n</div>\n"})})]}),"\n",(0,t.jsx)(n.p,{children:"Or one can define a class for it early"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",metastring:'title="cell 1"',children:".wlx\n\n<style>\n  .specialClass {\n    font-family: Arial;\n  }\n</style>\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="cell 2"',children:'.slide\n\n<div class="specialClass">\n\n# Title, I am Arial\n\n</div>\n\nI am not Arial\n'})}),"\n",(0,t.jsx)(n.h3,{id:"using-data-attributes",children:"Using data attributes"}),"\n",(0,t.jsx)(n.p,{children:"It might come handy to use RevealJS styling option for individual elements instead of writing plain XML"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'.slide\n\n\x3c!-- .slide: data-background-color="black" --\x3e\n\n\n# Hey, I am white \x3c!-- .element: style="color:white" --\x3e\n\n# Hey, I am red \x3c!-- .element: style="color:red" --\x3e\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Here ",(0,t.jsx)(n.code,{children:"slide"})," is applied to an entire slide, while ",(0,t.jsx)(n.code,{children:"element"})," is localized to the last markdown element."]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,n,l)=>{l.d(n,{I:()=>r,M:()=>a});var t=l(11504);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);