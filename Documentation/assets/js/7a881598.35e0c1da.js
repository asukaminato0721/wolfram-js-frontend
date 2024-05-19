"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[4064],{62956:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=a(17624),t=a(4552);const r={draft:!1},s=void 0,o={id:"frontend/Advanced/Dynamics/Advanced animation",title:"Advanced animation",description:"Basics",source:"@site/docs/frontend/Advanced/Dynamics/Advanced animation.md",sourceDirName:"frontend/Advanced/Dynamics",slug:"/frontend/Advanced/Dynamics/Advanced animation",permalink:"/frontend/Advanced/Dynamics/Advanced animation",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1716132984e3,frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"AI Assistant",permalink:"/frontend/Advanced/Command palette/AI Assistant"},next:{title:"Indicators",permalink:"/frontend/Advanced/Dynamics/Indicators"}},l={},c=[{value:"Basics",id:"basics",level:2},{value:"Way 1",id:"way-1",level:3},{value:"Way 2",id:"way-2",level:3},{value:"Way 3",id:"way-3",level:3},{value:"Creating and removing objects",id:"creating-and-removing-objects",level:2},{value:"Simple example",id:"simple-example",level:3},{value:"Animating bubbles",id:"animating-bubbles",level:3},{value:"Pool of objects",id:"pool-of-objects",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"basics",children:"Basics"}),"\n",(0,i.jsx)(n.h3,{id:"way-1",children:"Way 1"}),"\n",(0,i.jsxs)(n.p,{children:["Consider to use ",(0,i.jsx)(n.strong,{children:"to get the highest frame-rate"})," and ",(0,i.jsx)(n.strong,{children:"smooth animations"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/AnimationFrameListener",children:"AnimationFrameListener"})," for ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/",children:"Graphics"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics3D/AnimationFrameListener",children:"AnimationFrameListener"})," for ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics3D/",children:"Graphics3D"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["with ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/TransitionType",children:"TransitionType"})," set to ",(0,i.jsx)(n.code,{children:"None"})," if the calculation time does not exceed the ",(0,i.jsx)(n.code,{children:"1/60"})," of the second. Otherwise consider to use ",(0,i.jsx)(n.code,{children:'"Linear"'})," interpolation option and a small amount of ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/TransitionDuration",children:"TransitionDuration"})," around 10-100 depending on how long it takes to update the data."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you animation looks sloppy, you can always cheat asking Javascript to interpolate between data portions over the time. Use ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/TransitionType",children:"TransitionType"})," and ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/TransitionDuration",children:"TransitionDuration"})]})}),"\n",(0,i.jsx)(n.p,{children:"For example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",metastring:'title="cell 1"',children:'balls = RandomReal[{-1,1}, {100,3}];\nvels  = RandomReal[{-1,1}, {100,3}];\n\nGraphics3D[{\n  Table[With[{i = i},\n    {\n      RGBColor[RandomReal[{0,1}, 3]],\n      Sphere[balls[[i]] // Offload, 0.03]\n    }\n  ], {i, Length[balls]}], \n  AnimationFrameListener[balls // Offload, "Event"->"frame"]\n}]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"evaluate the cell above. It will create a canvas with randomly scattered balls"})}),"\n",(0,i.jsxs)(n.p,{children:["At the start of the browser's frame, an event ",(0,i.jsx)(n.code,{children:'"frame"'}),' is triggered to request an update of data from the Kernel. However, after this, you\'ll need to "recharge" an ',(0,i.jsx)(n.code,{children:"AnimationFrameListener"}),", otherwise it will not trigger the event again. This can be automated to occur whenever a change in the ",(0,i.jsx)(n.code,{children:"balls"})," symbol is detected."]}),"\n",(0,i.jsx)(n.p,{children:"This process ensures the following benefits:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Synchronization of animation with the browser's engine (eliminating flickering)."}),"\n",(0,i.jsx)(n.li,{children:"Ability to skip frames if recalculations take longer than one frame of your browser, adapting to your computing power."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Here is our update function"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'EventHandler["frame", Function[Null,\n\n  vels = Table[\n    If[Norm[balls[[i]]] < 0.01, -1, 1] vels[[i]] - 0.08 balls[[i]]\n  , {i, Length[balls]}];\n  \n  balls = Table[balls[[i]] + 0.08 vels[[i]], {i, Length[balls]}];\n]];\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To start an animation - reevaluate ",(0,i.jsx)(n.em,{children:"cell 1"}),' or use this "kickstarter"']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'EventFire["frame", Null]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:a(31816).c+"",width:"578",height:"300"})}),"\n",(0,i.jsx)(n.h3,{id:"way-2",children:"Way 2"}),"\n",(0,i.jsxs)(n.p,{children:["Consider to use ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Misc/Async#%60SetInterval%60",children:(0,i.jsx)(n.code,{children:"SetInterval"})})," for simple or resource intensive animation. Set ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/TransitionDuration",children:"TransitionDuration"})," and ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/TransitionType",children:"TransitionType"})," to a proper value to interpolate the values."]}),"\n",(0,i.jsxs)(n.p,{children:["Usually if your ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Misc/Async#%60SetInterval%60",children:(0,i.jsx)(n.code,{children:"SetInterval"})})," is let's say ",(0,i.jsx)(n.code,{children:"100 ms"}),", then ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/TransitionDuration",children:"TransitionDuration"})," should be around ",(0,i.jsx)(n.code,{children:"100 ms"})," as well to get ",(0,i.jsx)(n.em,{children:"the smoothest animation"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you animation looks sloppy, you can always cheat asking Javascript to interpolate between data portions over the time. Use ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/TransitionType",children:"TransitionType"})," and ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/TransitionDuration",children:"TransitionDuration"})]})}),"\n",(0,i.jsx)(n.p,{children:"For example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'ParametricAnimator[equation_, variable_:t, range_:{0, Infinity, 0.1}] := LeakyModule[{time = range[[1]], task, scale = 1, array = {}, scaledArray={}, cell = ResultCell[]},\n\n    (* sample the equation each frame and rescale if needed *)\n\tanimate := Block[{variable = time},\n        With[{e = {Sin[t], Cos[t]} equation},\n    \t\tscale = If[Norm[e scale] > 1.4, scale 0.95, scale 1];\n            array = Append[array, e];\n    \t\tscaledArray = scale array; \n            pointer = e scale;\n        ];\n\n\t\ttime += range[[3]];\n\t\tIf[time >= range[[2]], TaskRemove[task]];\n\t];\n\n    animate;\n\n    (* async task to animate every 50 ms *)\n\ttask = SetInterval[animate, 50];\n\n    (* stop the task if cell was destroyed or reevaluated *)\n\tEventHandler[cell, {"Destroy"->Function[Null, TaskRemove[task]; Print["removed"]]}];\n\n\tGraphics[{Red, PointSize[0.05], Point[pointer // Offload],\n Opacity[0.5], Line[scaledArray // Offload]\n  }, TransitionDuration->50, TransitionType->"Linear", Controls->False, PlotRange->{{-1,1}, {-1,1}}]\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This will sample a given parametric equation and animate it with ",(0,i.jsx)(n.code,{children:"50 ms"})," time step, while on Javascript's side it will interpolate between frames, so that overall animation will look smooth and will be rendered at 60FPS"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"ParametricAnimator[Exp[Sin[t]] - 2 Cos[4t] + Sin[(2t - Pi)/24], t, {0,16, 0.05}]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:a(67580).c+"",width:"361",height:"240"})}),"\n",(0,i.jsx)(n.h3,{id:"way-3",children:"Way 3"}),"\n",(0,i.jsx)(n.p,{children:"If you animation depends on some interaction with a user, it might be a good idea to run it and update objects attributes only, when some event is fired."}),"\n",(0,i.jsx)(n.p,{children:"For example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'pt = {0,0};\nGraphics[{\n\tWhite,\n\tEventHandler[\n\t\tRectangle[{-2,-2}, {2,2}],\n\t\t{"mousemove"->Function[xy, pt = xy]}\n\t],\n\tPointSize[0.05], Cyan,\n\tPoint[pt // Offload]\n}]\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"a mouse follower"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:a(62312).c+"",width:"578",height:"454"})}),"\n",(0,i.jsx)(n.h2,{id:"creating-and-removing-objects",children:"Creating and removing objects"}),"\n",(0,i.jsxs)(n.p,{children:["The most examples given on the pages ",(0,i.jsx)(n.a,{href:"/frontend/Dynamics",children:"Dynamics"}),", ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/AnimationFrameListener",children:"AnimationFrameListener"})," considers only changing the attributes of created graphics primitives on the screen. One can also use pure raster graphics together with ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/Image",children:"Image"}),", however, this is quite cumbersome to deal with."]}),"\n",(0,i.jsxs)(n.p,{children:["However, you have seen ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/MetaMarker",children:"MetaMarker"}),", you might know the solution. The technique of selecting already evaluated entities  on the frontend and evaluating or removing other symbols inside its context comes handy here."]}),"\n",(0,i.jsx)(n.h3,{id:"simple-example",children:"Simple example"}),"\n",(0,i.jsxs)(n.p,{children:["Here we will append colorful ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/Disk",children:"Disk"})," s to a ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/",children:"Graphics"})," symbol context following the mouse position. As usual the best way to do it is to use white ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/Rectangle",children:"Rectangle"})," \ud83d\ude00"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",metastring:'title="cell 1"',children:'Graphics[{White, EventHandler[Rectangle[{-1,-1}, {1,1}], {"mousemove"->handler}], MetaMarker["canvas"]}, ImagePadding->None]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The last thing is to define ",(0,i.jsx)(n.code,{children:"handler"})," function"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'With[{win = CurrentWindow[]},\n  handler = Function[xy, \n    FrontSubmit[{\n      Hue[RandomReal[{0,1}], 1,1],\n      Disk[xy, RandomReal[{0.01,0.1}]]\n    }, MetaMarker["canvas"], "Window"->win]\n  ];\n];\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Here we use sort of selector ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/MetaMarker",children:"MetaMarker"}),", which makes sure, that the result will be evaluated ",(0,i.jsx)(n.strong,{children:"in the context of all instances"})," marked as ",(0,i.jsx)(n.code,{children:"canvas"}),". The next odd thing is ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/CurrentWindow",children:"CurrentWindow"}),". We need this otherwise our anonymous function does not know to which window it should send an expression"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:a(72560).c+"",width:"434",height:"274"})}),"\n",(0,i.jsx)(n.h3,{id:"animating-bubbles",children:"Animating bubbles"}),"\n",(0,i.jsx)(n.p,{children:"We can go further and not only animate bubbles, but also remove them, when there are to many of them."}),"\n",(0,i.jsx)(n.p,{children:"The complexity of many instances comes mostly from the fact, that we don't have a direct access from Wolfram Kernel to the frontend, but only WebSockets protocol, which gives a big overhead. The only solution to maintain good performance is to minimize numbers of transactions."}),"\n",(0,i.jsx)(n.p,{children:"Think about it was a GPU-CPU communication, which also comes with similar restrictions."}),"\n",(0,i.jsx)(n.h4,{id:"pool-of-objects",children:"Pool of objects"}),"\n",(0,i.jsx)(n.p,{children:"This is going to be our buffers"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"cPool = Table[{0.,0.}, {i,100}]; (* positions *)\nvPool = cPool; (* velocities *)\nrPool = Table[0., {i,100}]; (* radius or lifetime *)\n\noPool = Table[Null, {i,100}]; (* references to objects *)\n"})}),"\n",(0,i.jsx)(n.p,{children:"The general idea is not to allocate new variables for new object, but rather reuse objects from the pool."}),"\n",(0,i.jsx)(n.p,{children:"Graphical output is going to be the same"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'Graphics[{White, EventHandler[Rectangle[{-1,-1}, {1,1}], {"mousemove"->handler}], MetaMarker["canvas"]}, ImagePadding->None]\n'})}),"\n",(0,i.jsx)(n.p,{children:"Our future animation loop is going to look like this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'With[{win = CurrentWindow[]},\n  handler = Function[xy, \n    If[!created[xy, "canvas", win], update[win]];\n  ];\n];\n'})}),"\n",(0,i.jsxs)(n.p,{children:["We ",(0,i.jsx)(n.strong,{children:"don't need to evaluate it now"})]}),"\n",(0,i.jsx)(n.p,{children:"An update functions - just go over our arrays and produce new"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"update[win_] := With[{},\n  {cPool, rPool} = Transpose[MapIndexed[Function[{a, index},\n    (* if slot is not empty - recalculate *)\n    If[oPool[[index//First]] =!= Null,\n        \n      If[a[[2]] <= 0.002, \n        (* if radius is too small - remove an object *)\n        remove[index//First, win];\n        a\n      ,\n        (* if ok - animate *)\n        {a[[1]] + 0.05 vPool[[index//First]], 0.9 a[[2]]}\n      ]\n      \n    ,\n      a\n    ]\n    \n  ], {cPool, rPool} // Transpose]];\n];\n"})}),"\n",(0,i.jsx)(n.p,{children:"if a lifetime is close to zero, we need to remove created instance and free some slots in our buffers for new objects"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'remove[index_, win_] := (\n  (* destroy instance on the frontend *)\n  Delete[oPool[[index]], "Window"->win]; \n  oPool[[index]] = Null\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"And finally a function to create new objects"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'created[xy_, marker_String, win_] := With[{\n  (* find empty slot *)\n  slot = FirstPosition[oPool, Null]\n},\n  If[!MissingQ[slot],\n    With[{s = slot // First},\n\n      (* initial positions and etc *)\n      cPool[[s]] = xy;\n      rPool[[s]] = 0.05;\n      vPool[[s]] = RandomReal[{-1,1}, 2];\n      oPool[[s]] = True;\n\n      (* update so that object wont appear in an odd way *)\n      update[win];\n\n      (* create an instance of Disk on a graph *)\n      With[{\n        o = {\n          Hue[RandomReal[{0,1}],1,1],\n                                                (* prevent double updates *)\n          Disk[Offload[cPool[[s]]], Offload[rPool[[s]], "Static"->True]]\n        }\n      },\n        oPool[[s]] = FrontSubmit[o, MetaMarker[marker], "Window"->win, "Tracking"->True];\n      ];\n    ];\n\n    True\n  ,\n    False\n  ]\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The big difference to the previous example ",(0,i.jsx)(n.a,{href:"#Simple%20example",children:"Simple example"})," is that we track our created instances using an options ",(0,i.jsx)(n.code,{children:'"Tracking"'}),", so that we can remove them later for our SVG canvas (aka ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/",children:"Graphics"}),")"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:a(83744).c+"",width:"404",height:"278"})}),"\n",(0,i.jsxs)(n.p,{children:["All positions and radiuses are passed in two solid symbols ",(0,i.jsx)(n.code,{children:"cPool"})," and ",(0,i.jsx)(n.code,{children:"rPool"}),", then we only need to perform two data transactions to our frontend, which saves a lot of resources, when it comes to make objects flying on the screen. Because of the payload matters less, than each act of transactions in terms of the transport load."]})]})}function h(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},83744:(e,n,a)=>{a.d(n,{c:()=>i});const i=a.p+"assets/images/Bubbles video to gif-e6769380f627f9aeca39fa8709b4461c.gif"},72560:(e,n,a)=>{a.d(n,{c:()=>i});const i=a.p+"assets/images/Canvas Buggles1-79f59d8c708cc52c954b0d46114ba7af.gif"},31816:(e,n,a)=>{a.d(n,{c:()=>i});const i=a.p+"assets/images/ani-ezgif.com-optimize-2ab04d128f188c3e75c500c675b8301a.gif"},67580:(e,n,a)=>{a.d(n,{c:()=>i});const i=a.p+"assets/images/buterfly-ezgif.com-optimize-8fe9fb7adab89fd84177efb62287d560.gif"},62312:(e,n,a)=>{a.d(n,{c:()=>i});const i=a.p+"assets/images/mours-ezgif.com-crop-1ab1f5b0ac7e45c094ec6d5651321b92.gif"},4552:(e,n,a)=>{a.d(n,{I:()=>o,M:()=>s});var i=a(11504);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);