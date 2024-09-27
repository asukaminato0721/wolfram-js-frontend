"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[5936],{38152:(e,n,A)=>{A.r(n),A.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=A(17624),i=A(4552);const o={env:["Wolfram Kernel"],origin:"https://github.com/JerryI/wljs-inputs",context:"Notebook`Kernel`Inputs`",package:"wljs-inputs",update:!0,source:"https://github.com/JerryI/wljs-inputs/blob/dev/src/Kernel.wl"},r=void 0,s={id:"frontend/Reference/GUI/HTMLView",title:"HTMLView",description:"a representation of an HTML element in the notebook. It is used for rendering HTML in-place, where this expression is located and also is used for dynamic indication.",source:"@site/docs/frontend/Reference/GUI/HTMLView.md",sourceDirName:"frontend/Reference/GUI",slug:"/frontend/Reference/GUI/HTMLView",permalink:"/frontend/Reference/GUI/HTMLView",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1727447848e3,frontMatter:{env:["Wolfram Kernel"],origin:"https://github.com/JerryI/wljs-inputs",context:"Notebook`Kernel`Inputs`",package:"wljs-inputs",update:!0,source:"https://github.com/JerryI/wljs-inputs/blob/dev/src/Kernel.wl"},sidebar:"tutorialSidebar",previous:{title:"EditorView",permalink:"/frontend/Reference/GUI/EditorView"},next:{title:"InputButton",permalink:"/frontend/Reference/GUI/InputButton"}},l={},c=[{value:"Options",id:"options",level:2},{value:"<code>Prolog</code>",id:"prolog",level:3},{value:"<code>Epilog</code>",id:"epilog",level:3},{value:"Post-template engine",id:"post-template-engine",level:2},{value:"Dynamic updates",id:"dynamic-updates",level:2},{value:"Supported output forms",id:"supported-output-forms",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:"HTMLView[string_String | List[strings__String] | _Offload, opts___]\n"})}),"\n",(0,t.jsx)(n.p,{children:"a representation of an HTML element in the notebook. It is used for rendering HTML in-place, where this expression is located and also is used for dynamic indication."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:'HTMLView["<span style=\\"color:red\\">Hello World</span>"]\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:A(59008).c+"",width:"561",height:"63"})}),"\n",(0,t.jsxs)(n.p,{children:["This is a core function behind most input elements, such as ",(0,t.jsx)(n.a,{href:"/frontend/Reference/GUI/InputButton",children:"InputButton"}),", ",(0,t.jsx)(n.a,{href:"/frontend/Reference/GUI/InputText",children:"InputText"}),", ",(0,t.jsx)(n.a,{href:"/frontend/Reference/GUI/TextView",children:"TextView"})," and etc."]}),"\n",(0,t.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.h3,{id:"prolog",children:(0,t.jsx)(n.code,{children:"Prolog"})}),"\n",(0,t.jsxs)(n.p,{children:["A function to be executed on the frontend before embedding HTML into DOM. You probably have to define it by yourself (see ",(0,t.jsx)(n.a,{href:"/frontend/Advanced/Frontend%20interpretation/WLJS%20Functions",children:"WLJS Functions"}),"). It exposes in ",(0,t.jsx)(n.code,{children:"env"})," following fields"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"env.htmlString //mutable HTML expression as string\n"})}),"\n",(0,t.jsxs)(n.p,{children:["There is a built-in feature for modifying the string - see below ",(0,t.jsx)(n.a,{href:"#Post-template%20engine",children:"Post-template engine"})]}),"\n",(0,t.jsx)(n.h3,{id:"epilog",children:(0,t.jsx)(n.code,{children:"Epilog"})}),"\n",(0,t.jsx)(n.p,{children:"A function to be executed on the frontend after embedding HTML into DOM. The exposed fields are"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"env.element //access to DOM element created\n"})}),"\n",(0,t.jsx)(n.h2,{id:"post-template-engine",children:"Post-template engine"}),"\n",(0,t.jsxs)(n.p,{children:["There is built-in tool for post-processing HTML elements before embedding them into DOM. It can be included to the pipeline using ",(0,t.jsx)(n.code,{children:"Prolog"})," option"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:"HTMLView`TemplateProcessor[object_Association]\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:["It has ",(0,t.jsx)(n.code,{children:"HoldFirst"})," attribute and ",(0,t.jsx)(n.code,{children:"object"})," will be evaluated on the frontend"]}),"\nThis text processor replaces all string like"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"#name\n"})}),"\n",(0,t.jsxs)(n.p,{children:["With a corresponding field value from ",(0,t.jsx)(n.code,{children:'object["name"]'}),"."]}),"\n",(0,t.jsx)(n.p,{children:"It comes handy to create unique ID's in runtime, before a widget is rendered on a page. For example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:'HTMLView["<div>Unique Id #instanceId</div>", Prolog->HTMLView`TemplateProcessor[<|"instanceId" -> CreateUUID[]|>]]\n'})}),"\n",(0,t.jsx)(n.p,{children:"It will generate a new UID for each instance even if you copy and paste one."}),"\n",(0,t.jsx)(n.h2,{id:"dynamic-updates",children:"Dynamic updates"}),"\n",(0,t.jsxs)(n.p,{children:["It fully supports dynamic updates. Use ",(0,t.jsx)(n.a,{href:"/frontend/Reference/Interpreter/Offload",children:"Offload"}),". For example"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:'word = "";\nHTMLView[word]\n'})}),"\n",(0,t.jsx)(n.p,{children:"and then"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-mathematica",children:'word = "<h1>"<>RandomWord[]<>"</h1>";\n'})}),"\n",(0,t.jsx)(n.h2,{id:"supported-output-forms",children:"Supported output forms"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/StandardForm",children:"StandardForm"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/frontend/Reference/Decorations/WLXForm",children:"WLXForm"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},59008:(e,n,A)=>{A.d(n,{c:()=>t});const t="data:image/png;base64,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"},4552:(e,n,A)=>{A.d(n,{I:()=>s,M:()=>r});var t=A(11504);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);