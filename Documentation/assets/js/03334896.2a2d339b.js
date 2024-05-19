"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[8552],{88424:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(17624),i=t(4552);const a={env:["Wolfram Kernel"],context:"Notebook`Editor`Kernel`FrontSubmitService`",source:"https://github.com/JerryI/wljs-editor/blob/dev/src/FrontSubmitKernel.wl",package:"wljs-editor"},o=void 0,s={id:"frontend/Reference/Frontend IO/FrontSubmit",title:"FrontSubmit",description:"Sends an expression to be executed on WLJS Interpreter (frontend / browser)",source:"@site/docs/frontend/Reference/Frontend IO/FrontSubmit.md",sourceDirName:"frontend/Reference/Frontend IO",slug:"/frontend/Reference/Frontend IO/FrontSubmit",permalink:"/frontend/Reference/Frontend IO/FrontSubmit",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1716132984e3,frontMatter:{env:["Wolfram Kernel"],context:"Notebook`Editor`Kernel`FrontSubmitService`",source:"https://github.com/JerryI/wljs-editor/blob/dev/src/FrontSubmitKernel.wl",package:"wljs-editor"},sidebar:"tutorialSidebar",previous:{title:"FrontFetchAsync",permalink:"/frontend/Reference/Frontend IO/FrontFetchAsync"},next:{title:"MetaMarker",permalink:"/frontend/Reference/Frontend IO/MetaMarker"}},c={},l=[{value:"Options",id:"options",level:2},{value:"<code>&quot;Window&quot;</code>",id:"window",level:3},{value:"<code>&quot;Tracking&quot;</code>",id:"tracking",level:3},{value:"Tracking",id:"tracking-1",level:2},{value:"Destroy",id:"destroy",level:3},{value:"Usage with Meta-Markers",id:"usage-with-meta-markers",level:2},{value:"Examples",id:"examples",level:2},{value:"Calling an WLJS (or Frontend) function",id:"calling-an-wljs-or-frontend-function",level:3},{value:"Controlling ViewBox",id:"controlling-viewbox",level:3},{value:"Append objects to a static graph",id:"append-objects-to-a-static-graph",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Sends an expression to be executed on WLJS Interpreter (frontend / browser)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"FrontSubmit[expr_, opts___]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.h3,{id:"window",children:(0,r.jsx)(n.code,{children:'"Window"'})}),"\n",(0,r.jsxs)(n.p,{children:["specifies a window socket, to which an expression will be sent. Use ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/CurrentWindow",children:"CurrentWindow"})," to fetch a window object from the evaluation context."]}),"\n",(0,r.jsx)(n.h3,{id:"tracking",children:(0,r.jsx)(n.code,{children:'"Tracking"'})}),"\n",(0,r.jsxs)(n.p,{children:["by the default it is ",(0,r.jsx)(n.code,{children:"False"}),". See below which benefits it gives to a user"]}),"\n",(0,r.jsx)(n.h2,{id:"tracking-1",children:"Tracking"}),"\n",(0,r.jsxs)(n.p,{children:["If it is enabled, ",(0,r.jsx)(n.code,{children:"FrontSubmit"})," returns a reference to a group of instances created by this submission on the frontend. It is group into an object ",(0,r.jsx)(n.code,{children:"FrontEndInstanceGroup"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'instanceGroup = FrontSubmit[expr_, opts__, "Tracking"->True];\n'})}),"\n",(0,r.jsx)(n.p,{children:"Why do you need this?"}),"\n",(0,r.jsx)(n.h3,{id:"destroy",children:"Destroy"}),"\n",(0,r.jsxs)(n.p,{children:["It is possible to destroy all instances created in the group by simply calling ",(0,r.jsx)(n.code,{children:"Delete"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"Delete[instanceGroup]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["It can remove graphics primitives (",(0,r.jsx)(n.code,{children:"Disk[]"}),", ",(0,r.jsx)(n.code,{children:"Line[]"})," ...) you added to an existing graph, or anything else, which is identifiable as an instance."]}),"\n",(0,r.jsx)(n.h2,{id:"usage-with-meta-markers",children:"Usage with Meta-Markers"}),"\n",(0,r.jsxs)(n.p,{children:["Using an extension ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/MetaMarker",children:"MetaMarker"}),", one can execute an expression in the context of a specified container"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"FrontSubmit[expr_, m_MetaMarker, opts___]\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsxs)(n.p,{children:["Be aware of a context loss in a case of an handler function called from outside the cell. Therefore ",(0,r.jsx)(n.code,{children:'"Window"'})," option comes to provide the missing information about a window."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'With[{win = CurrentWindow[]},\n\t(* normal evaluation context *)\n\t\n\tEventHandler[InputButton[], Function[Null,\n\t\t(* NO evaluation context *)\n\t\t\n\t\tFrontSubmit[Alert["Hello World"], "Window" -> win]\n\t\t\t\t\t\t\t\t\t\t(* provided explicitly *)\n\t]]\n]\n'})}),(0,r.jsxs)(n.p,{children:["or another example with a timer ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Misc/Async#%60SetTimeout%60",children:(0,r.jsx)(n.code,{children:"SetTimeout"})})]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'With[{win = CurrentWindow[]},\n\t(* normal evaluation context *)\n\t\n\tSetTimeout[\n\t\t(* NO evaluation context *)\n\t\tFrontSubmit[Alert["Boom"], "Window"->win]\n\t, 3000];\n\t\n\t"Hi there!"\n]\n'})})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Please have a look at this guide - ",(0,r.jsx)(n.a,{href:"/frontend/Advanced/Dynamics/Advanced%20animation",children:"Advanced animation"})]})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.h3,{id:"calling-an-wljs-or-frontend-function",children:"Calling an WLJS (or Frontend) function"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'FrontSubmit[Alert["Hello World!"]]\n'})}),"\n",(0,r.jsx)(n.p,{children:"which will produce a pop-up modal window."}),"\n",(0,r.jsx)(n.p,{children:"Or to call a custom-defined Javascript function"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="cell 1"',children:'core.ShowReversed = async (args, env) => {\n\tconst text = await interpretate(args[0], env);\n\talert(text..split("").reverse().join(""));\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",metastring:'title="cell 2"',children:'FrontSubmit[ShowReversed["Must be reversed..."]];\n'})}),"\n",(0,r.jsx)(n.h3,{id:"controlling-viewbox",children:"Controlling ViewBox"}),"\n",(0,r.jsxs)(n.p,{children:["A typical graphics figure is usually a ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Decorations/ViewBox",children:"ViewBox"}),". Here we mark its instance with a unique ID using ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/MetaMarker",children:"MetaMarker"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'Plot[x, {x,0,1}, Epilog->{MetaMarker["pp"]}]\n'})}),"\n",(0,r.jsx)(n.p,{children:"and then we can destroy it and replace with some other text"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'FrontSubmit[ViewBox`OuterExpression["Hello World"], MetaMarker["pp"]] \n'})}),"\n",(0,r.jsx)(n.h3,{id:"append-objects-to-a-static-graph",children:"Append objects to a static graph"}),"\n",(0,r.jsx)(n.p,{children:"We can append anything to a graphics canvas without reevaluation of a cell"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",metastring:'title="cell 1"',children:'Plot[x, {x,0,1}, Epilog->{MetaMarker["pp"]}]\n'})}),"\n",(0,r.jsx)(n.p,{children:"and then"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",metastring:'title="cell 2"',children:'FrontSubmit[Arrow[RandomReal[{0,1}, {2,2}]], MetaMarker["pp"]]\n'})}),"\n",(0,r.jsx)(n.p,{children:"to append an arrow to a marked graph"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(56768).c+"",width:"1102",height:"766"})})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},56768:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/Screenshot 2024-03-21 at 16.57.20-a3acd3df9b777d73f4151540cd8b7874.png"},4552:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>o});var r=t(11504);const i={},a=r.createContext(i);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);