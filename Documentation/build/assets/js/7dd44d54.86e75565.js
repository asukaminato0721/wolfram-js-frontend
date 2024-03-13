"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[2112],{37516:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=r(17624),i=r(4552);const t={internal:!0,origin:"https://github.com/JerryI/wljs-editor/tree/main"},o=void 0,a={id:"frontend/Reference/Decorations/Low level/BoxBox",title:"BoxBox",description:"Used to decorate Wolfram Expression with custom HTML elements",source:"@site/docs/frontend/Reference/Decorations/Low level/BoxBox.md",sourceDirName:"frontend/Reference/Decorations/Low level",slug:"/frontend/Reference/Decorations/Low level/BoxBox",permalink:"/wljs-docs/frontend/Reference/Decorations/Low level/BoxBox",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{internal:!0,origin:"https://github.com/JerryI/wljs-editor/tree/main"},sidebar:"tutorialSidebar",previous:{title:"InterpretationBox",permalink:"/wljs-docs/frontend/Reference/Decorations/InterpretationBox"},next:{title:"ViewBox",permalink:"/wljs-docs/frontend/Reference/Decorations/Low level/ViewBox"}},l={},d=[{value:"Options",id:"options",level:2},{value:"<code>Head</code>",id:"head",level:3},{value:"Examples",id:"examples",level:2},{value:"Change the display value and call arbitrary WLJS function",id:"change-the-display-value-and-call-arbitrary-wljs-function",level:3},{value:"Styling expression using JS",id:"styling-expression-using-js",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Used ",(0,s.jsx)(n.strong,{children:"to decorate"})," Wolfram Expression with custom HTML elements"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"(*BB[*)(expr)(*,*)(*view*)(*]BB*)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Most decorations generated by ",(0,s.jsx)(n.code,{children:"Frame"})," and etc..."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["the expression is ",(0,s.jsx)(n.strong,{children:"editable"})]}),"\n",(0,s.jsx)(n.li,{children:"a common WL editor is spawned inside"}),"\n",(0,s.jsxs)(n.li,{children:["only the container of the editor can be decorated or wrapping expression (see ",(0,s.jsx)(n.a,{href:"#%60Head%60",children:(0,s.jsx)(n.code,{children:"Head"})}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["See the full guide on them ",(0,s.jsx)(n.a,{href:"../../../Development/Decorations.md",children:"Decorations"})]})}),"\n",(0,s.jsx)(n.p,{children:"There is a helper function to prevent an editor from rendering, if you want to write using this low-level representation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"BoxBox[expr_Boxes | _String, decorator_, opts___]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["it will substitute ",(0,s.jsx)(n.code,{children:"expr"})," into a subeditor and decorate it using ",(0,s.jsx)(n.code,{children:"decorator"})," expression executed on WLJS Interpreter."]}),"\n",(0,s.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.h3,{id:"head",children:(0,s.jsx)(n.code,{children:"Head"})}),"\n",(0,s.jsx)(n.p,{children:"Provides a head symbol of the wrapper expression, that will be hidden from the inner editor. It comes handy when you need to preserve the original from of the expression during the editing"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"Head"})," option to keep the wrapping expression"]})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"change-the-display-value-and-call-arbitrary-wljs-function",children:"Change the display value and call arbitrary WLJS function"}),"\n",(0,s.jsx)(n.p,{children:"This is a dummy example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'special /: MakeBoxes[special, StandardForm] := BoxBox["1+1", Alert["Hi"]]\n\n\nspecial\n'})}),"\n",(0,s.jsx)(n.h3,{id:"styling-expression-using-js",children:"Styling expression using JS"}),"\n",(0,s.jsx)(n.p,{children:"One can define its own style of cells boxes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'.js\ncore.Styler = async (args, env) => {\n  env.element.style.boxShadow = "1px 1px 5px black";\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"wrapper /: MakeBoxes[wrapper[expr_], StandardForm] := BoxBox[MakeBoxes[expr, StandardForm], Styler, Head->wrapper]\n"})}),"\n",(0,s.jsx)(n.p,{children:"and then try"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"wrapper[1/2]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Result"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(28816).c+"",width:"1168",height:"328"})}),"\n",(0,s.jsxs)(n.p,{children:["The neat thing is ",(0,s.jsx)(n.strong,{children:"you can edit the inner expression"})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This is how ",(0,s.jsx)(n.code,{children:"Ket"}),", ",(0,s.jsx)(n.code,{children:"Bra"})," are implemented for instance"]})})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28816:(e,n,r)=>{r.d(n,{c:()=>s});const s=r.p+"assets/images/Screenshot 2023-12-10 at 16.59.28-9d0cf26825b38da974ceafa4d0279727.png"},4552:(e,n,r)=>{r.d(n,{I:()=>a,M:()=>o});var s=r(11504);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);