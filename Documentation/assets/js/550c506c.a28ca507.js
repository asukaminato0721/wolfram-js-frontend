"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[3648],{29684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(17624),s=t(4552);const i={},d=void 0,l={id:"frontend/Advanced/Slides/Fragments",title:"Fragments",description:"This allows to reveal, remove or highlight some objects on a slide using built-in animation framework of RevealJS.",source:"@site/docs/frontend/Advanced/Slides/Fragments.md",sourceDirName:"frontend/Advanced/Slides",slug:"/frontend/Advanced/Slides/Fragments",permalink:"/frontend/Advanced/Slides/Fragments",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1713644164e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Backgrounds",permalink:"/frontend/Advanced/Slides/Backgrounds"},next:{title:"Styling",permalink:"/frontend/Advanced/Slides/Styling"}},a={},c=[{value:"Animation types",id:"animation-types",level:2},{value:"Custom Fragments",id:"custom-fragments",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This allows to reveal, remove or highlight some objects on a slide using built-in ",(0,r.jsx)(n.a,{href:"https://revealjs.com/fragments/",children:"animation framework of RevealJS"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"For example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:'.slide\n\n# Fragments example\n\nThis will be here all the time\n\n<span style="color:red">Appears later</span> \x3c!-- .element: class="fragment" data-fragment-index="1" --\x3e\n\nAnd this one \x3c!-- .element: class="fragment fade-up" data-fragment-index="2" --\x3e\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["A selector ",(0,r.jsx)(n.code,{children:".element"})," is applied to a single Markdown line, or a single HTML or WLX tag"]})}),"\n",(0,r.jsx)(n.h2,{id:"animation-types",children:"Animation types"}),"\n",(0,r.jsx)(n.p,{children:"Here is the list of available classes"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Effect"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fade-out"}),(0,r.jsx)(n.td,{children:"Start visible, fade out"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fade-up"}),(0,r.jsx)(n.td,{children:"Slide up while fading in"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fade-down"}),(0,r.jsx)(n.td,{children:"Slide down while fading in"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fade-left"}),(0,r.jsx)(n.td,{children:"Slide left while fading in"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fade-right"}),(0,r.jsx)(n.td,{children:"Slide right while fading in"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fade-in-then-out"}),(0,r.jsx)(n.td,{children:"Fades in, then out on the next step"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"current-visible"}),(0,r.jsx)(n.td,{children:"Fades in, then out on the next step"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fade-in-then-semi-out"}),(0,r.jsx)(n.td,{children:"Fades in, then to 50% on the next step"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"grow"}),(0,r.jsx)(n.td,{children:"Scale up"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"semi-fade-out"}),(0,r.jsx)(n.td,{children:"Fade out to 50%"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"shrink"}),(0,r.jsx)(n.td,{children:"Scale down"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"strike"}),(0,r.jsx)(n.td,{children:"Strike through"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"highlight-red"}),(0,r.jsx)(n.td,{children:"Turn text red"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"highlight-green"}),(0,r.jsx)(n.td,{children:"Turn text green"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"highlight-blue"}),(0,r.jsx)(n.td,{children:"Turn text blue"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"highlight-current-red"}),(0,r.jsx)(n.td,{children:"Turn text red, then back to original on next step"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"highlight-current-green"}),(0,r.jsx)(n.td,{children:"Turn text green, then back to original on next step"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"highlight-current-blue"}),(0,r.jsx)(n.td,{children:"Turn text blue, then back to original on next step"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"custom-fragments",children:"Custom Fragments"}),"\n",(0,r.jsxs)(n.p,{children:["Following the ",(0,r.jsx)(n.a,{href:"https://revealjs.com/fragments/",children:"original guide"})," we can craft our own effects. For example for blur effect one can do it in two cells"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="cell 1"',children:".wlx\n\n<style>\n  .fragment.blur {\n    filter: blur(5px);\n  }\n  .fragment.blur.visible {\n    filter: none;\n  }\n</style>\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",metastring:'title="cell 2"',children:'.slide\n\n# Example\n\nA sample line \x3c!-- .element: class="fragment blur" data-fragment-index="1" --\x3e\n'})})]})}function o(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>d});var r=t(11504);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);