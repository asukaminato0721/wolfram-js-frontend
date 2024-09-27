"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[3776],{66460:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(17624),o=r(4552);const i={env:["Wolfram Kernel"]},a=void 0,s={id:"frontend/Reference/Decorations/MakeBoxes",title:"MakeBoxes",description:"an output handler expression acting as UpValues for other expression converts it to a decorated form, which is then rendered by an editor.",source:"@site/docs/frontend/Reference/Decorations/MakeBoxes.md",sourceDirName:"frontend/Reference/Decorations",slug:"/frontend/Reference/Decorations/MakeBoxes",permalink:"/frontend/Reference/Decorations/MakeBoxes",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1724064567e3,frontMatter:{env:["Wolfram Kernel"]},sidebar:"tutorialSidebar",previous:{title:"Magnify",permalink:"/frontend/Reference/Decorations/Magnify"},next:{title:"MatrixForm",permalink:"/frontend/Reference/Decorations/MatrixForm"}},d={},c=[{value:"Supported forms",id:"supported-forms",level:2},{value:"Used together with",id:"used-together-with",level:2},{value:"Applications",id:"applications",level:2},{value:"Creating interactive objects",id:"creating-interactive-objects",level:3},{value:"Used by",id:"used-by",level:4},{value:"Styling symbols",id:"styling-symbols",level:3},{value:"Data preview",id:"data-preview",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:"MakeBoxes[expr_, form_]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["an output handler expression acting as ",(0,t.jsx)(n.code,{children:"UpValues"})," for other expression converts it to a decorated form, which is then rendered by an editor."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"MakeBoxes"})," is applied only to the output expressions in a normal Wolfram cells, ",(0,t.jsx)(n.a,{href:"/frontend/Advanced/Slides/",children:"Slides"})," and  ",(0,t.jsx)(n.a,{href:"/frontend/Cell%20types/WLX",children:"WLX"}),". It will not affect any intermediate operations."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"MakeBoxes[..., StandardForm]"})," is applied to any visible output from the cell. It is also a part of a pipeline for ",(0,t.jsx)(n.code,{children:"ToString[..., StandardForm]"})," used in ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Cells%20and%20Notebook/CellPrint",children:"CellPrint"}),", and ",(0,t.jsx)(n.a,{href:"/frontend/Reference/GUI/EditorView",children:"EditorView"})," for various applications."]})}),"\n",(0,t.jsx)(n.h2,{id:"supported-forms",children:"Supported forms"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/StandardForm",children:"StandardForm"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/WLXForm",children:"WLXForm"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/InputForm",children:"InputForm"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"used-together-with",children:"Used together with"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/BoxBox",children:"BoxBox"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/ViewBox",children:"ViewBox"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/InterpretationBox",children:"InterpretationBox"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"applications",children:"Applications"}),"\n",(0,t.jsx)(n.p,{children:"It is a core concept of the Notebook interface"}),"\n",(0,t.jsx)(n.h3,{id:"creating-interactive-objects",children:"Creating interactive objects"}),"\n",(0,t.jsx)(n.h4,{id:"used-by",children:"Used by"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/frontend/Reference/Graphics/",children:"Graphics"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/frontend/Reference/Graphics3D/",children:"Graphics3D"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/frontend/Reference/Plotly/ListLinePlotly",children:"ListLinePlotly"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/frontend/Reference/Plotting%20Functions/Plotly",children:"Plotly"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/frontend/Reference/Misc/Events#%60EventObject%60",children:"EventObject"})}),"\n",(0,t.jsx)(n.li,{children:"many more"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["All graphics and interactive objects are running on WLJS interpreter, which is browser'a minimal Wolfram Language interpreter running on Javascript. It draws graphics, handles users interaction via JS. To explicitly run an expression on browser's side you need to apply ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Frontend%20Objects/CreateFrontEndObject",children:"CreateFrontEndObject"})," or use ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/ViewBox",children:"ViewBox"}),". This can be done automatically using ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/MakeBoxes",children:"MakeBoxes"})]}),"\n",(0,t.jsx)(n.p,{children:"for example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:"...\nListLinePlotly /: MakeBoxes[ListLinePlotly[args__], StandardForm] := With[{o = CreateFrontEndObject[ListLinePlotly[args]]}, \n\tMakeBoxes[o, StandardForm]\n]\n\nListPlotly /: MakeBoxes[ListPlotly[args__], StandardForm] := With[{o = CreateFrontEndObject[ListPlotly[args]]}, \n\tMakeBoxes[o, StandardForm]\n]\n...\n"})}),"\n",(0,t.jsx)(n.h3,{id:"styling-symbols",children:"Styling symbols"}),"\n",(0,t.jsxs)(n.p,{children:["Please consider to use ",(0,t.jsx)(n.code,{children:"StandardForm"})," for ",(0,t.jsx)(n.code,{children:"form"})," argument to achieve those effects."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["See ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/ViewBox",children:"ViewBox"})," and ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/BoxBox",children:"BoxBox"})]})}),"\n",(0,t.jsx)(n.h3,{id:"data-preview",children:"Data preview"}),"\n",(0,t.jsx)(n.p,{children:"One can make a preview of the data for example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:"dataHolder /: MakeBoxes[dataHolder[data_], StandardForm] := With[{\n  display = ListPlot[data, ImageSize->200, Axes->False, ImagePadding->None] // CreateFrontEndObject\n},\n\tInterpretationBox[MakeBoxes[display, StandardForm], data]\n] \n\ndataHolder /: ListLinePlot[d_dataHolder, opts___] := ListLinePlot[d//First, opts]\n\ndataHolder[RandomReal[{-1,1}, 100]]\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:"dataHolder[RandomReal[{-1,1}, 100]] // ListLinePLot\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(51068).c+"",width:"1708",height:"816"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/ViewBox",children:"ViewBox"})," ",(0,t.jsx)(n.strong,{children:"creates less overhead  compared to"})," ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/InterpretationBox",children:"InterpretationBox"}),", when it comes to replacing symbols with ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Graphics/",children:"Graphics"})," or other interactive objects."]})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For just a one-time decoration - use ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/Interpretation",children:"Interpretation"})]})})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},51068:(e,n,r)=>{r.d(n,{c:()=>t});const t=r.p+"assets/images/Screenshot 2024-03-27 at 21.03.24-c595ee5c469485040ae55cbe1cc8a1d8.png"},4552:(e,n,r)=>{r.d(n,{I:()=>s,M:()=>a});var t=r(11504);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);