"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[1984],{57944:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=l(17624),s=l(4552);const i={},r=void 0,a={id:"frontend/Advanced/Packages",title:"Packages",description:"By the default the following packages are loaded to the Kernel on startup",source:"@site/docs/frontend/Advanced/Packages.md",sourceDirName:"frontend/Advanced",slug:"/frontend/Advanced/Packages",permalink:"/frontend/Advanced/Packages",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1716641823e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overlay mode",permalink:"/frontend/Advanced/Overlay mode"},next:{title:"Projector",permalink:"/frontend/Advanced/Projector"}},o={},c=[{value:"Wolfram Language Packages",id:"wolfram-language-packages",level:3},{value:"How to install new locally?",id:"how-to-install-new-locally",level:4},{value:"Via command palette",id:"via-command-palette",level:5},{value:"Via LPM",id:"via-lpm",level:5},{value:"WLJS Packages",id:"wljs-packages",level:3},{value:"How to locate and install?",id:"how-to-locate-and-install",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["By the default the following packages ",(0,t.jsx)(n.strong,{children:"are loaded to the Kernel on startup"})]}),"\n",(0,t.jsx)(n.h3,{id:"wolfram-language-packages",children:"Wolfram Language Packages"}),"\n",(0,t.jsx)(n.p,{children:"The standard packages, which can be installed at any WL system"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/KirillBelovTest/CSockets",children:"KirillBelov/CSockets"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/KirillBelovTest/TCPServer",children:"KirillBelov/TCPHandler"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/KirillBelovTest/WebSocketHandler",children:"KirillBelov/WebSocketHandler"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/KirillBelovTest/Objects",children:"KirillBelov/Objects"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/JerryI/wl-misc",children:"JerryI/Misc: Events, Promise, Async, Transport,  Language"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/JerryI/wl-localpackages",children:"JerryI/LPM"})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"how-to-install-new-locally",children:"How to install new locally?"}),"\n",(0,t.jsx)(n.h5,{id:"via-command-palette",children:"Via command palette"}),"\n",(0,t.jsxs)(n.p,{children:["Open you notebook and paste Github link to a repo",(0,t.jsx)("sup",{children:"*"})," in the command palette located at the top-bar"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:l(22412).c+"",width:"1580",height:"420"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("sup",{children:"*"}),"it should contain ",(0,t.jsx)(n.code,{children:"PacletInfo.wl"})," in the root directory"]}),"\n",(0,t.jsx)(n.h5,{id:"via-lpm",children:"Via LPM"}),"\n",(0,t.jsx)(n.p,{children:"Create a new cell and insert"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:'PacletRepositories[{\n    Github -> "https://github.com/KirillBelovTest/HTTPHandler"\n}, "Directory"->NotebookDirectory[]]\n\n<<KirillBelov`HTTPHandler`\n'})}),"\n",(0,t.jsxs)(n.p,{children:["it will create a local folder ",(0,t.jsx)(n.code,{children:"wl_packages"}),", where installed packages will be stored."]}),"\n",(0,t.jsx)(n.h3,{id:"wljs-packages",children:"WLJS Packages"}),"\n",(0,t.jsxs)(n.p,{children:["This is new format similar to regular packages, aimed to ship Javascript, CSS together with WL. It is distributed using Github and installed using ",(0,t.jsx)(n.a,{href:"https://github.com/JerryI/wl-wljs-packages",children:"WLJSPM"}),"  (used only internally by developers) package manager."]}),"\n",(0,t.jsx)(n.p,{children:"The default set is"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"wljs-interpreter -  a tiny interpreter of WL running in the browser"}),"\n",(0,t.jsx)(n.li,{children:"wljs-cells - core component of cells management on the frontned"}),"\n",(0,t.jsx)(n.li,{children:"wljs-editor - CodeMirror 6 editor and many extensions including syntax sugar"}),"\n",(0,t.jsxs)(n.li,{children:["wljs-graphics-d3 - implementation of ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Graphics/Image",children:"Image"})," and ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Graphics/",children:"Graphics"})]}),"\n",(0,t.jsxs)(n.li,{children:["wljs-graphics3d-threejs - implementation of ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Graphics3D/",children:"Graphics3D"})]}),"\n",(0,t.jsxs)(n.li,{children:["wljs-inputs - implementations of UI elements such as ",(0,t.jsx)(n.a,{href:"/frontend/Reference/GUI/InputRange",children:"InputRange"})," and etc"]}),"\n",(0,t.jsxs)(n.li,{children:["wljs-plotly - adapter for ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Plotting%20Functions/Plotly",children:"Plotly"})]}),"\n",(0,t.jsx)(n.li,{children:"wljs-sharedlib-d3 - shared D3.js library used by graphics"}),"\n",(0,t.jsx)(n.li,{children:"wljs-sharedlib-mk - shared Markdown and KaTeX libraries"}),"\n",(0,t.jsx)(n.li,{children:"wljs-html-support - HTML cells type"}),"\n",(0,t.jsx)(n.li,{children:"wljs-markdown-support - Markdown cells type"}),"\n",(0,t.jsx)(n.li,{children:"wljs-mermaid-support - Mermaid cells type"}),"\n",(0,t.jsx)(n.li,{children:"wljs-js-support - JS cells type"}),"\n",(0,t.jsx)(n.li,{children:"wljs-revealjs - Slide cells type"}),"\n",(0,t.jsx)(n.li,{children:"wljs-wlx-support - WLX cells type"}),"\n",(0,t.jsxs)(n.li,{children:["wljs-manipulate - library implementing ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Plotting%20Functions/ManipulatePlot",children:"ManipulatePlot"})]}),"\n",(0,t.jsx)(n.li,{children:"wljs-export-html - encoder and decoder of exported notebooks"}),"\n",(0,t.jsx)(n.li,{children:"wljs-snippets - command palette, snippets system and AI copilot"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"how-to-locate-and-install",children:"How to locate and install?"}),"\n",(0,t.jsxs)(n.p,{children:["All installed packages can be found from ",(0,t.jsx)(n.code,{children:"Settings"})," menu of WLJS Notebook"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:l(79400).c+"",width:"1562",height:"1094"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"There is no third-party extensions so far. The guide on how to write your own is still in development."})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},22412:(e,n,l)=>{l.d(n,{c:()=>t});const t=l.p+"assets/images/Screenshot 2024-05-10 at 21.35.19-cb91376cd85d662bb47a55fce0246ee7.png"},79400:(e,n,l)=>{l.d(n,{c:()=>t});const t=l.p+"assets/images/Screenshot 2024-05-13 at 11.55.17-72f331e20b744e171cfbce751a41e289.png"},4552:(e,n,l)=>{l.d(n,{I:()=>a,M:()=>r});var t=l(11504);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);