"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[9049],{69012:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=i(17624),a=i(4552);const r={sidebar_position:3},s=void 0,o={id:"frontend/Dynamics",title:"Dynamics",description:"The way how dynamics work is quite different compared to Wolfram Mathematica. The key changes were made for the sake of performance and control (or imagination of  @JerryI - maintainer)",source:"@site/docs/frontend/Dynamics.md",sourceDirName:"frontend",slug:"/frontend/Dynamics",permalink:"/frontend/Dynamics",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1719476154e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/frontend/Overview"},next:{title:"Symbolic programming",permalink:"/frontend/Symbolic programming"}},c={},l=[{value:"Architecture",id:"architecture",level:2},{value:"If you are looking for just Manipulate",id:"if-you-are-looking-for-just-manipulate",level:2},{value:"Automatic tracking of held symbols",id:"automatic-tracking-of-held-symbols",level:2},{value:"Event-based approach",id:"event-based-approach",level:2},{value:"\ud83c\udf6a Example 0",id:"-example-0",level:4},{value:"\ud83c\udf6a Example 1",id:"-example-1",level:4},{value:"Event handlers for graphics primitives",id:"event-handlers-for-graphics-primitives",level:3},{value:"Autogeneration of dynamic symbols",id:"autogeneration-of-dynamic-symbols",level:3},{value:"\ud83c\udf6a Example 2",id:"-example-2",level:4},{value:"\ud83c\udf6a Example 3",id:"-example-3",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The way how dynamics work is quite different compared to Wolfram Mathematica. The key changes were made for the sake of performance and control (or imagination of  @JerryI - maintainer)"}),"\n",(0,t.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsx)(n.p,{children:"All dynamics in terms of what you expect from Mathematica's experience happens on the frontend's side, i.e. in your browser."}),"\n",(0,t.jsxs)(n.p,{children:["The core engine for that is used from ",(0,t.jsx)(n.a,{href:"https://jerryi.github.io/wlx-docs/docs/WLX/dynamics#dynamic-symbols",children:"WLX Library"})," (WLJSTransport package)."]}),"\n",(0,t.jsxs)(n.p,{children:["Some expressions are meant for to be executed on frontend, i.e. not defined on the Kernel, then a user do not need to specify explicitly what and when should happen. In other cases, a user can use ",(0,t.jsx)(n.code,{children:"Offload"})," attribute or ",(0,t.jsx)(n.code,{children:"CreateFrontEndObject"})," to tell explicitly Wolfram Kernel pass an expression without evaluation to the frontend. Therefore one can play around with a way of splitting your code-base to archive the maximum flexibility and performance."]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["More about it ",(0,t.jsx)(n.a,{href:"https://jerryi.github.io/wlx-docs/docs/WLX/dynamics#dynamic-symbols",children:"here"})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Always keep in mind, which part of code executes on Wolfram Kernel (server) and what is delegated to the frontend (browser). This is the only way to write predictable and good performing code"})}),"\n",(0,t.jsx)(n.h2,{id:"if-you-are-looking-for-just-manipulate",children:"If you are looking for just Manipulate"}),"\n",(0,t.jsxs)(n.p,{children:["There is a short cut, if you need to see how your curves changes with different parameters - see ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Plotting%20Functions/ManipulatePlot",children:"ManipulatePlot"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(19706).c+"",width:"600",height:"400"})}),"\n",(0,t.jsxs)(n.p,{children:["For small expression needed to be reevaluated by a trigger or a timer (not often), one can also use ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Interpreter/Refresh",children:"Refresh"})," wrapper"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:"Refresh[Now // TextString, 1]\n"})}),"\n",(0,t.jsx)(n.p,{children:"It will update the current time in the output cell every second."}),"\n",(0,t.jsx)(n.h2,{id:"automatic-tracking-of-held-symbols",children:"Automatic tracking of held symbols"}),"\n",(0,t.jsxs)(n.p,{children:["It does not mean, that your ",(0,t.jsx)(n.code,{children:"Set"})," statements will be reevaluated on change of a nested symbol, however, for most graphics primitives it works out of the box. Use ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Interpreter/Offload",children:"Offload"})," wrapper to hold symbols for the frontend"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:"length = 1;\n\nGraphics[{Cyan, \n  Rectangle[{-1,-1}, {length // Offload, 1}]\n}] \n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Offload"})," just does a simple trick - provides to a frontend an unknown symbol, which forces frontend to fetch it from the Kernel. Once it has been fetched, a dynamic link is created."]})}),"\n",(0,t.jsxs)(n.p,{children:["The binding itself happens between ",(0,t.jsx)(n.code,{children:"Rectangle"})," and ",(0,t.jsx)(n.code,{children:"length"}),", but not ",(0,t.jsx)(n.code,{children:"Graphics"}),", therefore only partial reevaluation occurs. To know more about details see ",(0,t.jsx)(n.a,{href:"../../../interpreter/Advanced/symbols.md",children:"WLJS"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["Not all functions support dynamic binding or updates. Please check ",(0,t.jsx)(n.strong,{children:"Reference"})," section, if the argument or a function supports dynamic updates."]})}),"\n",(0,t.jsx)(n.h2,{id:"event-based-approach",children:"Event-based approach"}),"\n",(0,t.jsx)(n.p,{children:"Working with GUI elements standing for input is done in more controllable way, where each button or slider is an event-generator"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:'slider = InputRange[-1,1,0.1, "Label"->"Length"]\nEventHandler[slider, Function[l, length = l]];\n'})}),"\n",(0,t.jsx)(n.p,{children:"Once event was fired, the assigned handler function will be called."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(90784).c+"",width:"600",height:"344"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"slider"})," symbol is actually a special object, that stores the representation of a slider and an ID for the event, that will be fired when a user drags a knob."]}),"\n",(0,t.jsx)(n.h4,{id:"-example-0",children:"\ud83c\udf6a Example 0"}),"\n",(0,t.jsx)(n.p,{children:"A simple rotation with a slider"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:"EventHandler[InputRange[0, 2.0 Pi, 0.1], Function[a,\n  angle = a\n]]\n% // EventFire;\n\nGraphics[Rotate[Rectangle[{-1,-1}, {1,1}], angle // Offload]]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(56648).c+"",width:"1056",height:"940"})}),"\n",(0,t.jsx)(n.h4,{id:"-example-1",children:"\ud83c\udf6a Example 1"}),"\n",(0,t.jsx)(n.p,{children:"Let us demonstrate how a wave packet travels though space and time"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",metastring:'title="cell 1"',children:'packet[x_, t_] := Sum[Sin[- w t + w x], {w, 0,3,0.05}] / 10;\nline = Table[{x, packet[x, 0]}, {x, 0, 10, 0.1}];\n\nGraphics[Line[line // Offload], Frame->True, FrameLabel->{{"amplitude"}, {"distance"}}]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["here ",(0,t.jsx)(n.code,{children:"line"})," symbol is dynamic. Now we need a slider to control time"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",metastring:'title="cell 2"',children:"EventHandler[InputRange[0,5,0.5, 0], Function[t, \n  line = Table[{x, packet[x, t]}, {x, 0, 10, 0.1}];\n]]\n"})}),"\n",(0,t.jsx)(n.p,{children:"The desired result looks line this"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(65636).c+"",width:"1056",height:"940"})}),"\n",(0,t.jsx)(n.h3,{id:"event-handlers-for-graphics-primitives",children:"Event handlers for graphics primitives"}),"\n",(0,t.jsx)(n.p,{children:"It looks similar to Mathematica's implementation, where one can add an event handler to a random graphics primitive"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:'p = {0,0};\nGraphics[{\n\tWhite,\n\tEventHandler[\n\t\tRectangle[{-2,-2}, {2,2}],\n\t\t{"mousemove"->Function[xy, p = xy]}\n\t],\n\tPointSize[0.05], Cyan,\n\tPoint[p // Offload]\n}]\n'})}),"\n",(0,t.jsx)(n.p,{children:"The following event are available"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"drag"})," - provides a list of two coordinates"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"zoom"})," - provides one relative scaling number"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"click"})," - provides coordinates, where the cursor clicked"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"mousemove"})," - provides coordinates of a mouse"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"mouseover"})," - provides coordinates once, when a mouse appears at a div"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"for 3D graphics the following events are provided"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"transform"})," - sends an association with a new position of a dragged object"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Event handlers wrapped around graphics primitives are parts of ",(0,t.jsx)(n.a,{href:"https://github.com/JerryI/wljs-graphics-d3",children:"wljs-graphics-d3"})," library."]})}),"\n",(0,t.jsxs)(n.p,{children:["See more in ",(0,t.jsx)(n.a,{href:"/frontend/Advanced/Events%20system/Mouse%20and%20keyboard",children:"Mouse and keyboard"})]}),"\n",(0,t.jsx)(n.h3,{id:"autogeneration-of-dynamic-symbols",children:"Autogeneration of dynamic symbols"}),"\n",(0,t.jsxs)(n.p,{children:["There is also an extension ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Interpreter/OffloadFromEventObject",children:"OffloadFromEventObject"})," that allows to turn event objects into dynamic symbols"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(55648).c+"",width:"800",height:"477"})}),"\n",(0,t.jsx)(n.h4,{id:"-example-2",children:"\ud83c\udf6a Example 2"}),"\n",(0,t.jsx)(n.p,{children:"Let us show a fun example - implementation of FABRIK solver."}),"\n",(0,t.jsx)(n.p,{children:"Define a random chain of segments with a random fixed lengths"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",metastring:'title="cell 1"',children:"chain = {Cos[#[[1]]], Sin[#[[2]]]}&/@ RandomReal[{-1,1}, {65, 2}] // Sort;\nlengths = Norm /@ (chain // Reverse // Differences) // Reverse;\n"})}),"\n",(0,t.jsx)(n.p,{children:"The most stupid and simple implementation of FABRIK"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",metastring:'title="cell 2"',children:"fabrik[lengths_, target_, origin_] := Module[{buffer, prev},\n  buffer = Table[With[{p = chain[[-i]]},\n    If[i === 1,\n      prev = target;\n      target\n    ,\n    \n      prev = prev - Normalize[(prev - p)] lengths[[1-i]];\n      prev \n    ]\n  ], {i, chain // Length}] // Reverse;\n\n  Table[With[{p = buffer[[i]]},\n    If[i === 1,\n      prev = origin;\n      origin\n    ,\n    \n      prev = prev - Normalize[(prev - p)] lengths[[i-1]];\n      prev \n    ]\n  ], {i, chain // Length}]\n]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To show the result will will use a simple ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Graphics/Line",children:"Line"})," primitive coupled to a ",(0,t.jsx)(n.code,{children:"chain"})," symbol and an inline event-handler coupled to a target point of a chain"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",metastring:'title="cell 3"',children:'Graphics[{\n\n  Line[chain // Offload], \n  Red, PointSize[0.06], \n  EventHandler[Point[{-1,-1}], {"drag"->Function[xy, chain = fabrik[lengths, xy, chain // First]]}], \n  Blue, Point[origin // Offload]\n  \n}, PlotRange->{{-2,2}, {-2,2}}, ImageSize->500, "TransitionType"->"Linear", "TransitionDuration"->30]\n'})}),"\n",(0,t.jsx)(n.p,{children:"By dragging the red point you update all positions joints"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(92862).c+"",width:"600",height:"378"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"use wheel to zoom and a left click to pan"})}),"\n",(0,t.jsx)(n.h4,{id:"-example-3",children:"\ud83c\udf6a Example 3"}),"\n",(0,t.jsx)(n.p,{children:"Let us show you something more simple"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:"opacity = 0.5;\nGraphics[{Opacity[Offload[opacity]], Red, Disk[{0,0}, Offload[1-opacity]], Blue, Opacity[Offload[1.0 - opacity]], Disk[{0,0}, Offload[opacity]]}, ImagePadding->None]\n\nEventHandler[InputRange[0,1,0.1], Function[value,\n\topacity = value;\n]]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here we provide dynamic symbol ",(0,t.jsx)(n.code,{children:"opacity"})," to both ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Graphics3D/Opacity",children:"Opacity"})," and ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Graphics/Disk",children:"Disk"})," radius. The effect of two will be following"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(39216).c+"",width:"800",height:"472"})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"All examples shown here are shipped together with an app . Locate"}),(0,t.jsx)("div",{style:{width:"120px"},children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(63736).c+"",width:"340",height:"550"})})}),(0,t.jsx)(n.p,{children:"or from the top-bar menu"})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Check out our ",(0,t.jsx)(n.strong,{children:"Blog"})," section \ud83d\udcfb for more examples and dev notes."]})})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},55648:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/Generated.mov to GIF-12d45d60693e6fa42316b24555326f81.gif"},19706:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/Manipulate-ezgif.com-video-to-gif-converter 2-e4d4eb07225c8791a7ea5a85cd253d00.gif"},56648:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/Rotator-ezgif.com-optipng-c4b25beaad1c09c4b0138a448ce079af.png"},63736:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/Screenshot 2023-11-29 at 22.20.08-5a1d775af094ba90bf0331260e5a7a98.png"},92862:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/ezgif.com-optimize-5-55576aef6756b65dcc582b2f19964fa0.gif"},90784:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/ezgif.com-optimize-6-b8c83d6cacd03c5e896fa43c88e64f88.gif"},65636:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/moving-ezgif.com-optipng-a0d2d2c16988d17bb2decbc4e521cea4.png"},39216:(e,n,i)=>{i.d(n,{c:()=>t});const t=i.p+"assets/images/opacitydouble-ezgif.com-optimize-dc9903353e6f00df08fc3f4dfb60caa4.gif"},4552:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>s});var t=i(11504);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);