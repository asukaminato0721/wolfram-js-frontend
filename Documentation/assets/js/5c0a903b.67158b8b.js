"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[7968],{3324:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>a});var t=o(17624),i=o(4552);const r={env:["Wolfram Kernel"],needsContainer:!1,update:!1,origin:"https://reference.wolfram.com/language/ref/DensityPlot.html"},l=void 0,s={id:"frontend/Reference/Plotting Functions/DensityPlot",title:"DensityPlot",description:"makes a density plot of f as a function of x and y",source:"@site/docs/frontend/Reference/Plotting Functions/DensityPlot.md",sourceDirName:"frontend/Reference/Plotting Functions",slug:"/frontend/Reference/Plotting Functions/DensityPlot",permalink:"/frontend/Reference/Plotting Functions/DensityPlot",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:171482423e4,frontMatter:{env:["Wolfram Kernel"],needsContainer:!1,update:!1,origin:"https://reference.wolfram.com/language/ref/DensityPlot.html"},sidebar:"tutorialSidebar",previous:{title:"DateListPlot",permalink:"/frontend/Reference/Plotting Functions/DateListPlot"},next:{title:"ListContourPlot",permalink:"/frontend/Reference/Plotting Functions/ListContourPlot"}},c={},a=[{value:"Options",id:"options",level:2},{value:"<code>ColorFunction</code>",id:"colorfunction",level:3}];function d(n){const e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.M)(),...n.components},{Wl:o}=e;return o||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Wl",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-mathematica",children:"DensityPlot[f, {x, xmin, xmax}, {y, ymin, ymax}]\n"})}),"\n",(0,t.jsxs)(e.p,{children:["makes a density plot of ",(0,t.jsx)(e.code,{children:"f"})," as a function of ",(0,t.jsx)(e.code,{children:"x"})," and ",(0,t.jsx)(e.code,{children:"y"})]}),"\n",(0,t.jsx)(e.admonition,{type:"warning",children:(0,t.jsx)(e.p,{children:"Only a flat-shading is supported for now"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-mathematica",children:"DensityPlot[x y, {x,0,1}, {y,0,1}]\n"})}),"\n",(0,t.jsx)(o,{children:"DensityPlot[x y, {x,-1,1}, {y,-1,1}]"}),"\n",(0,t.jsx)(e.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(e.h3,{id:"colorfunction",children:(0,t.jsx)(e.code,{children:"ColorFunction"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-mathematica",children:"CoolColor[ z_ ] := RGBColor[z, 1 - z, 1];\nDensityPlot[Sin[x y], {x, -1, 1}, {y, -1, 1}, \n ColorFunction -> CoolColor]\n"})}),"\n",(0,t.jsx)(o,{children:"CoolColor[ z_ ] := RGBColor[z, 1 - z, 1];\nDensityPlot[Sin[x y], {x, -1, 1}, {y, -1, 1}, \n ColorFunction -> CoolColor]"}),"\n",(0,t.jsx)(e.p,{children:"or using predefined"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-mathematica",children:' DensityPlot[Sin[x] Sin[y], {x, -2, 2}, {y, -2, 2}, \n ColorFunction -> ColorData["SolarColors"]]\n'})}),"\n",(0,t.jsx)(o,{children:'DensityPlot[Sin[x] Sin[y], {x, -2, 2}, {y, -2, 2}, \n ColorFunction -> ColorData["SolarColors"]]'})]})}function u(n={}){const{wrapper:e}={...(0,i.M)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},4552:(n,e,o)=>{o.d(e,{I:()=>s,M:()=>l});var t=o(11504);const i={},r=t.createContext(i);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);