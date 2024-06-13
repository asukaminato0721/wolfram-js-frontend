"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[9892],{13116:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=n(17624),s=n(4552);const o={sidebar_position:5},r=void 0,a={id:"frontend/Command palette",title:"Command palette",description:"The big power of customization comes with a powerful command palette system. This is provided by a plugin shipped with a core package.",source:"@site/docs/frontend/Command palette.md",sourceDirName:"frontend",slug:"/frontend/Command palette",permalink:"/frontend/Command palette",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1717785218e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"WLX",permalink:"/frontend/Cell types/WLX"},next:{title:"Guidelines",permalink:"/frontend/Guidelines"}},l={},c=[{value:"AI Assistant",id:"ai-assistant",level:2},{value:"Context menu",id:"context-menu",level:2},{value:"Uploading data",id:"uploading-data",level:2},{value:"Matrix helper",id:"matrix-helper",level:2},{value:"Show available options",id:"show-available-options",level:2},{value:"Navigation gizmo",id:"navigation-gizmo",level:2},{value:"Format Wolfram Language code",id:"format-wolfram-language-code",level:2},{value:"Text formatting",id:"text-formatting",level:2},{value:"Take a picture",id:"take-a-picture",level:2},{value:"Install Wolfram Packages from Github",id:"install-wolfram-packages-from-github",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",del:"del",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.M)(),...e.components},{CodeMirror:o}=i;return o||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CodeMirror",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["The big power of customization comes with a powerful command palette system. This is provided by a ",(0,t.jsx)(i.a,{href:"https://github.com/JerryI/wljs-snippets",children:"plugin"})," shipped with a core package."]}),"\n",(0,t.jsxs)(i.p,{children:["Snippets are dedicated cells of Wolfram / ",(0,t.jsx)(i.a,{href:"/frontend/Cell%20types/WLX",children:"WLX"})," / ",(0,t.jsx)(i.a,{href:"/frontend/Cell%20types/Javascript",children:"Javascript"})," which serve a single utility function. ",(0,t.jsx)(i.strong,{children:"They are available from the command palette"})," and have an access to your notebook and computational Kernel. You can see their source notebook as well as short documentation by clicking on a question mark symbol"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(49712).c+"",width:"1824",height:"714"})}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:["Use a shortcut for command palette ",(0,t.jsx)(i.code,{children:"Cmd + P"})," or ",(0,t.jsx)(i.code,{children:"Ctrl + P"})]})}),"\n",(0,t.jsx)(i.h2,{id:"ai-assistant",children:"AI Assistant"}),"\n",(0,t.jsxs)(i.p,{children:["If nothing is selected, ",(0,t.jsx)(i.strong,{children:"the given text in the command palette is sent to ChatGPT"})," that has ",(0,t.jsx)(i.strong,{children:"an access to your notebook"})]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(80008).c+"",width:"800",height:"377"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsxs)(i.strong,{children:["See more ",(0,t.jsx)(i.a,{href:"/frontend/Advanced/Command%20palette/AI%20Assistant",children:"detailed guide"})]})," on our assistant."]}),"\n",(0,t.jsx)(i.admonition,{type:"note",children:(0,t.jsx)(i.p,{children:"It will ask you for a OpenAI API Key. You need to issue it first on the official openAI website"})}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsxs)(i.p,{children:["An initial system prompt that given AI the knowledge of available cells, details of used libraries and etc costs ",(0,t.jsx)(i.code,{children:"4000"})," tokens"]})}),"\n",(0,t.jsx)(i.p,{children:"In general AI can do the following"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"create, remove, evaluate, edit cells"})," in any language"]}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.strong,{children:"read notebook structure"})}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"see your focused cell"})," you dropped a cursor on"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"see your selection"})," in any editor area"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.del,{children:"google"})," ",(0,t.jsx)(i.strong,{children:"use WolframAlpha"})," to fetch data from the internet"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Shorts"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["YTS \ud83d\udcfd\ufe0f ",(0,t.jsx)(i.a,{href:"https://youtube.com/shorts/6s9m5ZGPkdE?feature=share",children:"We made AI Copilot in your Notebook \ud83e\udd16"})]}),"\n",(0,t.jsxs)(i.li,{children:["YTS \ud83d\udcfd\ufe0f ",(0,t.jsx)(i.a,{href:"https://youtube.com/shorts/B_ZVjN9cvQM?feature=share",children:"AI Copilot in your Notebook. Part 2 \ud83e\udd16"})]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"context-menu",children:"Context menu"}),"\n",(0,t.jsxs)(i.p,{children:["If you need to apply ",(0,t.jsx)(i.code,{children:"Simplify"})," or highlight selected expressions in the code"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(58484).c+"",width:"720",height:"147"})}),"\n",(0,t.jsx)(i.p,{children:"Highlighting text is not destructive and will not alter an initial expression you had."}),"\n",(0,t.jsx)(i.h2,{id:"uploading-data",children:"Uploading data"}),"\n",(0,t.jsx)(i.p,{children:"There are a few snippets used for uploading ASCII data or any arbitrary files to the folder of your notebook"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(70152).c+"",width:"800",height:"538"})}),"\n",(0,t.jsx)(i.p,{children:"This snippet was built using regular Wolfram Language."}),"\n",(0,t.jsx)(i.h2,{id:"matrix-helper",children:"Matrix helper"}),"\n",(0,t.jsx)(i.p,{children:"To make it easier for typing matrixes, one can use the following snippet"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(64924).c+"",width:"800",height:"538"})}),"\n",(0,t.jsxs)(i.p,{children:["This snippet inserts the given matrix into the cell ",(0,t.jsx)(i.strong,{children:"where your last cursor was"}),". A snippet was made using ",(0,t.jsx)(i.a,{href:"/frontend/Cell%20types/WLX",children:"WLX"})," cells for better customized look."]}),"\n",(0,t.jsx)(i.h2,{id:"show-available-options",children:"Show available options"}),"\n",(0,t.jsxs)(i.p,{children:["This snippet analyses the content of your cell ",(0,t.jsx)(i.strong,{children:"from the left of your cursor position"})," and prints ",(0,t.jsx)(i.code,{children:"Options"})," for a given symbol"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(30174).c+"",width:"800",height:"538"})}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsx)(i.p,{children:"Drop a cursor in the middle of a symbol of interest. You can select and edit option values inside the picker"})}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsx)(i.p,{children:"Not all options are supported for a standard library symbol of Wolfram Mathematica"})}),"\n",(0,t.jsx)(i.h2,{id:"navigation-gizmo",children:"Navigation gizmo"}),"\n",(0,t.jsx)(i.p,{children:"This feature is aimed to slightly blur the line between code  and traditional GUI interface approaches for 2D/3D graphics design"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(86260).c+"",width:"800",height:"538"})}),"\n",(0,t.jsxs)(i.p,{children:["See ",(0,t.jsx)(i.strong,{children:"shorts"})," on that"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["YTS \ud83d\udcfd\ufe0f ",(0,t.jsx)(i.a,{href:"https://youtube.com/shorts/Z76dMHK8POM?feature=share",children:"You don't need to program your figures manually"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"It utilizes the dynamic reevaluation features of WLJS Notebook as well as powerful syntax sugar of an input editor."}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Select 2D or 3D list of coordinates ",(0,t.jsx)(i.code,{children:"{}"})]}),"\n",(0,t.jsxs)(i.li,{children:["Type ",(0,t.jsx)(i.code,{children:"gizmo..."})," in the command palette"]}),"\n",(0,t.jsx)(i.li,{children:"Evaluate the cell"}),"\n",(0,t.jsx)(i.li,{children:"Drag gizmo to the desired position and click on a check mark"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"It can also work in principle for most primitives"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(94638).c+"",width:"800",height:"538"})}),"\n",(0,t.jsxs)(i.admonition,{type:"tip",children:[(0,t.jsx)(i.p,{children:"Add an offset to a manipulated list, that a gizmo will not overlap with other graphics primitives. For example"}),(0,t.jsx)(o,{children:'Text["Hello World", ({0.5,0.5} + (*BB[*)({0.5,0.5})(*,*)(*"1:eJxTTMoPSmNkYGAoZgESHvk5KRAeB5AILqnMSXXKr0hjgskHleakFnMBGU6JydnpRfmleSlpzDDlQe5Ozvk5+UVFDGDwwR6dwcAAAAHdFiw="*)(*]BB*)) // Hold]'}),(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"Offload"})," or (",(0,t.jsx)(i.code,{children:"Hold"})," will also work) is necessary here to prevent Wolfram Kernel from distributing ",(0,t.jsx)(i.code,{children:"Plus"})," over each position of the list."]})]}),"\n",(0,t.jsx)(i.p,{children:"Or for 3D primitives as well"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(30830).c+"",width:"800",height:"538"})}),"\n",(0,t.jsx)(i.h2,{id:"format-wolfram-language-code",children:"Format Wolfram Language code"}),"\n",(0,t.jsx)(i.p,{children:"This is also a code formatter available"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(38808).c+"",width:"800",height:"538"})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"It acts on a selected text or on the entire cell"})," if nothing is selected"]}),"\n",(0,t.jsx)(i.h2,{id:"text-formatting",children:"Text formatting"}),"\n",(0,t.jsx)(i.p,{children:"This snippet provides some basic tool for styling Wolfram expression, as well as text on slides, HTML and Markdown (it tries to guess the cell type and use a suitable method for each cell type)"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(59184).c+"",width:"800",height:"485"})}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsx)(i.p,{children:"This feature is quite primitive and still in development"})}),"\n",(0,t.jsx)(i.h2,{id:"take-a-picture",children:"Take a picture"}),"\n",(0,t.jsxs)(i.p,{children:["It uses your active web camera pipes a picture to Wolfram Kernel as ",(0,t.jsx)(i.a,{href:"/frontend/Reference/Graphics/Image",children:"Image"})," object"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(24924).c+"",width:"796",height:"406"})}),"\n",(0,t.jsx)(i.h2,{id:"install-wolfram-packages-from-github",children:"Install Wolfram Packages from Github"}),"\n",(0,t.jsxs)(i.p,{children:["If you past a url to a Github repository into command palette, which contains ",(0,t.jsx)(i.code,{children:"PacletInfo.wl"})," file in the root directory"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(22412).c+"",width:"1580",height:"420"})}),"\n",(0,t.jsx)(i.p,{children:"it will automatically install it locally in the folder of the current notebook."})]})}function h(e={}){const{wrapper:i}={...(0,s.M)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},80008:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/ASKAI optimizer-0612abc75688bae6f64ef1680b0bb319.gif"},64924:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/Screen Recording Apr 8 (1)-bd2e4754fce9c93a37bf52db74ce03d4.gif"},30174:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/Screen Recording Apr 8 (2)-7a237c29f6d38e4c985af81031538e27.gif"},86260:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/Screen Recording Apr 8 (3)-a5b564409586bc3434e3c63a91b22453.gif"},94638:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/Screen Recording Apr 8 (4)-e08e04dd44047ac3f3d601cbfc0416f8.gif"},30830:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/Screen Recording Apr 8 (5)-5df85d0d9d86f829766b4b4aeb65b26b.gif"},38808:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/Screen Recording Apr 8 (6)-fbeba4781669232c6a70693624b7f1b5.gif"},70152:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/Screen Recording Apr 8-164c1b6d08c67bb9b0ef7694d24cab38.gif"},58484:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/Screenshot 2024-05-05 at 12.11.27-91a1c510316219bc20266c0d888e06eb.png"},22412:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/Screenshot 2024-05-10 at 21.35.19-cb91376cd85d662bb47a55fce0246ee7.png"},24924:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/TakeAPic speed-8bb201416a7557a89ebaefea65f705f7.gif"},59184:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/ToolbarT optimizer-42cd01a24a5ba9d9dfc7551fd9ee777c.gif"},49712:(e,i,n)=>{n.d(i,{c:()=>t});const t=n.p+"assets/images/snippetsover-56744cfedae264a377d16b2a98d3aec4.png"},4552:(e,i,n)=>{n.d(i,{I:()=>a,M:()=>r});var t=n(11504);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);