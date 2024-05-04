"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[3172],{2652:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=t(17624),a=t(4552);const o={env:["Wolfram Kernel"],update:null,needsContainer:null,origin:"https://reference.wolfram.com/language/ref/ContourPlot.html?q=ContourPlot"},r=void 0,i={id:"frontend/Reference/Plotting Functions/ContourPlot",title:"ContourPlot",description:"Generates a contour plot of\xa0$f$\xa0as a function of\xa0$x$\xa0and\xa0$y$",source:"@site/docs/frontend/Reference/Plotting Functions/ContourPlot.md",sourceDirName:"frontend/Reference/Plotting Functions",slug:"/frontend/Reference/Plotting Functions/ContourPlot",permalink:"/frontend/Reference/Plotting Functions/ContourPlot",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714824230,formattedLastUpdatedAt:"May 4, 2024",frontMatter:{env:["Wolfram Kernel"],update:null,needsContainer:null,origin:"https://reference.wolfram.com/language/ref/ContourPlot.html?q=ContourPlot"},sidebar:"tutorialSidebar",previous:{title:"BubbleChart",permalink:"/frontend/Reference/Plotting Functions/BubbleChart"},next:{title:"ContourPlot3D",permalink:"/frontend/Reference/Plotting Functions/ContourPlot3D"}},l={},c=[{value:"Options",id:"options",level:2}];function m(e){const n={a:"a",annotation:"annotation",code:"code",h2:"h2",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,a.M)(),...e.components},{Wl:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Wl",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Generates a contour plot of\xa0",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsx)(n.mrow,{children:(0,s.jsx)(n.mi,{children:"f"})}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"f"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"})]})})]}),"\xa0as a function of\xa0",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsx)(n.mrow,{children:(0,s.jsx)(n.mi,{children:"x"})}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"x"})]})})]}),"\xa0and\xa0",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsx)(n.mrow,{children:(0,s.jsx)(n.mi,{children:"y"})}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"y"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"ContourPlot[Cos[x] + Cos[y], {x, 0, 4 Pi}, {y, 0, 4 Pi}]\n"})}),"\n",(0,s.jsx)(t,{children:"ContourPlot[Cos[x] + Cos[y], {x, 0, 4 Pi}, {y, 0, 4 Pi}, ImageSize->500]"}),"\n",(0,s.jsx)(n.p,{children:"Or plot contour lines for which the equation is satisfied"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"ContourPlot[x^2 - y^2 == x^3, {x, -2, 2}, {y, -2, 2}]\n"})}),"\n",(0,s.jsx)(t,{children:"ContourPlot[x^2 - y^2 == x^3, {x, -2, 2}, {y, -2, 2}, ImageSize->500]"}),"\n",(0,s.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(n.p,{children:["Styling is limited to the current implementation of ",(0,s.jsx)(n.a,{href:"/frontend/Reference/Graphics/",children:"Graphics"})]})]})}function d(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>r});var s=t(11504);const a={},o=s.createContext(a);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);