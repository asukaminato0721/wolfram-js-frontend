"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[8268],{65124:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=r(17624),t=r(4552);const s={env:["Wolfram Kernel"],update:!1},i=void 0,a={id:"frontend/Reference/Decorations/InterpretationBox",title:"InterpretationBox",description:"Make a formatting structure whose interpretation is not based on its appearance",source:"@site/docs/frontend/Reference/Decorations/InterpretationBox.md",sourceDirName:"frontend/Reference/Decorations",slug:"/frontend/Reference/Decorations/InterpretationBox",permalink:"/wljs-docs/frontend/Reference/Decorations/InterpretationBox",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{env:["Wolfram Kernel"],update:!1},sidebar:"tutorialSidebar",previous:{title:"Interpretation",permalink:"/wljs-docs/frontend/Reference/Decorations/Interpretation"},next:{title:"BoxBox",permalink:"/wljs-docs/frontend/Reference/Decorations/Low level/BoxBox"}},c={},d=[{value:"Applications",id:"applications",level:2},{value:"Display graphics",id:"display-graphics",level:3},{value:"Dev notes",id:"dev-notes",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Make a formatting structure whose interpretation is not based on its appearance"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"InterpretationBox[display_, expr_]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["where ",(0,o.jsx)(n.code,{children:"display"})," will be shown in the output cell, instead of ",(0,o.jsx)(n.code,{children:"expr"}),", keeping ",(0,o.jsx)(n.code,{children:"expr"})," for the evaluation."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"display"})," can be any Wolfram Expression wrapped in ",(0,o.jsx)(n.code,{children:"MakeBoxes"})]})}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"display"})," must be Boxes, if you want to use regular WL expressions, consider ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Decorations/Interpretation",children:"Interpretation"})]})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Please see ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Decorations/Low%20level/BoxBox",children:"BoxBox"})," and ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Decorations/Low%20level/ViewBox",children:"ViewBox"})," for an advanced expression decorations"]})}),"\n",(0,o.jsx)(n.h2,{id:"applications",children:"Applications"}),"\n",(0,o.jsxs)(n.p,{children:["One of the examples is to make some definitions shorter by setting ",(0,o.jsx)(n.code,{children:"UpValues"})," to  ",(0,o.jsx)(n.code,{children:"MakeBoxes"}),", since the last one is recursively applied to everything in the output cell"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"AVeryLongFunction /: MakeBoxes[AVeryLongFunction, StandardForm] := InterpretationBox[MakeBoxes[Ashort, StandardForm], AVeryLongFunction]\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now we can check the result by"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"AVeryLongFunction\n"})}),"\n",(0,o.jsx)(n.p,{children:"if one define also this"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"AVeryLongFunction[expr__] := SpecialList[expr]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can use it with the created alias ",(0,o.jsx)(n.code,{children:"Ashort"})]}),"\n",(0,o.jsx)(n.h3,{id:"display-graphics",children:"Display graphics"}),"\n",(0,o.jsx)(n.p,{children:"Or one could use it as a data-preview"}),"\n",(0,o.jsxs)(n.admonition,{type:"danger",children:[(0,o.jsxs)(n.p,{children:["There is a bug with ",(0,o.jsx)(n.code,{children:"Graphics"}),", ",(0,o.jsx)(n.code,{children:"Graphics3D"})," and ",(0,o.jsx)(n.code,{children:"Image"}),". You should apply ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Dynamics/CreateFrontEndObject",children:(0,o.jsx)(n.code,{children:"CreateFrontEndObject"})})," before, i.e."]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"formula /: MakeBoxes[formula[exp_], StandardForm] := With[{p = Plot[exp, {x,-1,1}, ImageSize->200] // CreateFrontEndObject},\n  InterpretationBox[MakeBoxes[p, StandardForm], formula[exp]]\n]\n"})}),(0,o.jsxs)(n.p,{children:["for ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Plotting/Plotly",children:"Plotly"})," and some other user's defined function ",(0,o.jsx)(n.strong,{children:"it works without"})," ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Dynamics/CreateFrontEndObject",children:"CreateFrontEndObject"})]})]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["Use explicit ",(0,o.jsx)(n.code,{children:"uid"}),", when creating a front-end objects (",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Dynamics/CreateFrontEndObject",children:"CreateFrontEndObject"}),") based on a hash-value of the decorated expression. It will reduce the load to frontend and will keep all instances with the same ",(0,o.jsx)(n.code,{children:"uid"})," to be up to date with the changing data."]}),(0,o.jsxs)(n.p,{children:["See more in ",(0,o.jsx)(n.a,{href:"../../Advanced/Boxes%20and%20Decorations/dynamic-decorations.md",children:"dynamic-decorations"})," guide"]})]}),"\n",(0,o.jsx)(n.h2,{id:"dev-notes",children:"Dev notes"}),"\n",(0,o.jsxs)(n.p,{children:["This is a wrapper for ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Decorations/Low%20level/ViewBox",children:"ViewBox"})," with a read-only ",(0,o.jsx)(n.a,{href:"/wljs-docs/frontend/Reference/Inputs/EditorView",children:"EditorView"})," inside."]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>a,M:()=>i});var o=r(11504);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);