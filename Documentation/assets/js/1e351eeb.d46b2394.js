"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[1920],{58828:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=t(17624),i=t(4552);const a={sidebar_position:3},o="3. Dynamic decorations",r={id:"frontend/Advanced/Objects/Dynamic decorations",title:"3. Dynamic decorations",description:"In this part we will try to synchronize the state of our symbols or objects with corresponding decorations we created in the previous part.",source:"@site/docs/frontend/Advanced/Objects/Dynamic decorations.md",sourceDirName:"frontend/Advanced/Objects",slug:"/frontend/Advanced/Objects/Dynamic decorations",permalink:"/frontend/Advanced/Objects/Dynamic decorations",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. Static decorations",permalink:"/frontend/Advanced/Objects/Static decorations"},next:{title:"AI Assistant",permalink:"/frontend/Advanced/Snippets/AI Assistant"}},c={},d=[{value:"Dynamic summary item",id:"dynamic-summary-item",level:2},{value:"Controllers",id:"controllers",level:2},{value:"Mutability",id:"mutability",level:2}];function l(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"3-dynamic-decorations",children:"3. Dynamic decorations"}),"\n",(0,s.jsx)(e.p,{children:"In this part we will try to synchronize the state of our symbols or objects with corresponding decorations we created in the previous part."}),"\n",(0,s.jsx)(e.h2,{id:"dynamic-summary-item",children:"Dynamic summary item"}),"\n",(0,s.jsxs)(e.p,{children:["We have already explored the possibility of animated icons in ",(0,s.jsx)(e.a,{href:"/frontend/Advanced/Objects/Static%20decorations#Animated%20decoration%20in%20Summary%20Item",children:"Animated decoration in Summary Item"}),", therefore there is no obstacles in doing the same in sync with state changes of our object."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mathematica",children:'StateMachine /: MakeBoxes[s: StateMachine[symbol_Symbol?AssociationQ], form: (StandardForm | TraditionalForm)] := Module[{\n\tstate = s["State"] // ToString,\n    instances = 0,\n    eventObject, construct, destruct\n}, With[{\n\ttextField = EditorView[state // Offload],\n\tcontroller = CreateUUID[]\n},\n\n    construct := With[{},\n      (* subscribe to object events and update decoration *)\n      eventObject = EventClone[s];\n      EventHandler[eventObject, {\n        "State" -> Function[new, state = new // ToString]\n      }];     \n    ];\n\n    destruct := With[{},\n      Echo["Removed"];\n\t  EventRemove[eventObject];    \n    ];\n\n\tEventHandler[controller, {\n\t\t"Mounted" -> Function[Null,\n\n          If[instances === 0, construct];\n          instances = instances + 1;\n\n\t\t],\n\t\t\n\t\t"Destroy" -> Function[Null, \n\t\t\tinstances = instances - 1;\n\t\t\t\n\t        (* unsubscribe when there is no instances *)\n\t        If[instances === 0, destruct];\n          ]\n\t}];\n\n\tWith[{\n\t\tsummary = {BoxForm`SummaryItem[{"State: ", textField}]}\n\t},\n\t\tBoxForm`ArrangeSummaryBox[\n\t\t\tStateMachine,\n\t\t\ts,\n\t\t\tNone,\n\t\t\tsummary,\n            Null,\n\n\t\t\t"Event" -> controller\n\t\t]\n\t]\n] ]\n'})}),"\n",(0,s.jsxs)(e.p,{children:["The idea is the same, but instead of static value, we substituted to  ",(0,s.jsx)(e.code,{children:"BoxForm`SummaryItem"})," a dynamic element ",(0,s.jsx)(e.a,{href:"/frontend/Reference/GUI/EditorView",children:"EditorView"})," which is updated by the a handler function subscribed to updates of our instance."]}),"\n",(0,s.jsx)(e.p,{children:"Let us test it"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mathematica",children:"instance = StateMachine[]\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.em,{children:"you can copy and paste instances with no issues, since it is tracked by a variable in the box decoration code"})}),"\n",(0,s.jsx)(e.p,{children:"and change the state"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mathematica",children:"StateMachineChange[instance, RandomInteger[{1,10}]];\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:t(4860).c+"",width:"800",height:"142"})}),"\n",(0,s.jsx)(e.h2,{id:"controllers",children:"Controllers"}),"\n",(0,s.jsxs)(e.p,{children:["We can also mutate our object from the decoration by substituting ",(0,s.jsx)(e.a,{href:"/frontend/Reference/GUI/InputRange",children:"InputRange"})," or something like this to a widget. Right..?"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mathematica",children:'StateMachine /: MakeBoxes[s: StateMachine[symbol_Symbol?AssociationQ], form: (StandardForm | TraditionalForm)] := Module[{\n\tstate = s["State"] // ToString,\n    instances = 0,\n    eventObject, construct, destruct, slider\n}, With[{\n\ttextField = EditorView[state // Offload],\n\tcontroller = CreateUUID[]\n},\n\n    slider = InputRange[0, 10, 1, s["State"]];\n    EventHandler[slider, Function[n, \n      StateMachineChange[s, n]\n    ]];\n\n    construct := With[{},\n      (* subscribe to object events and update decoration *)\n      eventObject = EventClone[s];\n      EventHandler[eventObject, {\n        "State" -> Function[new, state = new // ToString]\n      }];     \n    ];\n\n    destruct := With[{},\n      Echo["Removed"];\n\t  EventRemove[eventObject];    \n    ];\n\n\tEventHandler[controller, {\n\t\t"Mounted" -> Function[Null,\n\n          If[instances === 0, construct];\n          instances = instances + 1;\n\n\t\t],\n\t\t\n\t\t"Destroy" -> Function[Null, \n\t\t\tinstances = instances - 1;\n\t\t\t\n\t        (* unsubscribe when there is no instances *)\n\t        If[instances === 0, destruct];\n          ]\n\t}];\n\n\tWith[{\n\t\tsummary = {\n          BoxForm`SummaryItem[{"State: ", textField}],\n          BoxForm`SummaryItem[{"", slider}]\n        }\n\t},\n\t\tBoxForm`ArrangeSummaryBox[\n\t\t\tStateMachine,\n\t\t\ts,\n\t\t\tNone,\n\t\t\tsummary,\n            Null,\n\n\t\t\t"Event" -> controller\n\t\t]\n\t]\n] ]\n'})}),"\n",(0,s.jsxs)(e.p,{children:["We added only a few line for ",(0,s.jsx)(e.code,{children:"slider"}),". The rest is the same"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:t(20032).c+"",width:"800",height:"162"})}),"\n",(0,s.jsxs)(e.admonition,{type:"warning",children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"/frontend/Reference/GUI/InputRange",children:"InputRange"})," does not support multiple instances and might have a conflict with DOM ids if copied and pasted from the same generated output."]}),(0,s.jsxs)(e.p,{children:["To solve this issue, we your own slider, which is generated purely from Javascript on each run. See how in ",(0,s.jsx)(e.a,{href:"/frontend/Advanced/Javascript/Communication",children:"Communication"})]})]}),"\n",(0,s.jsx)(e.h2,{id:"mutability",children:"Mutability"}),"\n",(0,s.jsxs)(e.p,{children:["Each decoration box based on ",(0,s.jsx)(e.a,{href:"/frontend/Reference/Decorations/ViewBox",children:"ViewBox"})," does support mutations of inner and outer content - see ",(0,s.jsx)(e.a,{href:"/frontend/Reference/Decorations/ViewBox#From%20Wolfram%20Kernel",children:"From Wolfram Kernel"}),"."]}),"\n",(0,s.jsx)(e.p,{children:"The easies example would be to remove all instances from all code editors, once our object does not exists anymore. We will start from writing the corresponding method"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mathematica",children:'StateMachine /: Delete[s_StateMachine] := With[{},\n  EventFire[s, "Destroy", Null];\n  DeleteObject[s]\n]\n'})}),"\n",(0,s.jsxs)(e.p,{children:["Then we need to track all spawned instances of a widget in order to kill all of them. ",(0,s.jsx)(e.a,{href:"/frontend/Reference/Decorations/ViewBox",children:"ViewBox"})," provides pattern for events handling ",(0,s.jsx)(e.code,{children:'"Mounted"'})," with an ID of a widget. Let us harvest it"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mathematica",children:'\tEventHandler[controller, {\n\t\t"Mounted" -> Function[uid,\n\t\t  (* collect instances *)\n          s["Instances"] = If[ListQ[s["Instances"]], Append[s["Instances"], uid], {uid}];\n          \n          If[instances === 0, construct];\n          instances = instances + 1;\n\n\t\t],\n\t\t\n\t\t"Destroy" -> Function[uid, \n            s["Instances"] = s["Instances"] /. {uid -> Nothing};\n            \n\t\t\tinstances = instances - 1;\n\t\t\t\n\t        \n\t        If[instances === 0, destruct];\n          ]\n\t}];\n'})}),"\n",(0,s.jsxs)(e.p,{children:["The collected IDs are valid to use together with ",(0,s.jsx)(e.a,{href:"/frontend/Reference/Frontend%20IO/MetaMarker",children:"MetaMarker"})," and ",(0,s.jsx)(e.a,{href:"/frontend/Reference/Frontend%20IO/FrontSubmit",children:"FrontSubmit"}),". To destroy them one by one we need to submit a command"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mathematica",children:'FrontSubmit[ViewBox`OuterExpression[""], MetaMarker[#]] &/@ s["Instances"]\n'})}),"\n",(0,s.jsxs)(e.p,{children:["Here is ",(0,s.jsx)(e.strong,{children:"the full code"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-mathematica",children:'StateMachine /: MakeBoxes[s: StateMachine[symbol_Symbol?AssociationQ], form: (StandardForm | TraditionalForm)] := Module[{\n\tstate = s["State"] // ToString,\n    instances = 0,\n    eventObject, construct, destruct\n}, With[{\n\ttextField = EditorView[state // Offload],\n\tcontroller = CreateUUID[],\n    window = CurrentWindow[]\n},\n\n    construct := With[{},\n      (* subscribe to object events and update decoration *)\n      eventObject = EventClone[s];\n      EventHandler[eventObject, {\n        "State" -> Function[new, state = new // ToString],\n        "Destroy" -> Function[Null,\n          FrontSubmit[ViewBox`OuterExpression[""], MetaMarker[#], "Window"->window] &/@ s["Instances"];\n        ]\n      }];     \n    ];\n\n    destruct := With[{},\n      Echo["Removed"];\n\t  EventRemove[eventObject];    \n    ];\n\n\tEventHandler[controller, {\n\t\t"Mounted" -> Function[uid,\n          s["Instances"] = If[ListQ[s["Instances"]], Append[s["Instances"], uid], {uid}];\n          \n          If[instances === 0, construct];\n          instances = instances + 1;\n\n\t\t],\n\t\t\n\t\t"Destroy" -> Function[uid, \n            s["Instances"] = s["Instances"] /. {uid -> Nothing};\n            \n\t\t\tinstances = instances - 1;\n\t\t\t\n\t        (* unsubscribe when there is no instances *)\n\t        If[instances === 0, destruct];\n          ]\n\t}];\n\n\tWith[{\n\t\tsummary = {BoxForm`SummaryItem[{"State: ", textField}]}\n\t},\n\t\tBoxForm`ArrangeSummaryBox[\n\t\t\tStateMachine,\n\t\t\ts,\n\t\t\tNone,\n\t\t\tsummary,\n            Null,\n\n\t\t\t"Event" -> controller\n\t\t]\n\t]\n] ]\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:t(21352).c+"",width:"800",height:"181"})})]})}function m(n={}){const{wrapper:e}={...(0,i.M)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},4860:(n,e,t)=>{t.d(e,{c:()=>s});const s=t.p+"assets/images/DynamicDeco video-1c7463904380300266e8676f13890225.gif"},21352:(n,e,t)=>{t.d(e,{c:()=>s});const s=t.p+"assets/images/RemovedDeco-177d842678f2b0b31da4ec4abf002ce9.gif"},20032:(n,e,t)=>{t.d(e,{c:()=>s});const s=t.p+"assets/images/Screen Recording May 01-0136f9a0e3ec35834faa92e9f246d621.gif"},4552:(n,e,t)=>{t.d(e,{I:()=>r,M:()=>o});var s=t(11504);const i={},a=s.createContext(i);function o(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);