"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[5002],{52308:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(17624),l=t(4552);const o={env:["WLJS"],registered:!0,needsContainer:!0,update:!0,origin:"https://github.com/JerryI/wljs-plotly"},s=void 0,r={id:"frontend/Reference/Plotly/ListLinePlotly",title:"ListLinePlotly",description:"mimics the native function ListLinePlot using Plotly library (see Plotly). It is limited, there is no options supported.",source:"@site/docs/frontend/Reference/Plotly/ListLinePlotly.md",sourceDirName:"frontend/Reference/Plotly",slug:"/frontend/Reference/Plotly/ListLinePlotly",permalink:"/frontend/Reference/Plotly/ListLinePlotly",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:171482423e4,frontMatter:{env:["WLJS"],registered:!0,needsContainer:!0,update:!0,origin:"https://github.com/JerryI/wljs-plotly"},sidebar:"tutorialSidebar",previous:{title:"Plotly",permalink:"/frontend/Reference/Plotly/"},next:{title:"PlotlyAddTraces",permalink:"/frontend/Reference/Plotly/PlotlyAddTraces"}},a={},c=[{value:"Dynamics",id:"dynamics",level:2},{value:"Example",id:"example",level:2},{value:"Examples with dynamics",id:"examples-with-dynamics",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,l.M)(),...e.components},{Wl:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Wl",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"ListLinePlotly[{data1_, data2_, ...}]\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"ListLinePlotly[{{x1,y1}, ... {xn,yn}}]\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"ListLinePlotly[{y1, y2, y3 ...}]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["mimics the native function ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Plotting%20Functions/ListLinePlot",children:"ListLinePlot"})," using Plotly library (see ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Plotting%20Functions/Plotly",children:"Plotly"}),"). It is limited, there is ",(0,i.jsx)(n.strong,{children:"no options supported"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["An alternative plotting function to ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Plotting%20Functions/ListLinePlot",children:"ListLinePlot"}),", that supports dynamic updates, panning, zoom out of the box"]}),"\n",(0,i.jsx)(n.h2,{id:"dynamics",children:"Dynamics"}),"\n",(0,i.jsxs)(n.p,{children:["It fully supports dynamic updates. This is the first ever high order function, that does this unlike ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Plotting%20Functions/ListLinePlot",children:"ListLinePlot"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["To use full features of Plotly, please, use ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Plotting%20Functions/Plotly",children:"Plotly"})," and ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Plotly/PlotlyAnimate",children:"PlotlyAnimate"})," or ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Plotly/PlotlyAddTraces",children:"PlotlyAddTraces"})]})}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"ListLinePlotly[Accumulate[RandomReal[{-1, 1}, {250, 2}]]]\n"})}),"\n",(0,i.jsx)(t,{children:"ListLinePlotly[Accumulate[RandomReal[{-1, 1}, {250, 2}]]]"}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"No styling possible for now"})}),"\n",(0,i.jsx)(n.h2,{id:"examples-with-dynamics",children:"Examples with dynamics"}),"\n",(0,i.jsx)(n.p,{children:"As an advantage of it, you can directly feed it with offloaded variables"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"dirs = {{0,0}, {0,0}};\nListLinePlotly[dirs // Offload]\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"task = SetInterval[dirs = Append[dirs, Last[dirs] + RandomChoice[{{1,0}, {-1,0}, {0,1}, {0,-1}}]], 300];\nSetTimeout[TaskRemove[task], 6000];\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>s});var i=t(11504);const l={},o=i.createContext(l);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);