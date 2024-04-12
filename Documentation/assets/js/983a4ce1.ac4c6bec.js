"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[6280],{4388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(17624),i=t(4552);const a={env:["Wolfram Kernel"],origin:"https://github.com/JerryI/wljs-inputs",context:"Notebook`Kernel`Inputs`",package:"wljs-inputs",source:"https://github.com/JerryI/wljs-inputs/blob/dev/src/Kernel.wl"},s=void 0,c={id:"frontend/Reference/GUI/InputRange",title:"InputRange",description:"creates a basic combo of a slider and numerical input field and returns EventObject",source:"@site/docs/frontend/Reference/GUI/InputRange.md",sourceDirName:"frontend/Reference/GUI",slug:"/frontend/Reference/GUI/InputRange",permalink:"/frontend/Reference/GUI/InputRange",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1712600483,formattedLastUpdatedAt:"Apr 8, 2024",frontMatter:{env:["Wolfram Kernel"],origin:"https://github.com/JerryI/wljs-inputs",context:"Notebook`Kernel`Inputs`",package:"wljs-inputs",source:"https://github.com/JerryI/wljs-inputs/blob/dev/src/Kernel.wl"},sidebar:"tutorialSidebar",previous:{title:"InputGroup",permalink:"/frontend/Reference/GUI/InputGroup"},next:{title:"InputSelect",permalink:"/frontend/Reference/GUI/InputSelect"}},o={},l=[{value:"Event generation",id:"event-generation",level:2},{value:"Options",id:"options",level:2},{value:"<code>&quot;Label&quot;</code>",id:"label",level:3},{value:"<code>&quot;Topic&quot;</code>",id:"topic",level:3},{value:"Applications",id:"applications",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"InputRange[min_, max_, step_:1, initial_:(min+max)/2, opts___] _EventObject\n"})}),"\n",(0,r.jsxs)(n.p,{children:["creates a basic combo of a slider and numerical input field and returns ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Misc/Events#%60EventObject%60",children:(0,r.jsx)(n.code,{children:"EventObject"})})]}),"\n",(0,r.jsx)(n.h2,{id:"event-generation",children:"Event generation"}),"\n",(0,r.jsxs)(n.p,{children:["Every-time user drags a slider, an event ",(0,r.jsx)(n.strong,{children:"in a form of number"})," will be generated"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'slider = InputRange[0,1,0.1];\nEventHandler[slider, Function[data,\n\tPrint[StringTemplate["`` is a number"][data]]\n]];\nslider\n'})}),"\n",(0,r.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.h3,{id:"label",children:(0,r.jsx)(n.code,{children:'"Label"'})}),"\n",(0,r.jsx)(n.p,{children:"Adds a label to a slider"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'slider = InputRange[0, 1, 0.1, "Label"->"Slider"]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"topic",children:(0,r.jsx)(n.code,{children:'"Topic"'})}),"\n",(0,r.jsx)(n.p,{children:"Specifies which topic or pattern of an event is used"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'"Topic" -> name_String\n'})}),"\n",(0,r.jsxs)(n.p,{children:["emits ",(0,r.jsx)(n.code,{children:"name"})," for each time when user drags a slider"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'"Topic" -> {oninput_String, onchange_String}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["emits ",(0,r.jsx)(n.code,{children:"oninput"})," when any changes occur, while ",(0,r.jsx)(n.code,{children:"onchange"})," is ",(0,r.jsx)(n.strong,{children:"emitted after"})," the users action"]}),"\n",(0,r.jsx)(n.h2,{id:"applications",children:"Applications"}),"\n",(0,r.jsx)(n.p,{children:"Control properties using knob"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"EventHandler[InputRange[0,1,0.1], Function[data, pos = data]];\n% \n% // EventFire;\nGraphics[Rectangle[{-1,0}, {1, Offload[pos]}]]\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>s});var r=t(11504);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);