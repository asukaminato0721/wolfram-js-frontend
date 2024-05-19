"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[7972],{42020:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>E,contentTitle:()=>T,default:()=>L,frontMatter:()=>S,metadata:()=>V,toc:()=>W});var t=r(17624),a=r(4552),s=r(11504),l=r(65456),o=r(53943),i=r(55592),c=r(95288),u=r(10632),d=r(27128),h=r(21148);function p(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,d.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function f(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const t=(0,i.Uz)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u._M)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=m(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[i,u]=x({queryString:r,groupId:t}),[d,p]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,h.IN)(r);return[t,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),b=(()=>{const e=i??d;return f({value:e,tabValues:a})?e:null})();(0,c.c)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),p(e)}),[u,p,a]),tabValues:a}}var j=r(93664);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:n,block:r,selectedValue:a,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.MV)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),t=i[r].value;t!==a&&(u(n),s(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.c)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...s,className:(0,l.c)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=b(e);return(0,t.jsxs)("div",{className:(0,l.c)("tabs-container",g.tabList),children:[(0,t.jsx)(w,{...n,...e}),(0,t.jsx)(v,{...n,...e})]})}function k(e){const n=(0,j.c)();return(0,t.jsx)(y,{...e,children:p(e.children)},String(n))}const I={tabItem:"tabItem_Ymn6"};function N(e){let{children:n,hidden:r,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.c)(I.tabItem,a),hidden:r,children:n})}const S={sidebar_position:1,enableComments:!0,sidebar_class_name:"green",slug:"/"},T="Quick start",V={id:"frontend/instruction",title:"Quick start",description:"Wolfram Language Notebook requires  wolframscript (see Freeware Wolfram Engine or Wolfram Kernel) installed on your PC/Mac. This application will check all paths and ask to locate a Wolfram executable if nothing is found.",source:"@site/docs/frontend/instruction.md",sourceDirName:"frontend",slug:"/",permalink:"/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1716132984e3,sidebarPosition:1,frontMatter:{sidebar_position:1,enableComments:!0,sidebar_class_name:"green",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Overview",permalink:"/frontend/Overview"}},E={},W=[{value:"Desktop application",id:"desktop-application",level:2},{value:"Server application",id:"server-application",level:2},{value:"Extra arguments",id:"extra-arguments",level:3}];function _(e){const n={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",math:"math",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"quick-start",children:"Quick start"}),"\n",(0,t.jsxs)(n.p,{children:["Wolfram Language Notebook ",(0,t.jsxs)(n.strong,{children:["requires  ",(0,t.jsx)(n.code,{children:"wolframscript"})," (see Freeware ",(0,t.jsx)(n.a,{href:"https://www.wolfram.com/engine/",children:"Wolfram Engine"})," or Wolfram Kernel)"]})," installed on your PC/Mac. This application will check all paths and ask to locate a Wolfram executable if nothing is found."]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Works only with Wolfram Engine ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsx)(n.mrow,{children:(0,t.jsx)(n.mo,{children:"\u2265"})}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\geq"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,t.jsx)(n.span,{className:"mrel",children:"\u2265"})]})})]})," ",(0,t.jsx)(n.strong,{children:"13.0.0"}),". The version ",(0,t.jsx)(n.strong,{children:"13.3.X"})," is more preferable."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(80020).c+"",width:"2228",height:"1236"})}),"\n",(0,t.jsx)("h2",{style:{"text-align":"center"},children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/frontend/Overview",children:"Overview \ud83d\ude80"})})}),"\n",(0,t.jsx)(n.p,{children:"There are two ways you can choose from"}),"\n","\n",(0,t.jsx)(n.h2,{id:"desktop-application",children:"Desktop application"}),"\n",(0,t.jsxs)(n.p,{children:["Notebook interface is shipped as an Electron application, which is cross-platform and has most benefits of a native desktop app. ",(0,t.jsx)(n.strong,{children:"This is the easiest way"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/JerryI/wolfram-js-frontend/releases",children:"Releases"})}),"\n",(0,t.jsxs)(k,{defaultValue:"Windows",values:[{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"},{label:"Mac",value:"Mac"}],children:[(0,t.jsx)(N,{value:"Windows",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/JerryI/wolfram-js-frontend/releases/download/2.3.7/WLJS.Notebook.Setup.2.3.7.exe",children:"Windows"})}),"\n"]})}),(0,t.jsx)(N,{value:"Linux",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/JerryI/wolfram-js-frontend/releases/download/2.3.7/wljs-notebook_2.3.5_amd64.deb",children:"Linux (Deb)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/JerryI/wolfram-js-frontend/releases/download/2.3.7/WLJS.Notebook-2.3.7.AppImage",children:"Linux (AppImage)"})}),"\n"]})}),(0,t.jsx)(N,{value:"Mac",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/JerryI/wolfram-js-frontend/releases/download/2.3.7/WLJS.Notebook-2.3.7-arm64.dmg",children:"M1"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/JerryI/wolfram-js-frontend/releases/download/2.3.7/WLJS.Notebook-2.3.7.dmg",children:"Intel"})}),"\n"]})})]}),"\n",(0,t.jsxs)(n.p,{children:["It comes with a launcher, that takes care about all updates, files extension association and etc. Also see ",(0,t.jsx)(n.a,{href:"https://github.com/JerryI/wolfram-js-frontend/releases",children:"releases"})," page for more portable installation bundles (no docs)."]}),"\n",(0,t.jsx)(n.h2,{id:"server-application",children:"Server application"}),"\n",(0,t.jsxs)(n.p,{children:["Since this is a web-based application, you can also run on a server. User interface is  reachable from any modern browser. Clone a master branch and run ",(0,t.jsx)(n.code,{children:"wolframscript"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/JerryI/wolfram-js-frontend\ncd wolfram-js-frontend\nwolframscript -f Scripts/start.wls\n"})}),"\n",(0,t.jsx)(n.p,{children:"It will take some time to download all core plugins, after that you can start using it by opening your browser"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"...\nOpen http://127.0.0.1:20560 in your browser\n"})}),"\n",(0,t.jsx)(n.p,{children:"To start server on a specific hostname"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"wolframscript -f Scripts/start.wls host 0.0.0.0 http 8080 ws 8081 ws2 8082 docs 8085\n"})}),"\n",(0,t.jsxs)(n.p,{children:["that will open ",(0,t.jsx)(n.strong,{children:"an HTTP server"})," on ",(0,t.jsx)(n.code,{children:"8080"})," port with ",(0,t.jsx)(n.code,{children:"8081"}),", ",(0,t.jsx)(n.code,{children:"8082"})," ",(0,t.jsx)(n.strong,{children:"used for realtime communication"})," and ",(0,t.jsx)(n.strong,{children:"docs pages"})," at ",(0,t.jsx)(n.code,{children:"8085"})]}),"\n",(0,t.jsx)(n.h3,{id:"extra-arguments",children:"Extra arguments"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"set the home folder (overrides settings)"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'wolframscript -f Scripts/start.wls folder "Demos"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"disable autolaunch of the evaluation kernel"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"wolframscript -f Scripts/start.wls noautolaunch True\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"disable autotest"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"wolframscript -f Scripts/start.wls bypasstest True\n"})})]})}function L(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(_,{...e})}):_(e)}},80020:(e,n,r)=>{r.d(n,{c:()=>t});const t=r.p+"assets/images/light-4d5e0aaa9bc5372d8b3976ccd3af469a.png"},4552:(e,n,r)=>{r.d(n,{I:()=>o,M:()=>l});var t=r(11504);const a={},s=t.createContext(a);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);