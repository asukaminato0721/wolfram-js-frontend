"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[2856],{87568:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var a=t(17624),i=t(4552);const s={draft:!1},o=void 0,c={id:"frontend/Advanced/Dynamics/Offloading calculations",title:"Offloading calculations",description:"Leaving some calculations to the frontend's side can reduce an overhead from the communication between the frontend and the Kernel and also make your code much cleaner at the same time.",source:"@site/docs/frontend/Advanced/Dynamics/Offloading calculations.md",sourceDirName:"frontend/Advanced/Dynamics",slug:"/frontend/Advanced/Dynamics/Offloading calculations",permalink:"/frontend/Advanced/Dynamics/Offloading calculations",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1713121508,formattedLastUpdatedAt:"Apr 14, 2024",frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"Continuous animation",permalink:"/frontend/Advanced/Dynamics/Continuous animation"},next:{title:"Performance tips",permalink:"/frontend/Advanced/Dynamics/Performance tips"}},d={},r=[{value:"A side note",id:"a-side-note",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Leaving some calculations to the frontend's side can reduce an overhead from the communication between the frontend and the Kernel and also make your code much cleaner at the same time."}),"\n",(0,a.jsxs)(n.p,{children:["The idea is to reduce the amount of dynamic symbols to the minimum (see ",(0,a.jsx)(n.a,{href:"/frontend/Dynamics",children:"Dynamics"}),"). Let us start with a simples example of a Bezier curves"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"autoLine[t_, p1_, p2_, p3_] := \n Line[\n  {p1 + t (p2 - p1), p2 + t (p3 - p2)}\n ]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To make it ",(0,a.jsx)(n.em,{children:"dynamic"})," we just need to pass our symbols like"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-matheamtica",children:"p1 = ...;\np2 = ...;\np3 = ...;\n\nautoLine[t, p1 // Offload, p2 // Offload, p3 // Offload]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Imagine if we have many of those lines, and then... ",(0,a.jsx)(n.strong,{children:"Do we need to define the same number of symbols to control them?"})," No, we need just ",(0,a.jsx)(n.code,{children:"3"})," points and the rest can be calculated. Let us bound our ",(0,a.jsx)(n.code,{children:"Line"})," to those 3 and only 3"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",metastring:'title="optimized version"',children:"autoLine[t_, p1_, p2_, p3_] := \n Line[\n   With[{pc = p2, pi = p1, pf = p3}, \n     {pi + t (pc - pi), pc + t (pf - pc)}\n   ] // Offload\n ]\n\nSetAttributes[Line, HoldRest]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Here we used a trick with ",(0,a.jsx)(n.code,{children:"With"})," so that ",(0,a.jsx)(n.code,{children:"p1, p2, p3"})," are external symbol bounded to ",(0,a.jsx)(n.code,{children:"Line"})," and will cause its reevaluation, while ",(0,a.jsx)(n.code,{children:"pc, pi, pf"})," entering the list multiple times are just numbers calculated locally."]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:"Avoid multiple copies of the same dynamic symbol entering the arguments of the same expression. For example"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"Line[{Offload[a], Offload[a] + b}]\n"})}),(0,a.jsxs)(n.p,{children:["a single change in ",(0,a.jsx)(n.code,{children:"a"})," will cause the reevaluation of ",(0,a.jsx)(n.code,{children:"Line"})," ",(0,a.jsx)(n.strong,{children:"two times"}),", while"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"Line[With[{p = a}, {p, p + b}] // Offload]\n"})}),(0,a.jsxs)(n.p,{children:["a single change in ",(0,a.jsx)(n.code,{children:"a"})," will cause the reevaluation of ",(0,a.jsx)(n.code,{children:"Line"})," only ",(0,a.jsx)(n.strong,{children:"one time"})," \ud83d\udc4d\ud83c\udffc"]})]}),"\n",(0,a.jsx)(n.p,{children:"The last thing is to generate a list of those curves connected to three draggable points on a graph"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:'curve[p1_, p2_, p3_] := LeakyModule[{pi = p1, pc = p2, pf = p3},\n  {\n    Blue, Table[autoLine[t, pi, pc, pf], {t, 0, 1, 0.01}],\n    PointSize[0.06], Red, \n\n    EventHandler[Point[pi], {"drag" -> Function[xy, pi = xy]}],\n    EventHandler[Point[pc], {"drag" -> Function[xy, pc = xy]}],\n    EventHandler[Point[pf], {"drag" -> Function[xy, pf = xy]}]\n  }\n]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Here we used ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Misc/Language#%60LeakyModule%60",children:(0,a.jsx)(n.code,{children:"LeakyModule"})}),", which is just a regular ",(0,a.jsx)(n.code,{children:"Module"}),", but with a disabled garbage collector."]}),"\n",(0,a.jsx)(n.p,{children:"Now lets us draw"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"curve[{0.2,0.2}, {0.3,0.5}, {0.6,0.1}] // Graphics\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(33e3).c+"",width:"600",height:"316"})}),"\n",(0,a.jsx)(n.h3,{id:"a-side-note",children:"A side note"}),"\n",(0,a.jsxs)(n.p,{children:["Computations on the frontend side does not cost much. Since everything happens within a browser. One can put many more curves and it would still work perfectly, since all of them are recalculated independently and bounded to ",(0,a.jsx)(n.strong,{children:"3 symbols"})," only"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(34720).c+"",width:"370",height:"244"})})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},33e3:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/Curves video to gif-eadb0ff4f94df54b63ca693038d07f74.gif"},34720:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/Many_many-4ef4ced3815e4dc9cd16cd3ff42c18b2.svg"},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>o});var a=t(11504);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);