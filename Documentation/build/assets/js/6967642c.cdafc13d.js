"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[7700],{89944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(17624),s=n(4552);const i={sidebar_position:1},a="How it works",o={id:"interpreter/Extras/implementation",title:"How it works",description:"The idea",source:"@site/docs/interpreter/Extras/implementation.md",sourceDirName:"interpreter/Extras",slug:"/interpreter/Extras/implementation",permalink:"/wljs-docs/interpreter/Extras/implementation",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1708970154,formattedLastUpdatedAt:"Feb 26, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1}},c={},l=[{value:"The idea",id:"the-idea",level:2},{value:"Internal representaion",id:"internal-representaion",level:3},{value:"Parser",id:"parser",level:3},{value:"Generalization",id:"generalization",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"how-it-works",children:"How it works"}),"\n",(0,r.jsx)(t.h2,{id:"the-idea",children:"The idea"}),"\n",(0,r.jsxs)(t.p,{children:["Originally it was done as a sort of\xa0",(0,r.jsx)(t.a,{href:"https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine",children:"utility"}),"\xa0to parse Graphics3D objects and recreate them as a set of commands of ThreeJS - a JS graphics library. Have a look at this example"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-mathematica",children:"SphericalPlot3D[1, {t, 0, Pi}, {p, 0, 2 Pi}] // InputForm\n"})}),"\n",(0,r.jsx)(t.p,{children:"it produces the following output"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-mathematica",children:"Graphics3D[{\n\tGraphicsComplex[{{1,0,0}, ...}, {\n...\n\tPolygon[{{2, 1, 11, 12}, ...}}]\n}]\n"})}),"\n",(0,r.jsxs)(t.p,{children:["where, in principle it tells us that one should plot polygons using the set of 4 vertices indexed as ",(0,r.jsx)(t.code,{children:"2,1,11,12"})," with absolute coordinates stored in an array located in the first argument of ",(0,r.jsx)(t.code,{children:"GraphicsComplex"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"internal-representaion",children:"Internal representaion"}),"\n",(0,r.jsxs)(t.p,{children:["A good hint how the internal data structure looks like can be seen in ",(0,r.jsx)(t.a,{href:"https://mathematica.stackexchange.com/questions/104660/what-algorithm-do-the-compress-and-uncompress-functions-use",children:"Compress"}),". See also ",(0,r.jsx)(t.a,{href:"https://github.com/JerryI/uncompress",children:"mma-uncompress"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"parser",children:"Parser"}),"\n",(0,r.jsxs)(t.p,{children:["Taking advantage of the standart library packed with Wolfram Kernel we can use directly a ",(0,r.jsx)(t.code,{children:"ExportString"})," function"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-mathematica",children:'ExportString[%, "ExpressionJSON"]\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'[\n\t"Graphics3D",\n\t[\n\t\t"List",\n\t\t[\n\t\t\t"List",\n\t\t\t[\n\t\t\t\t"GraphicsComplex",\n\t\t\t\t[\n\t\t\t\t\t"List",\n\t\t\t\t\t[\n\t\t\t\t\t\t"List",\n\t\t\t\t\t\t\t0.0,\n\t\t\t\t\t\t\t0.0,\n\t\t\t\t\t\t\t1.0\n\t\t\t\t\t\t]\n,\n'})}),"\n",(0,r.jsxs)(t.p,{children:["In principle it can convert an arbitary WL expression without loosing any data. Which is acually much faster, than ",(0,r.jsx)(t.code,{children:"ToString"})," method"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-mathematica",children:'test = SphericalPlot3D[Sin[t] Cos[p]^6, {t, 0, Pi}, {p, 0, 2 Pi}][[1]];\n\n((s = ExportString[test, "ExpressionJSON"]) // RepeatedTiming)[[1]]\n((s = ToString[test]) // RepeatedTiming)[[1]]\n\n> 0.03471\n> 0.16478\n'})}),"\n",(0,r.jsxs)(t.p,{children:["that gives us a clue, where the internal Mathematica's expressions representation might be a sort of ",(0,r.jsx)(t.code,{children:"ExpressionJSON"})," like structure"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-mathematica",children:"(a+b)[[0]] === Plus\n"})}),"\n",(0,r.jsx)(t.p,{children:"i.e., the structure is following"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"this.name = expr[0]\nthis.args = expr.slice(1, expr.length)\n"})}),"\n",(0,r.jsx)(t.p,{children:"Then it looks relatively easy to use it for calling a defined function"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"var core = {};\nvar interpretate = (d, env) => {\n\tif (typeof d === 'string')\n\t\treturn d.slice(1, -1);\n\t\t\n\tif (typeof d === 'number') \n\t\treturn d;\n\n\tthis.name = d[0];\n\tthis.args = d.slice(1, d.length);\n\treturn core[this.name](this.args, env);\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"threfore one can define a minimal set of functions to serve WL expressions like lists, colors, and etc..."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"core.List = (args, env) => {\n\tconst copy = {..env};\n\tconst list = [];\n\tfor (let i = 0, len = args.length; i < args.length; i++) {\n\t\tlist.push(interpretate(args[i], copy));\n\t}\n\treturn list;\n};\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"core.RGBColor = (args, env) => {\n\tconst r = interpretate(args[0], env);\n\tconst g = interpretate(args[1], env);\n\tconst b = interpretate(args[2], env);\n\tenv.color = new three.Color(r, g, b);\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The second argument ",(0,r.jsx)(t.code,{children:"env"})," is a mutable object, which stores information to be shared with other WL expressions, for example color"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-mathematica",children:"{Blue, {Red, Sphere[] (*RED*)}, Cuboid[] (*BLUE*)}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Here you can see, that ",(0,r.jsx)(t.code,{children:"env"})," can be localized (a deep copy) inside ",(0,r.jsx)(t.code,{children:"List"})," expression."]}),"\n",(0,r.jsx)(t.h2,{id:"generalization",children:"Generalization"}),"\n",(0,r.jsxs)(t.p,{children:["For me as a maintener of this project @JerryI, the idea of bridging JS and Wolfram Language was very insiprational. Especcially, when I discovered how flexible and easy was the writting static and dynamic web-pages using Wolfram Language - ",(0,r.jsx)(t.a,{href:"https://github.com/JerryI/tinyweb-mathematica",children:"TinyWEB & WSP"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The reason\n",(0,r.jsx)(t.em,{children:"somewhere on HTML page"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<input type="text" id="form" value="Hello!">\n<script>\n\tcore.UpdateText = (args, env) => {\n\t\tconst i = interpretate(args[0], env);\n\t\tdocument.getElementById(\'form\').value = i;\n\t}\n<\/script>\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"somewhere in WL"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-mathematica",children:"WebSocketBroadcast[server, UpdateText[RandomWord[]]]\n"})}),"\n",(0,r.jsx)(t.p,{children:"using websockets to link Wolfram Kernel and a page in realtime the intergration looks seamless. In principle, the API and all UI functions are implemented in a such way on the present version of Wolfram JS Frontend."}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"In the present version the interpreter looks a bit more complex, however the ideas are the same."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>a});var r=n(11504);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);