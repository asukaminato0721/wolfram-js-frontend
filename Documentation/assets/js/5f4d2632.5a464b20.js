"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[8728],{52116:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=t(17624),r=t(4552);const s={env:["Wolfram Kernel"],context:"Notebook`Storage`",package:"wljs-editor",source:"https://github.com/JerryI/wljs-editor/blob/dev/src/StoreKernel.wl"},a=void 0,l={id:"frontend/Reference/Cells and Notebook/NotebookStore",title:"NotebookStore",description:"An access to a permanent local notebook storage. You can carry the raw data within the notebook, regardless if it has been exported to HTML file and imported back.",source:"@site/docs/frontend/Reference/Cells and Notebook/NotebookStore.md",sourceDirName:"frontend/Reference/Cells and Notebook",slug:"/frontend/Reference/Cells and Notebook/NotebookStore",permalink:"/frontend/Reference/Cells and Notebook/NotebookStore",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1711835414,formattedLastUpdatedAt:"Mar 30, 2024",frontMatter:{env:["Wolfram Kernel"],context:"Notebook`Storage`",package:"wljs-editor",source:"https://github.com/JerryI/wljs-editor/blob/dev/src/StoreKernel.wl"},sidebar:"tutorialSidebar",previous:{title:"NotebookDirectory",permalink:"/frontend/Reference/Cells and Notebook/NotebookDirectory"},next:{title:"ParentCell",permalink:"/frontend/Reference/Cells and Notebook/ParentCell"}},c={},i=[{value:"Methods",id:"methods",level:2},{value:"<code>Set</code>",id:"set",level:3},{value:"<code>Unset</code>",id:"unset",level:3},{value:"<code>Keys</code>",id:"keys",level:3},{value:"Options",id:"options",level:2},{value:"<code>&quot;Notebook&quot;</code>",id:"notebook",level:3}];function d(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:["An access to a permanent local notebook storage. You can carry the raw data within the notebook, ",(0,n.jsx)(o.em,{children:(0,n.jsx)(o.strong,{children:"regardless if it has been exported"})})," to ",(0,n.jsx)(o.a,{href:"/frontend/Export/HTML%20file",children:"HTML file"})," and imported back."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-mathematica",children:"NotebookStore[key_String, opts___] _\n"})}),"\n",(0,n.jsxs)(o.p,{children:["accesses a ",(0,n.jsx)(o.code,{children:"key"})," and returns the data."]}),"\n",(0,n.jsx)(o.p,{children:"It works like an association or key-value storage."}),"\n",(0,n.jsx)(o.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(o.h3,{id:"set",children:(0,n.jsx)(o.code,{children:"Set"})}),"\n",(0,n.jsx)(o.p,{children:"To assign any Wolfram Expression, use"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-mathematica",children:"NotebookStore[key_, opts___] = data_\n"})}),"\n",(0,n.jsx)(o.h3,{id:"unset",children:(0,n.jsx)(o.code,{children:"Unset"})}),"\n",(0,n.jsx)(o.p,{children:"To remove the data and its key"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-mathematica",children:"NotebookStore[key_, opts___] = .\n"})}),"\n",(0,n.jsx)(o.h3,{id:"keys",children:(0,n.jsx)(o.code,{children:"Keys"})}),"\n",(0,n.jsx)(o.p,{children:"Returns all keys"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-mathematica",children:"NotebookStore[opts___] // Keys \n"})}),"\n",(0,n.jsx)(o.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(o.h3,{id:"notebook",children:(0,n.jsx)(o.code,{children:'"Notebook"'})}),"\n",(0,n.jsx)(o.p,{children:"Specifies the notebook from which the storage will be operated"}),"\n",(0,n.jsxs)(o.admonition,{type:"warning",children:[(0,n.jsxs)(o.p,{children:["Be aware of a ",(0,n.jsx)(o.strong,{children:"evaluation context loss"}),", use ",(0,n.jsx)(o.a,{href:"/frontend/Reference/Cells%20and%20Notebook/EvaluationNotebook",children:"EvaluationNotebook"})," for such cases if it is called from an external handler, i.e."]}),(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-mathematica",children:'(* evaluation context is ok *)\nNotebookStore["key"] = 123;\n\nWith[{n = EvaluationNotebook[]},\n\t(* evaluation context is ok *)\n\tEventHandler[InputButton[], Function[Null,\n\t\t(* evaluation context is lost!!! *)\n\t\t\n\t\tNotebookStore["key", "Notebook"->n] = 124;\n\t\t\t\t\t\t\t(* manually restore lost info *)\n\t]]\n]\n'})})]})]})}function h(e={}){const{wrapper:o}={...(0,r.M)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4552:(e,o,t)=>{t.d(o,{I:()=>l,M:()=>a});var n=t(11504);const r={},s=n.createContext(r);function a(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);