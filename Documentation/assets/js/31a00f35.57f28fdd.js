"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[5404],{17732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var i=t(17624),r=t(4552);const a={draft:!1,sidebar_position:1},s="Event system",d={id:"frontend/Advanced/Events system/event-generators",title:"Event system",description:"As a short summary - where you can use event-handlers",source:"@site/docs/frontend/Advanced/Events system/event-generators.md",sourceDirName:"frontend/Advanced/Events system",slug:"/frontend/Advanced/Events system/event-generators",permalink:"/frontend/Advanced/Events system/event-generators",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1716132984e3,sidebarPosition:1,frontMatter:{draft:!1,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Scoping",permalink:"/frontend/Advanced/Dynamics/Scoping"},next:{title:"Dynamic symbols generation",permalink:"/frontend/Advanced/Events system/Dynamic symbols generation"}},l={},c=[{value:"Thumb rule",id:"thumb-rule",level:2},{value:"String equivalent",id:"string-equivalent",level:3},{value:"Pattern matching",id:"pattern-matching",level:2},{value:"Cloning events",id:"cloning-events",level:2},{value:"Return value",id:"return-value",level:2},{value:"Merging",id:"merging",level:2},{value:"Properties",id:"properties",level:2},{value:"Inheritable",id:"inheritable",level:3},{value:"Non-inheritable",id:"non-inheritable",level:3},{value:"Integration with server / client via WebSockets",id:"integration-with-server--client-via-websockets",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"event-system",children:"Event system"}),"\n",(0,i.jsx)(n.p,{children:"As a short summary - where you can use event-handlers"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["on ",(0,i.jsx)(n.code,{children:"Graphics2D"})," elements to listen users interactions","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"drag"}),", ",(0,i.jsx)(n.code,{children:"click"}),", ",(0,i.jsx)(n.code,{children:"zoom"}),", ",(0,i.jsx)(n.code,{children:"mousemove"}),", ..."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["on ",(0,i.jsx)(n.code,{children:"Graphics3D"})," elements","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"transform"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["on any ",(0,i.jsx)(n.code,{children:"EventObject"})," or its string equivalent"]}),"\n",(0,i.jsxs)(n.li,{children:["many more - see ",(0,i.jsx)(n.a,{href:"/frontend/Advanced/Events%20system/Mouse%20and%20keyboard",children:"Mouse and keyboard"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"An event-driven approach was inspired by Javascript language, where one can subscribe to any changes of any objects. Here it was expanded in a way to utilize the full power of pattern matching features of Wolfram Language."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["See reference section ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Misc/Events",children:"Events"})," as well"]})}),"\n",(0,i.jsx)(n.h2,{id:"thumb-rule",children:"Thumb rule"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"One event-object"})," - ",(0,i.jsx)(n.strong,{children:"one handler"})," function"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'ev = EventObject[<|"Id"->"evid"|>]\nEventHandler[ev, Print]\n'})}),"\n",(0,i.jsx)(n.p,{children:"i.e."}),"\n",(0,i.jsx)(n.mermaid,{value:'flowchart LR\n\nsubgraph EventObject\n\tId\nend\n\nsubgraph EventHandler\n\tPrint\nend\n\nEventObject --"By Id"--\x3eEventHandler'}),"\n",(0,i.jsx)(n.p,{children:"And then to fire"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'EventFire[ev, "Hello World!"];\n'})}),"\n",(0,i.jsx)(n.p,{children:"In order to remove handler from event object use"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"Delete[ev]\n"})}),"\n",(0,i.jsx)(n.p,{children:"or more universal"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"EventRemove[ev]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["where it deletes a handler function, but not an ",(0,i.jsx)(n.code,{children:"EventObject"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["To assign more event handlers, you need to ",(0,i.jsx)(n.strong,{children:"clone an event object"})," or use different pattern on the same event object (see ",(0,i.jsx)(n.a,{href:"#Pattern%20matching",children:"Pattern matching"}),")."]})}),"\n",(0,i.jsx)(n.h3,{id:"string-equivalent",children:"String equivalent"}),"\n",(0,i.jsxs)(n.p,{children:["The actual binding is done only by ",(0,i.jsx)(n.code,{children:'"Id"'})," field, therefore, one can omit ",(0,i.jsx)(n.code,{children:"EventObject"})," head"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'ev = "evid";\nEventHandler[ev, Print]\n'})}),"\n",(0,i.jsx)(n.p,{children:"is the same as"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'ev = EventObject[<|"Id"->"evid"|>]\nEventHandler[ev, Print]\n'})}),"\n",(0,i.jsx)(n.h2,{id:"pattern-matching",children:"Pattern matching"}),"\n",(0,i.jsxs)(n.p,{children:["In general an event entity can carry an additional information using Wolfram Language Patterns. It can distribute messages across different handler functions based on type of event fired (or its topic lets say). Using regular syntax for replacing patterns with ",(0,i.jsx)(n.code,{children:"Rule"})," and ",(0,i.jsx)(n.code,{children:"RuleDelayed"})," one can write a much more detailed handler function"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'EventHandler["evid", {\n\t"Topic" -> Function[data,\n\t\tEcho["Topic::"];\n\t\tEcho[data];\n\t],\n\tany_String :> Function[data,\n\t\tEcho[StringJoin[any, "::"]];\n\t\tEcho[data];\n\t]\t\n}];\n'})}),"\n",(0,i.jsx)(n.p,{children:"And to fire an event on a specific pattern - add extra argument to the middle of a sequence"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'EventFire["evid", "Topic", "Hi!"];\nEventFire["evid", "Whatever", "Hi!"];\n'})}),"\n",(0,i.jsxs)(n.p,{children:["However, it is not limited to ",(0,i.jsx)(n.code,{children:"String"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'EventHandler["evid", {\n\t_Abrakadabra -> Function[Null,\n\t\tEcho["Got it!"];\n\t],\n\t\n\t_ -> Function[Null,\n\t\tEcho["Wrong one"];\n\t]\n}];\n\nEventFire["evid", Abrakadabra[], Null]\n'})}),"\n",(0,i.jsx)(n.p,{children:"One should note, that effectively those are the same records"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"EventHandler[ev, Print]\nEventHandler[ev, {_ -> Print}]\n"})}),"\n",(0,i.jsx)(n.p,{children:"while"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'EventFire[ev, data]\nEventFire[ev, "Default", data]\n'})}),"\n",(0,i.jsx)(n.p,{children:"are also the same."}),"\n",(0,i.jsx)(n.h2,{id:"cloning-events",children:"Cloning events"}),"\n",(0,i.jsxs)(n.p,{children:["In the previous examples we had only one handler function per pattern. If you want more, there is a way to clone an ",(0,i.jsx)(n.code,{children:"EventObject"})," or its string equivalent"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'ev = EventObject[<|"Id"->"evid"|>]\n(* first handler *)\nEventHandler[ev, Print]; \n\n(* second handler *)\n{ /* highlight-start */ }\ncloned = EventClone[ev];\n{ /* highlight-end */ }\nEventHandler[cloned, Print];\n'})}),"\n",(0,i.jsx)(n.p,{children:"What it does, it creates something like an event router subscribed to the original event-object, a router, then, is populated by the two new event-objects"}),"\n",(0,i.jsx)(n.mermaid,{value:'flowchart LR\n\nsubgraph EventObject\n\tid1["id=evid"]\n\tprop1["props"]\nend\n\nsubgraph EventRouter\n\tsubgraph List\n\t\tid2["id=new1"]\n\t\tid3["id=new2"]\n\tend\n\tprop2["props"]\nend\n\nsubgraph EventHandler1[EventHandler]\n\tPrint1[Print]\nend\n\nsubgraph EventHandler2[EventHandler]\n\tPrint2[Print]\nend\n\nEventObject --"By id"--\x3e EventRouter\n\nid2 --"By id"--\x3eEventHandler1\nid3 --"By id"--\x3eEventHandler2'}),"\n",(0,i.jsxs)(n.p,{children:["Anything you do with ",(0,i.jsx)(n.code,{children:"cloned"})," event will not affect the original entitiy"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"Delete[cloned] or EventRemove[cloned]\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Cloned object inherits all properties (i.e. initial data), that the original object has."})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["If you are sure, that two ",(0,i.jsx)(n.code,{children:"EventHandler"})," function does not intersect with their patterns attached to the same event-object, there is no need in cloning, i.e."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'EventHandler[ev, {\n\t"Pattern 1" -> func1\n}];\nEventHandler[ev, {\n\t"Pattern 2" -> func2\n}];\n\nEventFire[ev, ..., data];\n'})}),(0,i.jsx)(n.p,{children:"is valid. Patterns will be merged."})]}),"\n",(0,i.jsx)(n.h2,{id:"return-value",children:"Return value"}),"\n",(0,i.jsx)(n.p,{children:"Each handling function can return some value back, that again carries extra information"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"EventHandler[ev, Function[Null,\n\tNow\n]];\n\nEventFire[ev, Null] // Echo\n"})}),"\n",(0,i.jsxs)(n.p,{children:["an ",(0,i.jsx)(n.code,{children:"Echo"})," from the last line will print current date. The same can be done with a chain of cloned events, i.e."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"EventHandler[ev, Function[Null,\n\tNow\n]];\nEventHandler[ev // EventClone, Function[Null,\n\tNow\n]];\nEventHandler[ev // EventClone, Function[Null,\n\tNow\n]];\n\nEventFire[ev, Null] // Echo\n"})}),"\n",(0,i.jsx)(n.p,{children:"The returned value will be a list of three semi-identical dates."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Use return values to provide ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Misc/Promise",children:"Promise"})," objects, when one or more of your chained handlers asks the side, which fired a chain, to wait for some deferred event be happen (see ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Misc/Promise#%60Then%60",children:(0,i.jsx)(n.code,{children:"Then"})}),")."]})}),"\n",(0,i.jsx)(n.h2,{id:"merging",children:"Merging"}),"\n",(0,i.jsx)(n.p,{children:"For example you want to update the state of something based on two events, that may happen independently, then use"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'ev1 = EventObject[<|"Id"->"evid1"|>]\nev2 = EventObject[<|"Id"->"evid2"|>]\n\njoined = Join[ev1, ev2]\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"You do not have to clone your events before joining them, since it does it automatically keeping all other connections intact"})}),"\n",(0,i.jsx)(n.mermaid,{value:'flowchart LR\n\nsubgraph EventObject1[EventObject]\n\tid1["id=evid1"]\n\tprop1["props1"]\nend\n\nsubgraph EventObject2[EventObject]\n\tid2["id=evid2"]\n\tprop2["props2"]\nend\n\nsubgraph EventRouter\nend\n\nsubgraph EventObject3[EventObject]\n\tid3["id=new"]\n\tprop3["merged props"]\nend\n\nEventObject1 --\x3e EventRouter\nEventObject2 --\x3e EventRouter\n\nEventRouter --Fire--\x3e EventObject3'}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(n.p,{children:["There is a possibility to carry an additional keys wrapped inside ",(0,i.jsx)(n.code,{children:"EventObject"}),". By its nature this is not a classical object in the sense of OOP, since the handler function has no access to the their properties and only ",(0,i.jsx)(n.code,{children:"Id"}),"  field is stored in global a memory."]}),"\n",(0,i.jsx)(n.h3,{id:"inheritable",children:"Inheritable"}),"\n",(0,i.jsxs)(n.p,{children:["There is a property ",(0,i.jsx)(n.code,{children:'"Initial"'}),", that specifies the initial value of the data shipped when the event is fired, when you apply ",(0,i.jsx)(n.code,{children:"Join"})," or ",(0,i.jsx)(n.code,{children:"EventClone"})," the final initial conditions will be merged from the different event objects or just copied"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'ev1 = EventObject[<|"Id"->"ev1", "Initial"-><|"x"->1|>|>]\nev2 = EventObject[<|"Id"->"ev1", "Initial"-><|"y"->2|>|>]\n\nJoin[ev1, ev2]\n'})}),"\n",(0,i.jsx)(n.p,{children:"the result will be"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'EventObject[<|"Id"->"generatedId", "Initial"-><|"x"->1, "y"->2|>|>]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["What also makes field ",(0,i.jsx)(n.code,{children:'"Initial"'})," so special is that it can be automatically substituted to ",(0,i.jsx)(n.code,{children:"EventFire"})," method, when no other data is provided"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"EventFire[ev]\n"})}),"\n",(0,i.jsx)(n.p,{children:"is effectively"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'EventFire[ev, ev[[1]]["Initial"]]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"non-inheritable",children:"Non-inheritable"}),"\n",(0,i.jsxs)(n.p,{children:["A very useful property, that comes handy when making GUI elements ",(0,i.jsx)(n.code,{children:'"View"'})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'EventObject[<|"Id"->"evid", "View"->Graphics3D[Sphere[]]|>]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["it acts only when the object is printed to the output cell or displayed on a page, then, we will see ",(0,i.jsx)(n.code,{children:"Graphics3D"})," output instead of  ",(0,i.jsx)(n.code,{children:"EventObject"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"integration-with-server--client-via-websockets",children:"Integration with server / client via WebSockets"}),"\n",(0,i.jsxs)(n.p,{children:["A framework of ",(0,i.jsx)(n.a,{href:"https://jerryi.github.io/wlx-docs/docs/Reference/Misc/WLJSTransport",children:"WLJSTransport"})," redirects calls from Javascript code to event system as well. A global ",(0,i.jsx)(n.code,{children:"server"})," object provides a corresponding method"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"server.kernel.emitt('evid', 'message')\n//or\nserver.kernel.emitt('evid', 'message', 'pattern')\n"})}),"\n",(0,i.jsx)(n.p,{children:"and on server's side one can do as usual"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'EventHandler["evid", Print]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>d,M:()=>s});var i=t(11504);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);