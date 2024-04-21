"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[1356],{47036:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(17624),a=t(4552);const s={},r="Graphics animation & interaction",l={id:"frontend/Advanced/Slides/animations",title:"Graphics animation & interaction",description:"Interactive plots",source:"@site/docs/frontend/Advanced/Slides/animations.md",sourceDirName:"frontend/Advanced/Slides",slug:"/frontend/Advanced/Slides/animations",permalink:"/frontend/Advanced/Slides/animations",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1712600483,formattedLastUpdatedAt:"Apr 8, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transitions",permalink:"/frontend/Advanced/Slides/Transitions"},next:{title:"Components",permalink:"/frontend/Advanced/Slides/components"}},o={},d=[{value:"Interactive plots",id:"interactive-plots",level:2},{value:"Animation",id:"animation",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Example 3",id:"example-3",level:3},{value:"Append graphics to a slide",id:"append-graphics-to-a-slide",level:2},{value:"Buttons, sliders etc",id:"buttons-sliders-etc",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"graphics-animation--interaction",children:"Graphics animation & interaction"}),"\n",(0,i.jsx)(n.h2,{id:"interactive-plots",children:"Interactive plots"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"By the default"}),", everything you plot using ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Plotting%20Functions/Plot",children:"Plot"})," or ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/",children:"Graphics"})," or ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics3D/",children:"Graphics3D"})," can be dragged or panned or rotated. This behavior is controlled by the options and can be switched off if necessary. For example"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"Figure = Plot[{x, Sin[x], Sin[x]^2}, {x,0,2Pi}];\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:".slide\n\n# Simple plot\n\n<Figure/>\n\nTry to drag it using you mouse\n"})}),"\n",(0,i.jsx)(n.p,{children:"The result will look like following"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(98968).c+"",width:"600",height:"401"})}),"\n",(0,i.jsx)(n.h2,{id:"animation",children:"Animation"}),"\n",(0,i.jsx)(n.p,{children:"In general all visuals can be done in the same way as in regular cells, since it uses the same components."}),"\n",(0,i.jsxs)(n.p,{children:["When a slide becomes visible or a fragment got revealed (see ",(0,i.jsx)(n.a,{href:"/frontend/Advanced/Slides/#Transitions%20and%20fragments",children:"Transitions and fragments"}),") it fires an event, where all information is encoded. To enable this - use ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Slides/SlideEventListener",children:"SlideEventListener"})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Put ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Slides/SlideEventListener",children:"SlideEventListener"})," anywhere on the slide to hook up WL Kernel to all events associated with it"]})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Keep the dynamic variables scoped using ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Misc/Language#%60LeakyModule%60",children:(0,i.jsx)(n.code,{children:"LeakyModule"})})," and use explicit event routing like in ",(0,i.jsx)(n.a,{href:"/frontend/Advanced/Events%20system/routing",children:"routing"}),". Later it will allow you to reuse your components for other slides much easier."]})}),"\n",(0,i.jsx)(n.h3,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(n.p,{children:"Let us see the simples example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'.slide\n\n# Animation example\n\n<Figure Id={"routed-event"}/>\n\nThe figure will be changed, when the fragment below is revealed\n\n<span style="color:red">Magic</span> \x3c!-- .element: class="fragment" data-fragment-index="1" --\x3e\n\n<SlideEventListener Id={"routed-event"}/>\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"SlideEventListener"})," is attached only to the slide, where it has been placed."]}),"\n",(0,i.jsx)(n.p,{children:"Now let us make a simple figure"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'Figure[OptionsPattern[]] := With[{event = EventClone[OptionValue["Id"]]},\n\tEventHandler[ResultCell[], {"Destroy" -> Function[Null, Delete[event]]}];\n\t\n\t...\n]\n\nOptions[Figure] = {"Id"->""}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Here we clone a slide event (this is a safe way, if more than 1 handlers will be involved). Afterwards we need to make sure that if one reevaluate the cell, the handler will be removed automatically. That's how you can clean-up handlers after the evaluation."}),"\n",(0,i.jsx)(n.p,{children:"Now the content"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'Figure[OptionsPattern[]] := With[{event = EventClone[OptionValue["Id"]]},\n\tEventHandler[ResultCell[], {"Destroy" -> Function[Null, Delete[event]]}];\n\t\n\tLeakyModule[{points},\n\t\t(* initial state *)\n\t\tpoints = RandomReal[{-1,1}, {40,2}];\n\t\t\n\t\tEventHandler[event, {"fragment-1" -> Function[Null, \n\t\t\t(* act when the event happend *)\n\t\t\tpoints = {Sin[#], Cos[#]} &/@ Range[40]\n\t\t]}];\n\t\t\n\t\tGraphics[\n          {Red, Line[points // Offload]}, \n          PlotRange->{{-1,1}, {-1,1}},\n          TransitionType->"CubicInOut",\n          TransitionDuration->2000\n        ]\n\t]\n]\n\nOptions[Figure] = {"Id"->""}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This little script will plot randomly distributed points as lines for its initial state. When the ",(0,i.jsx)(n.code,{children:"event"})," is fired, it changes the distribution of ",(0,i.jsx)(n.code,{children:"points"})," to a circle. The animation is done by ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/",children:"Graphics"}),"  (i.e. it is a native feature of it and has nothing to do with slides)."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Consider options ",(0,i.jsx)(n.code,{children:'"TransitionType"'})," and ",(0,i.jsx)(n.code,{children:'"TransitionDuration"'})," of ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/",children:"Graphics"})," to control the transition animation."]})}),"\n",(0,i.jsx)(n.p,{children:"The expected result will be"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(94816).c+"",width:"600",height:"395"})}),"\n",(0,i.jsxs)(n.p,{children:["Sure the state is not reservable in this case. You need to manage it by your own considering more events generated by ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Slides/SlideEventListener",children:"SlideEventListener"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"However, in practice reports are usually linear and do not require to repeat all animations again."}),"\n",(0,i.jsx)(n.h3,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(n.p,{children:"Animating transitions complex figures"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",metastring:'title="cell 1"',children:'SpinStructure[OptionsPattern[]] := LeakyModule[{t2=0, t0=0, cloned = EventClone[OptionValue["Slide"]]},\n  (* clone and remove for the case if one assigns other handlers to the same patterns *)\n  EventHandler[ResultCell[], {"Destroy" -> Function[Null,\n    Print["Removed!"];\n    EventRemove[cloned];\n  ]}];\n  \n  EventHandler[cloned, {\n    OptionValue["Stage1"] -> Function[Null,\n      t0=1;\n    ],\n    \n    OptionValue["Stage2"]->Function[Null,\n      t2=1;\n    ],\n\n    (* you need to go back to the previous slide to reset *)\n    "Slide"->Function[Null,\n        t0=0; t2=0;\n    ]\n  }];\n  \n  Graphics[With[{\n  cSpins = ((*GB[*){{{1,-1}(*|*),(*|*){1,-1}(*|*),(*|*){1,1}(*|*),(*|*){1,-1}}(*||*),(*||*){{1,1}(*|*),(*|*){1,-1}(*|*),(*|*){1,1}(*|*),(*|*){1,-1}}(*||*),(*||*){{1,-1}(*|*),(*|*){1,1}(*|*),(*|*){1,-1}(*|*),(*|*){1,1}}(*||*),(*||*){{1,1}(*|*),(*|*){1,1}(*|*),(*|*){1,-1}(*|*),(*|*){1,1}}}(*]GB*))\n  },\n  {\n    Table[{\n      With[{spinPos = (0.23 cSpins[[i,j]] - 0.23 {1,0}), i=i, j=j},\n        Arrow[{{i,j}, ( {i+0.23, j} + t0 spinPos) // Offload}]\n      ],\n      Circle[{i,j}, 0.18]\n    }, {i,1,4}, {j,1,4}],\n\n    Orange,\n    Table[{\n      Circle[{i+0.5,j+0.5}, 0.2],\n      Disk[{i+0.5,j+0.5}, 0.15],\n      Black,\n      Arrow[{{i+0.5,j+0.5}, {-0.3, -0.08 Offload[t2]} + {i+0.5,j+0.5}}]\n    }, {i,1,3,2}, {j,1,3,2}],\n\n    Disk[{1+1.5,1+1.5}, 0.2],\n    Black,\n    Arrow[{{1+1.5,1+1.5}, {-0.3, -0.08 Offload[t2]} + {1+1.5,1+1.5}}]\n  \n  }\n  ], \n    Axes->True, \n    AxesLabel->{"a", "c-axis"}, \n    AxesStyle->Directive[FontSize->18], Ticks->{{-10}, {-10}}, \n    PlotRange->{{0,5}, {0,5}},\n    ImageSize->550,\n    TransitionType->"CubicInOut",\n    TransitionDuration->500\n  ]\n]\n\nOptions[SpinStructure] = {"Stage1"->"", "Stage2"->"", "Slide"->""}\n'})}),"\n",(0,i.jsx)(n.p,{children:"The whole animation consists two stages, on which the direction of arrows changes. We can assign each stage to a fragment on our slide"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'.slide\n\n# Animation Test\n\n---\n\n# Spin structure\n\n<SpinStructure Slide={"sslide"} Stage1={"fragment-1"} Stage2={"fragment-2"} />\n\nReported spin configuration $T < 35K$ \x3c!-- .element: class="fragment fade-in" data-fragment-index="1" --\x3e\n\nExpected low-temperature spin configuration \x3c!-- .element: class="fragment fade-in" data-fragment-index="2" --\x3e \n\n<SlideEventListener Id={"sslide"}/>\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(6232).c+"",width:"800",height:"378"})}),"\n",(0,i.jsx)(n.h3,{id:"example-3",children:"Example 3"}),"\n",(0,i.jsx)(n.p,{children:"Zoom in to the graph"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",metastring:'title="cell 1"',children:'Plt[OptionsPattern[]] := With[{ev = OptionValue["Zoom"], win = CurrentWindow[]},\n  EventHandler[ev, {\n    "Slide" -> Function[Null,\n      FrontSubmit[ZoomAt[1], MetaMarker["marked"], "Window"->win]\n    ],\n\n    "fragment-1" -> Function[Null,\n      FrontSubmit[ZoomAt[2], MetaMarker["marked"], "Window"->win]\n    ]\n  }];\n  \n  Plot[Sinc[x], {x,-10,10}, Epilog->{MetaMarker["marked"]}]\n]\n\nOptions[Plt] = {"Zoom"->""}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",metastring:'title="cell 2"',children:'.slide\n\n# Zoom in\n\n---\n\n<Plt Zoom={"vslide"}/>\n\nZoom \x3c!-- .element: class="fragment fade-in" data-fragment-index="1" --\x3e \n\n<SlideEventListener Id={"vslide"}/>\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(54966).c+"",width:"800",height:"378"})}),"\n",(0,i.jsx)(n.h2,{id:"append-graphics-to-a-slide",children:"Append graphics to a slide"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/frontend/Reference/Frontend%20IO/MetaMarker",children:"MetaMarker"})," can work well in a case if one wants to append some data on the existing graphics canvas"]}),"\n",(0,i.jsx)(n.h2,{id:"buttons-sliders-etc",children:"Buttons, sliders etc"}),"\n",(0,i.jsxs)(n.p,{children:["See built-in examples ",(0,i.jsx)(n.code,{children:"Examples/Slides"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6232:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/SpinAnimation from ezgif-e7a99d870bfbe21252af951b88762883.gif"},54966:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/ZoomIn video to gif-ae93b6a3aa56851f320253d991ed9a81.gif"},98968:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/ezgif.com-optimize 1-15bea37613ccb30c3df8c4bfa4db1f5a.gif"},94816:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/ezgif.com-video-to-gif 1-4c8934f8dec9251a05356f718152b388.gif"},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>r});var i=t(11504);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);