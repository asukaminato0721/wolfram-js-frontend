"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[5680],{53128:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>i});var r=t(17624),o=t(4552);const c={env:["WLJS"],internal:!0,context:"Notebook`Editor`FrontendObject`",package:"wljs-editor",source:"https://github.com/JerryI/wljs-editor/blob/dev/src/FrontendObject.wl"},s=void 0,d={id:"frontend/Reference/Frontend Objects/FrontEndExecutable",title:"FrontEndExecutable",description:"A static reference to a frontend object (see CreateFrontEndObject)  like FrontEndRef.",source:"@site/docs/frontend/Reference/Frontend Objects/FrontEndExecutable.md",sourceDirName:"frontend/Reference/Frontend Objects",slug:"/frontend/Reference/Frontend Objects/FrontEndExecutable",permalink:"/frontend/Reference/Frontend Objects/FrontEndExecutable",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1711835414e3,frontMatter:{env:["WLJS"],internal:!0,context:"Notebook`Editor`FrontendObject`",package:"wljs-editor",source:"https://github.com/JerryI/wljs-editor/blob/dev/src/FrontendObject.wl"},sidebar:"tutorialSidebar",previous:{title:"CreateFrontEndObject",permalink:"/frontend/Reference/Frontend Objects/CreateFrontEndObject"},next:{title:"FrontEndRef",permalink:"/frontend/Reference/Frontend Objects/FrontEndRef"}},a={},i=[{value:"Output forms",id:"output-forms",level:2},{value:"Application",id:"application",level:2},{value:"Custom WLJS function",id:"custom-wljs-function",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"FrontEndExecutable[uid_String]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A static reference to a frontend object (see ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Frontend%20Objects/CreateFrontEndObject",children:"CreateFrontEndObject"}),")  like ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Frontend%20Objects/FrontEndRef",children:"FrontEndRef"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"output-forms",children:"Output forms"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/frontend/Reference/Decorations/StandardForm",children:"StandardForm"})," used in the output Wolfram Language cells is defined as ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Decorations/ViewBox",children:"ViewBox"})," decoration with a corresponding ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Frontend%20Objects/FrontEndRef",children:"FrontEndRef"})," as an input expression. This decoration is used as a sort of an empty widget to which any nested expression can output (",(0,r.jsx)(n.a,{href:"/frontend/Reference/Graphics/",children:"Graphics"}),", ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Plotting%20Functions/Plot",children:"Plot"})," and etc made using this method)"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/frontend/Reference/Decorations/WLXForm",children:"WLXForm"})," produces a widget-like placeholder, which can be populated with a content. This is how ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Plotting%20Functions/Plot",children:"Plot"})," and other graphics function can output to a ",(0,r.jsx)(n.a,{href:"/frontend/Cell%20types/Slides",children:"slides"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"application",children:"Application"}),"\n",(0,r.jsx)(n.h3,{id:"custom-wljs-function",children:"Custom WLJS function"}),"\n",(0,r.jsx)(n.p,{children:"Use for custom defined WLJS functions i.e."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'.js\ncore.MyCustomStuff = async (args, env) => {\n\tenv.element.innerText = "Hi dude!";\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"and then in the next cell"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"CreateFrontEndObject[MyCustomStuff[]]\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"TagSetDelayed"})," on ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Decorations/MakeBoxes",children:"MakeBoxes"})," to apply it automatically, i.e."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"MyCustomStuff /: MakeBoxes[m_MyCustomStuff, StandardForm] := With[{\n\to = CreateFrontEndObject[m]\n},\n\tMakeBoxes[m, StandardForm]\n]\n"})}),(0,r.jsxs)(n.p,{children:["then you don't need to manually create a frontend object anymore. Or even better - ",(0,r.jsx)(n.strong,{children:"if your expression is not too big"})," one can bypass frontend objects at all"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"MyCustomStuff /: MakeBoxes[m_MyCustomStuff, StandardForm] := ViewBox[m,m]\n"})})]})]})}function f(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>d,M:()=>s});var r=t(11504);const o={},c=r.createContext(o);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);