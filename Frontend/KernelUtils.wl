BeginPackage["JerryI`Notebook`KernelUtils`", {
  "JerryI`Notebook`Evaluator`", 
  "JerryI`Notebook`Packages`", 
  "JerryI`Notebook`Kernel`", 
  "JerryI`Misc`Events`",
  "KirillBelov`CSockets`",
  "KirillBelov`Internal`",
  "KirillBelov`TCPServer`",
  "KirillBelov`WebSocketHandler`",
  "JerryI`Misc`WLJS`Transport`"
}];

Begin["`Internal`"];

initializeKernel[kernel_] := With[{wsPort = RandomInteger[{20500, 3900}]},
  Print["Init Kernel!!!"];

  With[{p = Import[FileNameJoin[{"Packages", #}], {"Package", "HeldExpressions"}]},
    Echo[StringJoin["Loading into Kernel... ", #] ];
    Kernel`Init[kernel,  ReleaseHold /@ p; ](*`*);
  ] &/@ Includes["kernel"];

  Echo["Starting WS link"];
  wsStartListerning[kernel,  wsPort];
  kernel["WebSocket"] = wsPort;

  kernel["Container"] = StandardEvaluator`Container[kernel](*`*);
  kernel["ContainerReadyQ"] = True;

  kernel["State"] = "Initialized";

  With[{hash = kernel["Hash"]},
    Kernel`Init[kernel,  EventFire[Internal`Kernel`Stdout[ hash ], "State", "Initialized" ]; ];
  ];
]

deinitializeKernel[kernel_] := With[{},
  Echo["Cleaning up..."];

  kernel["ContainerReadyQ"] = False;
  kernel["WebSocket"] = .;
]

wsStartListerning[kernel_, port_] := With[{},
    Kernel`Init[kernel,  (  
        Print["Establishing WS link..."];
        Global`$DefaultSerializer = ExportByteArray[#, "ExpressionJSON"]&;
        Module[{wcp, ws},
          wcp = TCPServer[];
          wcp["CompleteHandler", "WebSocket"] = WebSocketPacketQ -> WebSocketPacketLength;
          
          ws = WebSocketHandler[];
          wcp["MessageHandler", "WebSocket"]  = WebSocketPacketQ -> ws;

          (* configure the handler for WLJS communications *)
          ws["MessageHandler", "Evaluate"]  = Function[True] -> WLJSTransportHandler;

          (* symbols tracking *)
          WLJSTransportHandler["AddTracking"] = Function[{symbol, name, cli, callback},
              Print["Add tracking... for "<>name];
              Experimental`ValueFunction[ Unevaluated[symbol] ] = Function[{y,x}, callback[cli, x] ];
          , HoldFirst];

          WLJSTransportHandler["GetSymbol"] = Function[{expr, client, callback},
              Print["evaluating the desired symbol on the Kernel"];
              callback[expr // ReleaseHold];
          ];

          Echo[StringTemplate["starting @ ``:port ``"][Internal`Kernel`Host, port] ];
          SocketListen[CSocketOpen[Internal`Kernel`Host, port ], wcp@#&];
        ];
    ) ]
]

End[];

EndPackage[];

{JerryI`Notebook`KernelUtils`Internal`deinitializeKernel, JerryI`Notebook`KernelUtils`Internal`initializeKernel}
