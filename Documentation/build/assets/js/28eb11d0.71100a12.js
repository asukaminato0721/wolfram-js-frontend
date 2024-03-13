"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[9952],{7164:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=t(17624),s=t(4552);const r={},c=void 0,i={id:"frontend/Reference/Misc/Language",title:"Language",description:"LeakyModule",source:"@site/docs/frontend/Reference/Misc/Language.md",sourceDirName:"frontend/Reference/Misc",slug:"/frontend/Reference/Misc/Language",permalink:"/wljs-docs/frontend/Reference/Misc/Language",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/wljs-docs/frontend/Reference/Misc/Events"},next:{title:"Promise",permalink:"/wljs-docs/frontend/Reference/Misc/Promise"}},a={},l=[{value:"<code>LeakyModule</code>",id:"leakymodule",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"leakymodule",children:(0,o.jsx)(n.code,{children:"LeakyModule"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["a ",(0,o.jsx)(n.code,{children:"Module"})," that cause memory leaks on purpose"]})}),"\n",(0,o.jsxs)(n.p,{children:["A variation of ",(0,o.jsx)(n.code,{children:"Module"}),", which comes with its own garbage collector, that prevents symbols from being purged by WL"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:"LeakyModule[symbols_List, expr_, opts___] _\n"})}),"\n",(0,o.jsx)(n.p,{children:"The only difference compared to traditional module-function is an optional argument"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:'"Garbage" :> _List'})," a held symbol, that points to a list."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Then a user can manually purge them."})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>c});var o=t(11504);const s={},r=o.createContext(s);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);