(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[214],{9452:(e,t,n)=>{"use strict";n.d(t,{c:()=>j});var s=n(11504),a=n(65456),r=n(3180),o=n(11432),i=n(10867),l=n(33456),c=n(55592),d=n(13376);function m(e){const{pathname:t}=(0,c.IT)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.Sc)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var g=n(17624);function h(e){let{sidebar:t}=e;const n=m(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,a.c)(u.sidebar,"thin-scrollbar"),"aria-label":(0,l.G)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,a.c)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,a.c)(u.sidebarItemList,"clean-list"),children:n.map((e=>(0,g.jsx)("li",{className:u.sidebarItem,children:(0,g.jsx)(i.c,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=n(45168);function x(e){let{sidebar:t}=e;const n=m(t.items);return(0,g.jsx)("ul",{className:"menu__list",children:n.map((e=>(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(i.c,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function f(e){return(0,g.jsx)(p.Mx,{component:x,props:e})}function b(e){let{sidebar:t}=e;const n=(0,o.U)();return t?.items.length?"mobile"===n?(0,g.jsx)(f,{sidebar:t}):(0,g.jsx)(h,{sidebar:t}):null}function j(e){const{sidebar:t,toc:n,children:s,...o}=e,i=t&&t.items.length>0;return(0,g.jsx)(r.c,{...o,children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(b,{sidebar:t}),(0,g.jsx)("main",{className:(0,a.c)("col",{"col--7":i,"col--9 col--offset-1":!i}),children:s}),n&&(0,g.jsx)("div",{className:"col col--2",children:n})]})})})}},16960:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});n(11504);var s=n(65456),a=n(28264),r=n(68900),o=n(45864),i=n(9452),l=n(22687),c=n(48712),d=n(60992),m=n(56952),u=n(35388),g=n(17624);function h(e){const t=(0,u.Q)(e);return(0,g.jsx)(m.c,{children:(0,g.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function p(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,a.c)(),{blogDescription:s,blogTitle:o,permalink:i}=t,l="/"===i?n:o;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.U7,{title:l,description:s}),(0,g.jsx)(c.c,{tag:"blog_posts_list"})]})}function x(e){const{metadata:t,items:n,sidebar:s}=e;return(0,g.jsxs)(i.c,{sidebar:s,children:[(0,g.jsx)(d.c,{items:n}),(0,g.jsx)(l.c,{metadata:t})]})}function f(e){return(0,g.jsxs)(r.cr,{className:(0,s.c)(o.W.wrapper.blogPages,o.W.page.blogListPage),children:[(0,g.jsx)(p,{...e}),(0,g.jsx)(h,{...e}),(0,g.jsx)(x,{...e})]})}},22687:(e,t,n)=>{"use strict";n.d(t,{c:()=>o});n(11504);var s=n(33456),a=n(70308),r=n(17624);function o(e){const{metadata:t}=e,{previousPage:n,nextPage:o}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.G)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(a.c,{permalink:n,title:(0,r.jsx)(s.c,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,r.jsx)(a.c,{permalink:o,title:(0,r.jsx)(s.c,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},60992:(e,t,n)=>{"use strict";n.d(t,{c:()=>o});n(11504);var s=n(83152),a=n(20060),r=n(17624);function o(e){let{items:t,component:n=a.c}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(s.E,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},83152:(e,t,n)=>{"use strict";n.d(t,{E:()=>i,g:()=>l});var s=n(11504),a=n(91100),r=n(17624);const o=s.createContext(null);function i(e){let{children:t,content:n,isBlogPostPage:a=!1}=e;const i=function(e){let{content:t,isBlogPostPage:n}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:a});return(0,r.jsx)(o.Provider,{value:i,children:t})}function l(){const e=(0,s.useContext)(o);if(null===e)throw new a.AH("BlogPostProvider");return e}},35388:(e,t,n)=>{"use strict";n.d(t,{Q:()=>d,C:()=>m});var s=n(70964),a=n(28264),r=n(85308);var o=n(83152);const i=e=>new Date(e).toISOString();function l(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:g({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(e){const{siteConfig:t}=(0,a.c)(),{withBaseUrl:n}=(0,s.E)(),{metadata:{blogDescription:r,blogTitle:o,permalink:d}}=e,m=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":m,mainEntityOfPage:m,headline:o,description:r,blogPost:e.items.map((e=>function(e,t,n){const{assets:s,frontMatter:a,metadata:r}=e,{date:o,title:d,description:m,lastUpdatedAt:u}=r,g=s.image??a.image,h=a.keywords??[],p=`${t.url}${r.permalink}`,x=u?i(u):void 0;return{"@type":"BlogPosting","@id":p,mainEntityOfPage:p,url:p,headline:d,name:d,description:m,datePublished:o,...x?{dateModified:x}:{},...l(r.authors),...c(g,n,d),...h?{keywords:h}:{}}}(e.content,t,n)))}}function m(){const e=function(){const e=(0,r.c)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,o.g)(),{siteConfig:d}=(0,a.c)(),{withBaseUrl:m}=(0,s.E)(),{date:u,title:g,description:h,frontMatter:p,lastUpdatedAt:x}=n,f=t.image??p.image,b=p.keywords??[],j=x?i(x):void 0,v=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:g,name:g,description:h,datePublished:u,...j?{dateModified:j}:{},...l(n.authors),...c(f,m,g),...b?{keywords:b}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function g(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},95944:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});var s=n(11504),a=n(28264);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,a.c)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=n.select(t),r=n.pluralForms.indexOf(a);return s[Math.min(r,s.length-1)]}(n,t,e)}}},20060:(e,t,n)=>{"use strict";n.d(t,{c:()=>U});var s=n(11504),a=n(65456),r=n(83152),o=n(70964),i=n(17624);function l(e){let{children:t,className:n}=e;const{frontMatter:s,assets:a}=(0,r.g)(),{withBaseUrl:l}=(0,o.E)(),c=a.image??s.image;return(0,i.jsxs)("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:[c&&(0,i.jsx)("meta",{itemProp:"image",content:l(c,{absolute:!0})}),t]})}var c=n(10867);const d={title:"title_xvU1"};function m(e){let{className:t}=e;const{metadata:n,isBlogPostPage:s}=(0,r.g)(),{permalink:o,title:l}=n,m=s?"h2":"h3";return(0,i.jsx)(m,{className:(0,a.c)(d.title,t),itemProp:"headline",children:s?l:(0,i.jsx)(c.c,{itemProp:"url",to:o,children:l})})}var u=n(33456),g=n(95944);const h={container:"container_iJTo"};function p(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,g.A)();return t=>{const n=Math.ceil(t);return e(n,(0,u.G)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,i.jsx)(i.Fragment,{children:n(t)})}function x(e){let{date:t,formattedDate:n}=e;return(0,i.jsx)("time",{dateTime:t,itemProp:"datePublished",children:n})}function f(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function b(e){let{className:t}=e;const{metadata:n}=(0,r.g)(),{date:s,formattedDate:o,readingTime:l}=n;return(0,i.jsxs)("div",{className:(0,a.c)(h.container,"margin-vert--md",t),children:[(0,i.jsx)(x,{date:s,formattedDate:o}),void 0!==l&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{}),(0,i.jsx)(p,{readingTime:l})]})]})}function j(e){return e.href?(0,i.jsx)(c.c,{...e}):(0,i.jsx)(i.Fragment,{children:e.children})}function v(e){let{author:t,className:n}=e;const{name:s,title:r,url:o,imageURL:l,email:c}=t,d=o||c&&`mailto:${c}`||void 0;return(0,i.jsxs)("div",{className:(0,a.c)("avatar margin-bottom--sm",n),children:[l&&(0,i.jsx)(j,{href:d,className:"avatar__photo-link",children:(0,i.jsx)("img",{className:"avatar__photo",src:l,alt:s})}),s&&(0,i.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,i.jsx)("div",{className:"avatar__name",children:(0,i.jsx)(j,{href:d,itemProp:"url",children:(0,i.jsx)("span",{itemProp:"name",children:s})})}),r&&(0,i.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:r})]})]})}const P={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function w(e){let{className:t}=e;const{metadata:{authors:n},assets:s}=(0,r.g)();if(0===n.length)return null;const o=n.every((e=>{let{name:t}=e;return!t}));return(0,i.jsx)("div",{className:(0,a.c)("margin-top--md margin-bottom--sm",o?P.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,i.jsx)("div",{className:(0,a.c)(!o&&"col col--6",o?P.imageOnlyAuthorCol:P.authorCol),children:(0,i.jsx)(v,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})},t)))})}function y(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(m,{}),(0,i.jsx)(b,{}),(0,i.jsx)(w,{})]})}var N=n(15684),k=n(62824);function _(e){let{children:t,className:n}=e;const{isBlogPostPage:s}=(0,r.g)();return(0,i.jsx)("div",{id:s?N.blogPostContainerID:void 0,className:(0,a.c)("markdown",n),itemProp:"articleBody",children:(0,i.jsx)(k.c,{children:t})})}var C=n(47790),I=n(1096);function M(){return(0,i.jsx)("b",{children:(0,i.jsx)(u.c,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function B(e){const{blogPostTitle:t,...n}=e;return(0,i.jsx)(c.c,{"aria-label":(0,u.G)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,i.jsx)(M,{})})}const E={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};function T(){const{metadata:e,isBlogPostPage:t}=(0,r.g)(),{tags:n,title:s,editUrl:o,hasTruncateMarker:l}=e,c=!t&&l,d=n.length>0;return d||c||o?(0,i.jsxs)("footer",{className:(0,a.c)("row docusaurus-mt-lg",t&&E.blogPostFooterDetailsFull),children:[d&&(0,i.jsx)("div",{className:(0,a.c)("col",{"col--9":c}),children:(0,i.jsx)(I.c,{tags:n})}),t&&o&&(0,i.jsx)("div",{className:"col margin-top--sm",children:(0,i.jsx)(C.c,{editUrl:o})}),c&&(0,i.jsx)("div",{className:(0,a.c)("col text--right",{"col--3":d}),children:(0,i.jsx)(B,{blogPostTitle:s,to:e.permalink})})]}):null}function A({id:e,host:t,repo:a,repoId:r,category:o,categoryId:l,mapping:c,term:d,strict:m,reactionsEnabled:u,emitMetadata:g,inputPosition:h,theme:p,lang:x,loading:f}){const[b,j]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{b||(n.e(908).then(n.bind(n,90908)),j(!0))}),[]),b?(0,i.jsx)("giscus-widget",{id:e,host:t,repo:a,repoid:r,category:o,categoryid:l,mapping:c,term:d,strict:m,reactionsenabled:u,emitmetadata:g,inputposition:h,theme:p,lang:x,loading:f}):null}var L=n(66528);function O(){const{colorMode:e}=(0,L.U)();return(0,i.jsx)(A,{repo:"JerryI/wljs-docs",repoId:"R_kgDOJt0OyA",category:"General",categoryId:"DIC_kwDOJt0OyM4CX4n6",mapping:"url",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",loading:"lazy",crossorigin:"anonymous",async:!0})}function U(e){let{children:t,className:n}=e;const{metadata:s,isBlogPostPage:o}=(0,r.g)(),{frontMatter:c,slug:d,title:m}=s,{enableComments:u}=c,g=function(){const{isBlogPostPage:e}=(0,r.g)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(l,{className:(0,a.c)(g,n),children:[(0,i.jsx)(y,{}),(0,i.jsx)(_,{children:t}),(0,i.jsx)(T,{}),u&&o&&(0,i.jsx)(O,{})]})}},37872:(e,t,n)=>{"use strict";n.d(t,{c:()=>c});var s=n(11504),a=n(28176),r=n(93391),o=n(28264),i=n(66528),l=(n(98684),n(52964),n(93664),n(17624));const c={...a.c,Wl:function(e){let{children:t,data:n}=e;const a=(0,s.useRef)(null),{siteConfig:i}=(0,o.c)(),{baseUrl:c,url:d}=i;return(0,s.useEffect)((()=>{console.warn("Loading component...");const e=a.current;let n=document.createElement("div");n.classList.add("frontend-object"),n.setAttribute("data-object","loading..."),e.appendChild(n);let s={global:{call:Date.now()+Math.floor(100*Math.random())},element:n};console.warn("decrypting...");try{console.log(d),c.length<3?(console.log(d+"/expressions/"+(0,r.md5)(t.trim())+".json"),fetch(d+"/expressions/"+(0,r.md5)(t.trim())+".json").then((e=>{e.json().then((e=>{interpretate(["FrontEndVirtual",e],s)}))}))):(console.log(c+"/expressions/"+(0,r.md5)(t.trim())+".json"),fetch(c+"/expressions/"+(0,r.md5)(t.trim())+".json").then((e=>{e.json().then((e=>{interpretate(["FrontEndVirtual",e],s)}))})))}catch(o){console.warn("Error!"),console.warn(o)}}),[]),(0,l.jsx)("main",{id:"frontend-editor",className:"main-container styles-container-editor",children:(0,l.jsx)("div",{id:"frontend-editor-content",className:"group-container",children:(0,l.jsx)("div",{ref:a})})})},CodeMirror:function(e){let{children:t,data:n}=e;const a=(0,s.useRef)(null),{colorMode:r,setColorMode:o}=(0,i.U)();return(0,s.useEffect)((()=>{const e=a.current;console.log("Create Codemirror"),window.CMInitialized=!0,window.CMInitialized&&(window.EditorExtensions.push((()=>window.EditorState.readOnly.of(!0))),window.EditorExtensionsMinimal.push((()=>window.EditorState.readOnly.of(!0))));const n=new window.SupportedCells.codemirror.view({element:e},t);return()=>{n&&console.log("Remove Codemirror")}}),[]),(0,l.jsx)("div",{style:{filter:"dark"==r?"invert(1) contrast(0.8) hue-rotate(-185deg)":"none"},className:"language-mathematica codeBlockContainer_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Container-styles-module theme-code-block",children:(0,l.jsx)("div",{className:"codeBlockContent_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module",children:(0,l.jsx)("pre",{tabIndex:"0",className:"prism-code language-mathematica codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar",style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)"},children:(0,l.jsx)("code",{ref:a,className:"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"})})})})}}},47944:()=>{},73223:()=>{}}]);