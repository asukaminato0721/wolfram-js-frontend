"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[9244],{97400:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var i=t(17624),r=t(4552);const c={env:["WLJS"],package:"wljs-graphics-d3",context:"JerryI`Notebook`Graphics2D`",source:"https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/Kernel.wl"},o=void 0,s={id:"frontend/Reference/Graphics/TransitionType",title:"TransitionType",description:"acts as an option and a context modifier for Graphics that tells the transition function for graphics primitives (coordinate changes, and etc) once one of dependencies has been updated",source:"@site/docs/frontend/Reference/Graphics/TransitionType.md",sourceDirName:"frontend/Reference/Graphics",slug:"/frontend/Reference/Graphics/TransitionType",permalink:"/frontend/Reference/Graphics/TransitionType",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1711835414,formattedLastUpdatedAt:"Mar 30, 2024",frontMatter:{env:["WLJS"],package:"wljs-graphics-d3",context:"JerryI`Notebook`Graphics2D`",source:"https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/Kernel.wl"},sidebar:"tutorialSidebar",previous:{title:"TransitionDuration",permalink:"/frontend/Reference/Graphics/TransitionDuration"},next:{title:"Translate",permalink:"/frontend/Reference/Graphics/Translate"}},a={},d=[{value:"Types",id:"types",level:2},{value:"<code>&quot;Linear&quot;</code>",id:"linear",level:3},{value:"<code>&quot;CubicInOut&quot;</code>",id:"cubicinout",level:3},{value:"<code>None</code>",id:"none",level:3},{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["acts as an option and a context modifier for ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/",children:"Graphics"})," that tells the transition function for graphics primitives (coordinate changes, and etc) once one of dependencies has been updated"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"global"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"Graphics[..., TransitionType->type_String]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"local"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"Graphics[{Directive[TransitionType->type_String], ...}]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,i.jsx)(n.h3,{id:"linear",children:(0,i.jsx)(n.code,{children:'"Linear"'})}),"\n",(0,i.jsx)(n.h3,{id:"cubicinout",children:(0,i.jsx)(n.code,{children:'"CubicInOut"'})}),"\n",(0,i.jsx)(n.h3,{id:"none",children:(0,i.jsx)(n.code,{children:"None"})}),"\n",(0,i.jsx)(n.p,{children:"No transition. Works best for fast animation"}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Let us see how it works with a moving object"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",metastring:'title="cell 1"',children:'object = {-1.,0.};\nGraphics[{\n\t{Directive[TransitionType -> "Linear"], Disk[(object + {0,0.5}) // Offload, 0.2]},\n\t{Directive[TransitionType -> "CubicInOut"], Disk[(object - {0,0}) // Offload, 0.2]},\n   {Directive[TransitionType -> None], Disk[(object - {0,0.5}) // Offload, 0.2]}\n}, PlotRange->{{-1,1}, {-1,1.5}}, "TransitionDuration"->500]\n'})}),"\n",(0,i.jsx)(n.p,{children:"and then in the next cell"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"object = {1.,0};\n"})}),"\n",(0,i.jsx)(n.p,{children:"the result is following"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(86399).c+"",width:"1084",height:"452"})})]})}function p(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},86399:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/moves-ezgif.com-video-to-apng-converter-8edf3527707cf1669cd2e5da0ae13fcd.png"},4552:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>o});var i=t(11504);const r={},c=i.createContext(r);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);