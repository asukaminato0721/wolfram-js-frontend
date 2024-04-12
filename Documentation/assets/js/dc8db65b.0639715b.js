"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[1952],{13448:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var i=t(17624),o=t(4552);const r={sidebar_position:3},s="Code highlighting",d={id:"frontend/Advanced/Slides/embed-wl",title:"Code highlighting",description:"Since it support WLX syntax as well, one can combine the copied text from the normal Wolfram Language cell into a EditorView component",source:"@site/docs/frontend/Advanced/Slides/embed-wl.md",sourceDirName:"frontend/Advanced/Slides",slug:"/frontend/Advanced/Slides/embed-wl",permalink:"/frontend/Advanced/Slides/embed-wl",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1711835414,formattedLastUpdatedAt:"Mar 30, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Slides",permalink:"/frontend/Advanced/Slides/"},next:{title:"Backgrounds",permalink:"/frontend/Advanced/Slides/Backgrounds"}},c={},a=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"code-highlighting",children:"Code highlighting"}),"\n",(0,i.jsxs)(n.p,{children:["Since it support WLX syntax as well, one can combine the copied text from the normal Wolfram Language cell into a ",(0,i.jsx)(n.a,{href:"/frontend/Reference/GUI/EditorView",children:"EditorView"})," component"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"prototype"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'.wlx\nCodeInset[str_String] := With[{Fe = EditorView[str] // CreateFrontEndObject},\n  <div style="text-align: left;"><Fe/></div>\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:"Then somewhere on your slide"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:".slide\n\n# Input cell inside a slide\n\n<CodeInset>\n(*SbB[*)Subscript[B(*|*),(*|*)k_, q_](*]SbB*)[coords_] := Sum[ \n  \n  With[{\\\\[Theta] = ToSphericalCoordinates[c][[2]], \\\\[Phi] = ToSphericalCoordinates[c][[3]]},\n    (*SpB[*)Power[(-1)(*|*),(*|*)q](*]SpB*) (*SbB[*)Subscript[a(*|*),(*|*)k](*]SbB*)[Norm[c]] (*SqB[*)Sqrt[(*FB[*)((4Pi)(*,*)/(*,*)(2k + 1))(*]FB*)](*]SqB*) SphericalHarmonicY[k,-q, \\\\[Theta], \\\\[Phi]]\n  ]\n  \n, {c, coords}]\n</CodeInset>\n\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["There is no need in writing ",(0,i.jsx)(n.code,{children:"(*funny comments*)"})," and etc. manually, this is a representation of cell's elements (Boxes) from a normal WL editor. ",(0,i.jsx)(n.strong,{children:"Just copy the text from it"}),"  (input/output cell)"]})}),"\n",(0,i.jsx)(n.p,{children:"The result will look like this"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(35128).c+"",width:"825",height:"327"})})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},35128:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/Screenshot 2023-11-02 at 10.18.16-f5b8243daf6d46b3e2cba5bce34fa0c8.png"},4552:(e,n,t)=>{t.d(n,{I:()=>d,M:()=>s});var i=t(11504);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);