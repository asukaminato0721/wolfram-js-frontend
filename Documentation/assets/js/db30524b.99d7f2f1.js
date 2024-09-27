"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[1848],{53844:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=r(17624),l=r(4552);const i={env:["WLJS"],source:"https://github.com/JerryI/wljs-editor/blob/dev/src/EditorKernel.wl",update:!1,package:"wljs-editor",context:"Notebook`EditorUtils`"},s=void 0,o={id:"frontend/Reference/GUI/CellView",title:"CellView",description:"A low-level view component to spawn a cell wrapper (fully functional)",source:"@site/docs/frontend/Reference/GUI/CellView.md",sourceDirName:"frontend/Reference/GUI",slug:"/frontend/Reference/GUI/CellView",permalink:"/frontend/Reference/GUI/CellView",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1727447848e3,frontMatter:{env:["WLJS"],source:"https://github.com/JerryI/wljs-editor/blob/dev/src/EditorKernel.wl",update:!1,package:"wljs-editor",context:"Notebook`EditorUtils`"},sidebar:"tutorialSidebar",previous:{title:"FrontEndRef",permalink:"/frontend/Reference/Frontend Objects/FrontEndRef"},next:{title:"EditorView",permalink:"/frontend/Reference/GUI/EditorView"}},d={},a=[{value:"Supported output forms",id:"supported-output-forms",level:2},{value:"Options",id:"options",level:2},{value:"<code>&quot;Display&quot;</code>",id:"display",level:3},{value:"<code>&quot;Class&quot;</code>",id:"class",level:3},{value:"<code>&quot;Style&quot;</code>",id:"style",level:3},{value:"<code>ImageSize</code>",id:"imagesize",level:3},{value:"Applications",id:"applications",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"A low-level view component to spawn a cell wrapper (fully functional)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:"CellView[content_String, opts___]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["where ",(0,t.jsx)(n.code,{children:"content"})," is a string, that represents an expression needed by a view component of a cell. View-components are provided by different extensions such as ",(0,t.jsx)(n.a,{href:"/frontend/Exporting/Slides",children:"Slides"}),", ",(0,t.jsx)(n.a,{href:"/frontend/Cell%20types/WLX",children:"WLX"}),", ",(0,t.jsx)(n.a,{href:"/frontend/Cell%20types/Markdown",children:"Markdown"}),", ",(0,t.jsx)(n.a,{href:"/frontend/Cell%20types/Javascript",children:"Javascript"})," and ",(0,t.jsx)(n.a,{href:"/frontend/Cell%20types/Many%20more",children:"Many more"})," and used by the default to render the notebook in a window."]}),"\n",(0,t.jsx)(n.h2,{id:"supported-output-forms",children:"Supported output forms"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/StandardForm",children:"StandardForm"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/WLXForm",children:"WLXForm"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.h3,{id:"display",children:(0,t.jsx)(n.code,{children:'"Display"'})}),"\n",(0,t.jsx)(n.p,{children:"A view-component to render the content. For default cell types it can be"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"codemirror"'})," a default view component used in all input cells as well as in ",(0,t.jsx)(n.a,{href:"/frontend/Reference/GUI/EditorView",children:"EditorView"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"markdown"'})," a renderer of ",(0,t.jsx)(n.a,{href:"/frontend/Cell%20types/Markdown",children:"Markdown"})," cells"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"html"'})," a renderer of ",(0,t.jsx)(n.a,{href:"/frontend/Cell%20types/HTML",children:"HTML"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"js"'})," a renderer of ",(0,t.jsx)(n.a,{href:"/frontend/Cell%20types/Javascript",children:"Javascript"})," cells"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:'"mermaid"'})," a renderer of ",(0,t.jsx)(n.a,{href:"/frontend/Cell%20types/Many%20more",children:"Mermaid Diagrams"})]}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"class",children:(0,t.jsx)(n.code,{children:'"Class"'})}),"\n",(0,t.jsx)(n.p,{children:"Specify a class names to apply for a container element"}),"\n",(0,t.jsx)(n.h3,{id:"style",children:(0,t.jsx)(n.code,{children:'"Style"'})}),"\n",(0,t.jsx)(n.p,{children:"Specify a style names to apply for a container element"}),"\n",(0,t.jsx)(n.h3,{id:"imagesize",children:(0,t.jsx)(n.code,{children:"ImageSize"})}),"\n",(0,t.jsx)(n.p,{children:"Resizes the container"}),"\n",(0,t.jsx)(n.h2,{id:"applications",children:"Applications"}),"\n",(0,t.jsx)(n.p,{children:"If you want to show mermaid diagrams in your slides"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"craft a diagram"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:'MyDiagram = CellView["\ngraph LR\n    A[Text Header 3200 byte]  --\x3e B[Binary Header 400 byte]\n    B --\x3e C1[240 byte 1-st trace header] --\x3e T1[samples of 1-st trace]\n    B --\x3e C2[240 byte 2-st trace header] --\x3e T2[samples of 1-st trace]\n    B --\x3e CN[240 byte n-st trace header] --\x3e T3[samples of 1-st trace] \n", ImageSize->650, "Display"->"mermaid"] // CreateFrontEndObject\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"make a slide"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:".slide\n\n# My slide with a Diagram\n\n<MyDiagram/>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>o,M:()=>s});var t=r(11504);const l={},i=t.createContext(l);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);