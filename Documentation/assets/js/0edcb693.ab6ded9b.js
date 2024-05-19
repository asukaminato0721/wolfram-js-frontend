"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[6204],{96560:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var i=n(17624),t=n(4552);const s={env:["WLJS","Wolfram Kernel"],package:"wljs-graphics3d-threejs",update:!0,source:"https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine/blob/dev/src/kernel.js"},c=void 0,a={id:"frontend/Reference/Graphics3D/Cylinder",title:"Cylinder",description:"represents a cylinder with a radius 1",source:"@site/docs/frontend/Reference/Graphics3D/Cylinder.md",sourceDirName:"frontend/Reference/Graphics3D",slug:"/frontend/Reference/Graphics3D/Cylinder",permalink:"/frontend/Reference/Graphics3D/Cylinder",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:171482423e4,frontMatter:{env:["WLJS","Wolfram Kernel"],package:"wljs-graphics3d-threejs",update:!0,source:"https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine/blob/dev/src/kernel.js"},sidebar:"tutorialSidebar",previous:{title:"Cuboid",permalink:"/frontend/Reference/Graphics3D/Cuboid"},next:{title:"Emissive",permalink:"/frontend/Reference/Graphics3D/Emissive"}},d={},o=[{value:"Parameters",id:"parameters",level:2},{value:"<code>RGBColor</code>",id:"rgbcolor",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>Volume</code>",id:"volume",level:3},{value:"<code>RegionCentroid</code>",id:"regioncentroid",level:3},{value:"Dynamic updates",id:"dynamic-updates",level:2}];function l(e){const r={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.M)(),...e.components},{Wl:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Wl",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-mathematica",children:"Cylinder[{i_List, f_List}]\n"})}),"\n",(0,i.jsx)(r.p,{children:"represents a cylinder with a radius 1"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-mathematica",children:"Cylinder[{i_List, f_List}, r_]\n"})}),"\n",(0,i.jsxs)(r.p,{children:["represents a cylinder with a radius ",(0,i.jsx)(r.code,{children:"r"})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-mathematica",children:"Graphics3D[ Table[{Hue[RandomReal[], 1., 0.5], Cylinder[RandomReal[10, {2, 3}]]}, {20}]]\n"})}),"\n",(0,i.jsx)(n,{children:"Graphics3D[ Table[{Hue[RandomReal[], 1., 0.5], Cylinder[RandomReal[10, {2, 3}]]}, {20}]]"}),"\n",(0,i.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(r.h3,{id:"rgbcolor",children:(0,i.jsx)(r.code,{children:"RGBColor"})}),"\n",(0,i.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(r.p,{children:"Volume and centroid"}),"\n",(0,i.jsx)(r.h3,{id:"volume",children:(0,i.jsx)(r.code,{children:"Volume"})}),"\n",(0,i.jsx)(r.p,{children:"accepts symbolic values as well"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-mathematica",children:"Volume[Cylinder[{{Subscript[x, 1], Subscript[y, 1], Subscript[z, 1]}, {Subscript[x, 2], Subscript[y, 2], Subscript[z, 2]}}, r]]\n"})}),"\n",(0,i.jsx)(r.h3,{id:"regioncentroid",children:(0,i.jsx)(r.code,{children:"RegionCentroid"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-mathematica",children:"RegionCentroid[ Cylinder[{{Subscript[x, 1], Subscript[y, 1], Subscript[z, 1]}, {Subscript[x, 2], Subscript[y, 2], Subscript[z, 2]}}, r]]\n"})}),"\n",(0,i.jsx)(r.h2,{id:"dynamic-updates",children:"Dynamic updates"}),"\n",(0,i.jsx)(r.p,{children:"It does support dynamics for coordinates. Radius changes are not implemented!"})]})}function p(e={}){const{wrapper:r}={...(0,t.M)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},4552:(e,r,n)=>{n.d(r,{I:()=>a,M:()=>c});var i=n(11504);const t={},s=i.createContext(t);function c(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);