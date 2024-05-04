"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[328],{84400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var o=n(17624),l=n(4552);const r={source:"https://reference.wolfram.com/language/ref/Plot3D.html"},c=void 0,i={id:"frontend/Reference/Plotting Functions/Plot3D",title:"Plot3D",description:"generates a three-dimensional plot of\xa0f\xa0as a function of\xa0x\xa0and\xa0y.",source:"@site/docs/frontend/Reference/Plotting Functions/Plot3D.md",sourceDirName:"frontend/Reference/Plotting Functions",slug:"/frontend/Reference/Plotting Functions/Plot3D",permalink:"/frontend/Reference/Plotting Functions/Plot3D",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714824230,formattedLastUpdatedAt:"May 4, 2024",frontMatter:{source:"https://reference.wolfram.com/language/ref/Plot3D.html"},sidebar:"tutorialSidebar",previous:{title:"Plot",permalink:"/frontend/Reference/Plotting Functions/Plot"},next:{title:"Plotly",permalink:"/frontend/Reference/Plotting Functions/Plotly"}},s={},a=[{value:"Example",id:"example",level:2}];function u(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.M)(),...e.components},{Wl:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Wl",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-mathematica",children:"Plot3D[f, {x,xmin,xmax},{y,ymin,ymax}]\n"})}),"\n",(0,o.jsxs)(t.p,{children:["generates a three-dimensional plot of\xa0",(0,o.jsx)(t.code,{children:"f"}),"\xa0as a function of\xa0",(0,o.jsx)(t.code,{children:"x"}),"\xa0and\xa0",(0,o.jsx)(t.code,{children:"y"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"or of a list of function"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-mathematica",children:"Plot3D[{f1, f2, ...}, {x,xmin,xmax},{y,ymin,ymax}]\n"})}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.p,{children:"Plot functions with branch cuts"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-mathematica",children:"Plot3D[Im[ArcSin[(x + I y)^4]], {x, -2, 2}, {y, -2, 2}, \n\tMesh -> None, \n\tPlotStyle -> Directive[Yellow, Opacity[0.8]], \n\tExclusionsStyle -> {None, Red}\n]\n"})}),"\n",(0,o.jsx)(n,{children:"Plot3D[Im[ArcSin[(x + I y)^4]], {x, -2, 2}, {y, -2, 2}, Mesh -> None, PlotStyle -> Directive[Yellow, Specularity[White, 20], Opacity[0.8]], ExclusionsStyle -> {None, Red}]"}),"\n",(0,o.jsx)(t.p,{children:"Other examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-mathematica",children:'NDSolve[{D[u[t, x], t] == D[u[t, x], x, x], u[0, x] == 0, u[t, 0] == Sin[t], u[t, 5] == 0}, u, {t, 0, 10}, {x, 0, 5}]; \n\nPlot3D[Evaluate[u[t, x] /. %], {t, 0, 10}, {x, 0, 5}, PlotRange -> All, ColorFunction -> "SunsetColors"]\n'})}),"\n",(0,o.jsx)(n,{children:'Module[{uuu, sol, x, t}, sol = NDSolve[{D[uu[t, x], t] == D[uu[t, x], x, x], uu[0, x] == 0, uu[t, 0] == Sin[t], uu[t, 5] == 0}, uu, {t, 0, 10}, {x, 0, 5}]; Plot3D[Evaluate[uu[t, x] /. sol], {t, 0, 10}, {x, 0, 5}, PlotRange -> All, ColorFunction -> "SunsetColors"]]'})]})}function d(e={}){const{wrapper:t}={...(0,l.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>c});var o=n(11504);const l={},r=o.createContext(l);function c(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);