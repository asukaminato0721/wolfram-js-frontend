const { session, app, Tray, Menu, BrowserWindow, dialog, ipcMain, nativeTheme } = require('electron')
const { screen, globalShortcut} = require('electron/main')

const path = require('path')
const { platform } = require('node:process');


function isFile(pathItem) {
    return !!path.extname(pathItem);
  }

const zlib = require('zlib');

const {powerMonitor } = require('electron')

const { net } = require('electron')
const fs = require('fs');
const fse = require('fs-extra');

const { powerSaveBlocker } = require('electron')

let powerSaveId;

const contextMenu = require('electron-context-menu');
const contextMenuExtensions = [];

const { exec } = require('node:child_process');
const controller = new AbortController();
const { signal } = controller;

const { shell } = require('electron')

const { PARAMS, VALUE, MicaBrowserWindow, IS_WINDOWS_11, WIN10 } = require('mica-electron');

const isWindows = process.platform === 'win32'
const isMac = process.platform === 'darwin'


let trackpadUtils = {
    onForceClick: () => {},
    triggerFeedback: () => {}
};
if (isMac) trackpadUtils = require("electron-trackpad-utils");

//all routes to important folders
let installationFolder;

//check if it is working from the repo folder of not
if (app.isPackaged) {
    installationFolder = path.join(app.getPath('appData'), 'wljs-notebook');
} else {
    installationFolder = app.getAppPath();
}

const runPath = path.join(installationFolder, 'Scripts', 'start.wls');
const workingDir = app.getPath('home');

trackpadUtils.onForceClick(() => {
	console.log("onForceClick");
});


//fetch contex menus items from wljs_packages folder

let tray;

/* extesions for contex menu */
const pluginsMenu = {};

pluginsMenu.items = {};
pluginsMenu.fetch = () => {
    pluginsMenu.items = {kernel: [], edit: [], view: [], file: [], misc: []}

    if (!fs.existsSync(path.join(installationFolder, 'wljs_packages'))) return;

    

    fs.readdirSync(path.join(installationFolder, 'wljs_packages'), { withFileTypes: true }).filter(item => item.isDirectory()).map(item => {
        const p = path.join(installationFolder, 'wljs_packages', item.name, 'package.json');
        if (fs.existsSync(p)) {
            const package = JSON.parse(fs.readFileSync(p, 'utf8'));
            if (package["wljs-meta"]["menu"]) {
                package["wljs-meta"]["menu"].forEach(mi => {
                    const mitem = {
                        label: mi["label"],
                        click: async(ev) => {
                            console.log(ev);
                            windows.focused.call('extension', mi["event"]);
                        }
                    };

                    if (mi["accelerator"]) {
                        mitem.accelerator = isMac ? mi["accelerator"][0] : mi["accelerator"][1];
                    }
                    let section = mi["section"];
                    if (!section) section =  "misc";

                    pluginsMenu.items[section].push(mitem);
                });
            }

            if (package["wljs-meta"]["contextMenu"]) {
                package["wljs-meta"]["contextMenu"].forEach(mi => {
                    const mitem = {
                        label: mi["label"],
                        event: mi["event"],
                        visible: true,
                    };

                    if (mi["visible"]) {
                        mitem.visible = mi["visible"];
                    }

                    contextMenuExtensions.push(mitem);
                });
            }
        }
    })
}


//load shortcuts
let shortcuts_table = require("./shortcuts.json");
if (fs.existsSync(path.join(installationFolder, "Electron", "shortcuts.json"))) {
    shortcuts_table = JSON.parse(fs.readFileSync(path.join(installationFolder, "Electron", "shortcuts.json"), 'utf8'));
    console.log(shortcuts_table);
} 

const { spawnSync, spawn } = require('child_process');
const shortcut = (id) => {

    if (! shortcuts_table[id]) return undefined;
    if (process.platform === 'darwin') return shortcuts_table[id][0]
    return shortcuts_table[id][1]
}


//build TOP MENU

const callFakeMenu = {}

const buildMenu = (opts) => {
    //default options
    const defaults = {
        footermenu: [],
        localmenu: true,
        plugins: []
    };

    const options = Object.assign({}, defaults, opts);

    const template = [
        // { role: 'appMenu' }
        ...(isMac ? [{
            label: app.name,
            submenu: [
                { role: 'about' },
                { type: 'separator' },
                { role: 'hide' },
                { role: 'hideOthers' },
                { role: 'unhide' },
                { type: 'separator' },
                ...(options.footermenu),
                { role: 'quit' }
            ]
        }] : []),
        // { role: 'fileMenu' }
        {
            label: 'File',
            submenu: [{
                    label: 'New',
                    accelerator: shortcut('new_file'),
                    click: async(ev) => {
                        console.log(ev);
                        windows.focused.call('newshortnote', true);
                    }
                },
                {
                    label: 'Open File',
                    accelerator: shortcut('open_file'),
                    click: async() => {
                        const promise = dialog.showOpenDialog({
                            title: 'Open File',
                            filters: [
                                { name: 'Notebooks', extensions: ['wln', 'nb', 'md', 'html'] }
                            ],
                            properties: ['openFile']
                        });

                        promise.then((res) => {
                            if (!res.canceled) {
                                app.addRecentDocument(res.filePaths[0]);
                                create_window({url: server.url.default('local') + `/` + encodeURIComponent(res.filePaths[0]), title: res.filePaths[0]});
                            }
                        });
                    }
                },
                { type: 'separator' },
                {
                    label: 'New note in folder',
                    accelerator: shortcut('new_file_folder'),
                    click: async(ev) => {
                        console.log(ev);
                        windows.focused.call('newnotebook', true);
                    }
                },              
                ...options.plugins.file,
                { type: 'separator' },
                {
                    label: 'Prompt call',
                    click: async(ev) => {
                        console.log(ev);
                        if (server.running)
                            create_window({url: server.url.default() + '/prompt', title: 'Overlay', overlay: true, show: true, focus: true});
                    }
                }, 
                { type: 'separator' },                 
                ...((options.localmenu) ? [
                    {
                        label: 'Open Folder',

                        click: async() => {
                            const promise = dialog.showOpenDialog({ title: 'Open Vault', properties: ['openDirectory'] });
                            promise.then((res) => {
                                if (!res.canceled) {
                                    app.addRecentDocument(res.filePaths[0]);
                                    create_window({url: server.url.default('local') + `/folder/` + encodeURIComponent(res.filePaths[0]), title: res.filePaths[0]});
                                }
                            });
                        }
                    },
                    {
                        "label":"Open Recent",
                        "role":"recentdocuments",
                        "submenu":[
                          {
                            "label":"Clear Recent",
                            "role":"clearrecentdocuments"
                          }
                        ]
                      }
                ] : []),
                { type: 'separator' },
                {
                    label: 'Save',
                    accelerator: shortcut('save'),
                    click: async(ev) => {
                        console.log(ev);
                        windows.focused.call('save', true);
                        
                    }
                },
                {
                    label: 'Save As',
                    click: async() => {
                        const promise = dialog.showSaveDialog({ title: 'Save as', properties: ['createDirectory'], filters: [
                            { name: 'Notebooks', extensions: ['wln'] }
                        ],});
                        promise.then((res) => {
                            if (!res.canceled) {
                                app.addRecentDocument(res.filePath);
                                
                                console.log(res.filePath);
                                windows.focused.call('saveas', encodeURIComponent(res.filePath) );
                            }
                        });
                    }
                },
                /*{ type: 'separator' },
                {
                    label: 'Share',
                    submenu: [{
                            label: 'HTML',
                            click: async(ev) => {
                                windows.focused.call('share', 'HTML');
                            }
                        },

                        {
                            label: 'React',
                            click: async(ev) => {
                                windows.focused.call('share', 'React');
                            }
                        }
                    ]
                },*/
                ...((options.localmenu) ? [{ type: 'separator' },
                    {
                        label: 'Open Examples',
                        click: async(ev) => {
                            create_window({url: server.url.default('local') + `/folder/` + encodeURIComponent(path.join(installationFolder, 'Demos')), title: 'Examples'});
                        }
                    },
                    { type: 'separator' },
                    {
                        label: 'Reopen as quick note',
                        click: (ev) => {
                            windows.focused.call('reopenasquick', true);
                        }
                    },

                    {
                        label: 'Reopen in browser',
                        click: (ev) => {
                            server.browserMode = true;
                            shell.openExternal(windows.focused.win.webContents.getURL());
                        }
                    },
                    { type: 'separator' },
                    {
                        label: 'Locate AppData',
                        click: async(ev) => {
                            console.log(ev);
                            shell.showItemInFolder(installationFolder);
                        }
                    }
                ] : []),
                //win.webContents.send('context', 'Iconize');
                ...(isMac ? [{ role: 'close' }] : [{ type: 'separator' }, ...(options.footermenu), { role: 'quit' }])
            ]
        },
        // { role: 'editMenu' }
        {
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                /*{ type: 'separator' },
                {
                    label: 'Find',
                    accelerator: shortcut('find'),
                    click: (ev) => {
                        windows.focused.call('Find');
                    }
                },*/
                { type: 'separator' },
                {
                    label: 'Hide/Unhide cell',
                    accelerator: shortcut('toggle_cell'),
                    click: async(ev) => {
                        console.log(ev);
                        windows.focused.call('togglecell');
                    }
                },
                {
                    label: 'Unhide All Cells',
                    click: async(ev) => {
                        console.log(ev);
                        windows.focused.call('unhideallcells', true);
                    }
                },

                { type: 'separator' },
                {
                    label: 'Delete cell',
                    accelerator: shortcut('delete_cell'),
                    click: async(ev) => {
                        console.log(ev);
                        windows.focused.call('deletecell', true);
                    }
                },
                { type: 'separator' },
                ...options.plugins.edit,
                ...(isMac ? [
                    { role: 'pasteAndMatchStyle' },
                    { role: 'delete' },
                    { role: 'selectAll' },
                    { type: 'separator' },
                    {
                        label: 'Speech',
                        submenu: [
                            { role: 'startSpeaking' },
                            { role: 'stopSpeaking' }
                        ]
                    }
                ] : [
                    { role: 'delete' },
                    { type: 'separator' },
                    { role: 'selectAll' }
                ])
            ]
        },
        // { role: 'windowMenu' }
        {
            label: 'Window',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { role: 'toggleDevTools' },
                { type: 'separator' },
                { role: 'minimize' },
                { role: 'zoom' },
                {
                    label: 'Always on top',
                    click: async(ev) => {
                        console.log(ev);
                        if (windows.focused.win.isAlwaysOnTop()) {
                            windows.focused.win.setAlwaysOnTop(false);
                        } else {
                            windows.focused.win.setAlwaysOnTop(true);
                        }
                    }
                },
                ...options.plugins.view,
                { type: 'separator' },
                { role: 'resetZoom' },
                { role: 'zoomIn' },
                { role: 'zoomOut' },
                { type: 'separator' },
                { role: 'togglefullscreen' },
                ...(isMac ? [
                    { type: 'separator' },
                    { role: 'front' },
                    { type: 'separator' },
                    { role: 'window' }
                ] : [
                    { role: 'close' }
                ])
            ]
        },

        {
            label: 'Evaluation',
            submenu: [{
                    label: 'Abort',
                    accelerator: shortcut('abort'),
                    click: async(ev) => {
                        console.log(ev);
                        windows.focused.call('abort', true);
                    }
                },

                {
                    label: 'Evaluate Initializing Cells',
                    accelerator: shortcut('evaluate_init'),
                    click: async(ev) => {
                        console.log(ev);
                        windows.focused.call('evaluateinit', true);
                    }
                },
                { type: 'separator' },
                {
                    label: 'Clear Output Cells',
                    accelerator: shortcut('clear_outputs'),
                    click: async(ev) => {
                        console.log(ev);
                        windows.focused.call('clearoutputs', true);
                    }
                },

                {
                    label: 'Change Kernel',
                    click: async(ev) => {
                        console.log(ev);
                        windows.focused.call('changekernel', true);
                    }
                },

                ...options.plugins.kernel,

                { type: 'separator' },

                {
                    label: 'Kernel',
                    submenu: [{
                            label: 'New Evaluation Kernel',
                            click: async(ev) => {
                                console.log(ev);
                                windows.focused.call('newlocalkernel', true);
                            }
                        },
                        {
                            label: 'Restart',
                            click: async(ev) => {
                                console.log(ev);
                                windows.focused.call('restartkernel', true);
                            }
                        },
                        {
                            label: 'Shutdown all',
                            click: async(ev) => {
                                console.log(ev);
                                windows.focused.call('killallkernels', true);
                            }
                        }
                    ]
                }
            ]
        },
       
        {
            label: 'Misc',
            submenu: [{
                    label: 'Settings',
                    click: async(ev) => {
                        console.log(ev);
                        windows.focused.call('settings', true);
                    }
                },

                { type: 'separator' },

                ...options.plugins.misc,
                {
                    role: 'help',
                    label: 'Documentation',
                    click: async() => {
                        //const { shell } = require('electron')
                        shell.openExternal('http://127.0.0.1:20540')
                    }
                },
                {
                    role: 'help',
                    label: 'Acknowledgments',
                    click: async() => {
                        //const { shell } = require('electron')
                        windows.focused.call('acknowledgments', true);
                        //create_window({url: server.url.default('local') + `/sponsors`, title: 'Acknowledgments'});
                    }
                }                
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

callFakeMenu["openFile"] = async () => {
    const promise = dialog.showOpenDialog({
        title: 'Open File',
        filters: [
            { name: 'Notebooks', extensions: ['wln', 'nb', 'md', 'html'] }
        ],
        properties: ['openFile']
    });

    promise.then((res) => {
        if (!res.canceled) {
            app.addRecentDocument(res.filePaths[0]);
            create_window({url: server.url.default('local') + `/` + encodeURIComponent(res.filePaths[0]), title: res.filePaths[0]});
        }
    });
}

callFakeMenu["openFolder"] = async () => {
    const promise = dialog.showOpenDialog({ title: 'Open Vault', properties: ['openDirectory'] });
    promise.then((res) => {
        if (!res.canceled) {
            app.addRecentDocument(res.filePaths[0]);
            create_window({url: server.url.default('local') + `/folder/` + encodeURIComponent(res.filePaths[0]), title: res.filePaths[0]});
        }
    });
}

callFakeMenu["Save"] = async () => {
    windows.focused.call('save', true);
}

callFakeMenu["SaveAs"] = async () => {
    const promise = dialog.showSaveDialog({ title: 'Save as', properties: ['createDirectory'], filters: [
        { name: 'Notebooks', extensions: ['wln'] }
    ],});
    promise.then((res) => {
        if (!res.canceled) {
            app.addRecentDocument(res.filePath);
            console.log(res.filePath);
            windows.focused.call('saveas', encodeURIComponent(res.filePath) );
        }
    });
}

callFakeMenu["OnTop"] = async(ev) => {
    console.log(ev);
    if (windows.focused.win.isAlwaysOnTop()) {
        windows.focused.win.setAlwaysOnTop(false);
    } else {
        windows.focused.win.setAlwaysOnTop(true);
    }
}

callFakeMenu["new"] = async(ev) => {
    console.log(ev);
    windows.focused.call('newnotebook', true);
}

callFakeMenu["newshort"] = async(ev) => {
    windows.focused.call('newshortnote', true);
}

callFakeMenu["acknowledgments"] = async(ev) => {
    windows.focused.call('acknowledgments', true);
}


callFakeMenu["browser"] = async(ev) => {
    server.browserMode = true;
    shell.openExternal(windows.focused.win.webContents.getURL());
}

callFakeMenu["abort"] = () => {
    windows.focused.call('abort', true);
}

callFakeMenu["clearoutputs"] = () => {
    windows.focused.call('clearoutputs', true);
}

callFakeMenu["togglecells"] = () => {
    windows.focused.call('togglecell', true);
}

callFakeMenu["evalInit"] = () => {
    windows.focused.call('evaluateinit', true);
}

callFakeMenu["restartkernels"] = () => {
    windows.focused.call('restartkernel', true);
}

callFakeMenu["newlocalkernel"] = () => {
    windows.focused.call('newlocalkernel', true);
}

callFakeMenu["shutdownall"] = () => {
    windows.focused.call('killallkernels', true);
}

callFakeMenu["zoomIn"] = () => {
    windows.focused.call('zoomIn', true);
}

callFakeMenu["zoomOut"] = () => {
    windows.focused.call('zoomOut', true);
}

callFakeMenu["locateExamples"] = async(ev) => {
    create_window({url: server.url.default('local') + `/folder/` + encodeURIComponent(path.join(installationFolder, 'Demos')), title: 'Examples'});
}

callFakeMenu["locateAppData"] = async(ev) => {
    console.log(ev);
    shell.showItemInFolder(installationFolder);
}

callFakeMenu["reload"] = () => {
    windows.focused.win.webContents.reloadIgnoringCache();
}

callFakeMenu["docsx"] = () => {
    shell.openExternal('http://127.0.0.1:20540')
}

callFakeMenu["prompt"] = () => {
    if (server.running)
        create_window({url: server.url.default() + '/prompt', title: 'Overlay', overlay: true, show: true, focus: true});
}


callFakeMenu["quickmode"] = () => {
    windows.focused.call('reopenasquick', true);
}

callFakeMenu["exit"] = () => {
    app.quit();
}

/* permissions for the main window, special headers */
const setHID = (mainWindow) => {
    mainWindow.webContents.session.on('select-hid-device', (event, details, callback) => {
        // Add events to handle devices being added or removed before the callback on
        // `select-hid-device` is called.
        mainWindow.webContents.session.on('hid-device-added', (event, device) => {
            console.log('hid-device-added FIRED WITH', device)
                // Optionally update details.deviceList
        })



        mainWindow.webContents.session.on('hid-device-removed', (event, device) => {
            console.log('hid-device-removed FIRED WITH', device)
                // Optionally update details.deviceList
        })

        event.preventDefault()
        if (details.deviceList && details.deviceList.length > 0) {
            callback(details.deviceList[0].deviceId)
        }
    })

    mainWindow.webContents.session.setPermissionCheckHandler((webContents, permission, requestingOrigin, details) => {
        return true
    })

    mainWindow.webContents.session.setDevicePermissionHandler((details) => {
        return true
    })

    session.fromPartition("default").setPermissionRequestHandler((webContents, permission, callback) => {
        let allowedPermissions = ["audioCapture", "desktopCapture"]; // Full list here: https://developer.chrome.com/extensions/declare_permissions#manifest

        if (allowedPermissions.includes(permission)) {
            callback(true); // Approve permission request
        } else {
            console.error(
                `The application tried to request permission for '${permission}'. This permission was not whitelisted and has been blocked.`
            );

            callback(false); // Deny
        }
    });

    let currentOS;
    if (isWindows) currentOS = 'Windows';
    if (isWindows && (!IS_WINDOWS_11 || server.frontend.WindowsLegacy)) currentOS = 'WindowsLegacy';
    if (isMac) currentOS = 'OSX';
    if (!isMac && !isWindows) currentOS = 'Unix';



    session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
        details.requestHeaders['Electron'] = majorVersion;
        details.requestHeaders['AppOS'] = currentOS;
        callback({ requestHeaders: details.requestHeaders })
    });

}

var majorVersion = app.getVersion().split('.');
majorVersion.pop();
majorVersion = majorVersion.join('');

const server = {
    startedQ: false,
    running: false,
    path: {
        //called via args
    },
    url: {
        self: undefined,
        local: undefined,
        default () {
            return this.local;
        }
    },

    wolfram: {
        process: undefined,
        path: 'wolframscript',
        args: []
    },

    frontend: {},


    shutdown (cbk) {
        if (server.startedQ) {
            this.startedQ = false;
            this.running = false;
            console.log(this.wolfram.process.pid);

            this.wolfram.process.kill('SIGINT');
            this.wolfram.process.stdin.write("exit\n");

            this.wolfram.process.stdin.end();
            this.wolfram.process.stdout.destroy();
            this.wolfram.process.stderr.destroy();

            this.wolfram.process.kill('SIGKILL');
            console.log('Killed?');

            if (!isWindows) {
                //bug on Unix
                kill_all(() => console.log('killed!'));
            }

            //this.wolfram.process.kill('SIGINT');
            //this.wolfram.process.stdin.write("exit\n");
        }
    }
}

/* working windows */
const windows = {
    log: {
        aliveQ: false,
        readyQ: false,
        win: undefined,

        dump: [],

        clear () {
            if (!this.readyQ || !this.aliveQ) return;
            this.win.webContents.send('clear', null);
        },

        print (data, color) {
            if (Array.isArray(this.dump)) this.dump.push(data);
            if (!this.readyQ || !this.aliveQ) {
                console.log(data);
                return;
            };


            this.win.webContents.send('push-logs', data, color);
        },

        info (data) {
            this.win.webContents.send('info', data);
        },

        version (data) {
            this.win.webContents.send('version', data);
        },

        construct(cbk = () => {}) {
            let win;

            if (isMac) {
              win = new BrowserWindow({
                vibrancy: "sidebar", // in my case...
                frame: true,
                
                titleBarStyle: 'hiddenInset',
                width: 600,
                height: 400,
                resizable: false,
                title: 'Launcher',
                webPreferences: {
                    preload: path.join(__dirname, 'preload_log.js'),
                    webSecurity: false,
                    //nodeIntegration: true
                }
             });
            } else if (isWindows) {
                win = new BrowserWindow({
                    vibrancy: "sidebar", // in my case...
                    frame: true,
                    autoHideMenuBar: true,
                    titleBarStyle: 'hidden',
                    titleBarOverlay: {
                        color: 'rgba(255, 255, 255, 0.0)',
                        symbolColor: 'rgba(128, 128, 128, 1.0)'
                    },
                    autoHideMenuBar: true,
                    width: 600,
                    height: 400,
                    resizable: false,
                    title: 'Launcher',
                    webPreferences: {
                        preload: path.join(__dirname, 'preload_log.js'),
                        //webSecurity: false,
                        nodeIntegration: true
                    }
                 });




            } else {
                win = new BrowserWindow({
                    vibrancy: "sidebar", // in my case...
                    frame: true,
                    autoHideMenuBar: true,
                    titleBarStyle: 'hidden',
                    titleBarOverlay: {
                        color: 'rgba(255, 255, 255, 0.0)',
                        symbolColor: 'rgba(128, 128, 128, 1.0)'
                    },
                    autoHideMenuBar: true,
                    width: 600,
                    height: 400,
                    resizable: false,
                    title: 'Launcher',
                    webPreferences: {
                        preload: path.join(__dirname, 'preload_log.js'),
                        //webSecurity: false,
                        nodeIntegration: true
                    },

                    icon: path.join(__dirname, "build", "512x512.png")
                 });                
            }

            win.webContents.setWindowOpenHandler((details) => {
                shell.openExternal(details.url); // Open URL in user's browser.
                return { action: "deny" }; // Prevent the app from opening the URL.
              })

            /*win.webContents.session.webRequest.onHeadersReceived((details, callback) => {
              callback({ responseHeaders: Object.assign({
                  "Content-Security-Policy": [ "default-src 'self' 'unsafe-inline'"]
              }, details.responseHeaders)})});*/

            if (isMac) {
                win.loadFile(path.join(__dirname, 'log.html'));
            } else {
                win.loadFile(path.join(__dirname, 'log_padded.html'));
            }
            

            windows.log.win = win;
            this.aliveQ = true;

            const self = this;

            win.once('ready-to-show', () => {
                self.readyQ = true;
                cbk(win);
            });

            win.on('close', () => {
                self.destroy();
                //app.quit();
            });

            return win;
        },

        destroy() {
            this.readyQ = false;
            this.aliveQ = false;
            //console.log('log wind destroyed');
            //windows.log.win.close();
            windows.log.win.destroy();

            //this.win = false;
        }
    },

    windows: [],

    focused: {
        win: false,
        last: [],

        add (window) {
            //if (win !== false) unshift(this.last, win);
            this.win = window;
        },
        remove(window) {
            if (this.win == window) this.win = false;
        },

        call (type, args) {
            const self = this;
            console.log(type);
            if (!self.win) {

                //special cases - open window if not shown
                if (type === 'newnotebook' || type === 'settings' || type === 'newshortnote') {
                    create_window({url: server.url.default(), focus: true}, (window) => {
                        window.webContents.send('call', type);
                    });
                    return;
                }

                dialog.showMessageBoxSync({message: 'There is no window opened to perform your action'});
                return;
            }

            self.win.webContents.send(type, args);
        }
    }
};

function ensureDirectoryExistence(filePath) {
    var dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
      return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
  }

const dumpLogs = (cbk) => {
    const p = path.join(installationFolder, 'Debug', 'System.log');
    ensureDirectoryExistence(p);
    fs.writeFile(p, windows.log.dump.join('\r\n'), function(err) {
        if (err) throw err;

        shell.showItemInFolder(p);
        shell.beep();
        cbk();
    });


}

const read_wl_settings = () => {
    if (!fs.existsSync(path.join(installationFolder, '_settings.wl'))) return;
    const file = fs.readFileSync(path.join(installationFolder, '_settings.wl'), 'utf8');
    console.log(file);

    const r = new RegExp(/("\w*") -> *\n* *("?[^"|>,]*"?)/gm);
    let m;

    const parse = (s) => {
        if (s == 'True') return true;
        if (s == 'False') return false;
        if (s.charAt(0) === '"') return s.slice(1,-1);
        return s;
    }

    server.frontend = {};
    while (m = r.exec(file)) {
        server.frontend[m[1].slice(1,-1)] = parse(m[2]);
    }

    //if ('RunInTray' in server.frontend && ! server.frontend.RunInTray) {
        //server.frontend.RunInTray = false;
   // } 

    console.log(server.frontend);
}

function create_window(opts, cbk = () => {}) {
        //default options
        const defaults = {
            title: 'Notebook',
            show: true,
            contextMenu: true,
            focus: false,
            width: 1024,
            height: 640,
            override: {}
        };



        const options = Object.assign({}, defaults, opts);
        options.minWidth = 576;
        if (!isMac) {
            options.minWidth = 688;
        }        

        if ((new RegExp(/gptchat/)).exec(options.url)) {
            options.minWidth = 200;
        }

        if ((new RegExp(/docFind/)).exec(options.url)) {
            options.width = options.minWidth;
        }
        

        if (new RegExp(/acknowledgments/).exec(options.url)) {
            options.height = 310;
        }

        if (new RegExp(/window/).exec(options.url)) {
            options.minWidth = 100;
            options.width = 500;
            options.height = 500;
        }        
        

        if ((new RegExp(/little/)).exec(options.url)) {
            options.minWidth = 500*1024.0/800.0;;
            options.width = 576*1024.0/800.0;
            options.height = 520*640.0/600.0;
        }



        if (options.overlay) {
            options.width = options.minWidth;
            options.height = 2*112 * 640.0/600.0;
            options.override.frame = false;
            options.override.resizable = false;
            options.override.transparent = true;
            options.override.titleBarStyle = undefined;
            options.override.titleBarOverlay = undefined;
            options.override.vibrancy = undefined;
            options.override.backgroundMaterial = false; 
        }

        let win;

        if (isMac) {
            win = new BrowserWindow({
                vibrancy: "sidebar", // in my case...
                frame: true,
                titleBarStyle: 'hiddenInset',
                width: Math.round(options.width*800.0/1024),
                height: Math.round(options.height*600.0/640),
                minWidth: Math.round(options.minWidth),
                //backgroundMaterial: 'acrylic',
                title: options.title,
                //transparent:true,
                show: options.show,
                webPreferences: {
                    preload: path.join(__dirname, 'preload_main.js')
                },
                ...options.override

            });
        } else if (isWindows) {

            /*win = new BrowserWindow({
                width: 800,
                height: 600,
                title: options.title,
                show: options.show,
                autoHideMenuBar: true,
                titleBarOverlay: true,
                titleBarStyle: 'hidden',
                webPreferences: {
                    preload: path.join(__dirname, 'preload_main.js'),
                    enableRemoteModule: true,
                    nodeIntegration: true
                }
            });*/

            //let mica = 'mica';
            let mica = server.frontend.WindowsBackgroundMaterial || 'tabbed';
            if (server.frontend.WindowsLegacy) mica = false;

            win = new BrowserWindow({
                frame: true,
                autoHideMenuBar: true,
                titleBarStyle: 'hidden',
                titleBarOverlay: {
                  color: 'rgba(255, 255, 255, 0.0)',
                  symbolColor: 'rgba(128, 128, 128, 1.0)'
                },

                width: Math.round(options.width),
                height: Math.round(options.height),
                minWidth: Math.round(options.minWidth),
                backgroundMaterial: mica,
                title: options.title,
                //transparent:true,
                maximizable: true,

                show: options.show,
                webPreferences: {
                    preload: path.join(__dirname, 'preload_main.js')
                },
                ...options.override

            });

            //win.setVibrancy('appearance-based');

            //Windows 10-11 specific settings for transparency
            /*if (IS_WINDOWS_11) {
                win.setMicaEffect();
                //win.setMicaTabbedEffect();
                ///win.setMicaAcrylicEffect();
                win.setRoundedCorner();
                win.setAutoTheme();
            } else {
                //win.setAcrylic();
                const checkTheme = () => {
                    if (!nativeTheme.shouldUseDarkColors) win.setBackgroundColor("#fff");
                    else win.setBackgroundColor("#000");
                }

                nativeTheme.on("updated", checkTheme);
                win.on('closed', () => {
                    nativeTheme.removeListener("updated", checkTheme);
                });

                checkTheme();
                //win.setRoundedCorner();
            }*/
            if (!options.overlay) {
                if (!IS_WINDOWS_11 || server.frontend.WindowsLegacy) {
                const checkTheme = () => {
                    if (!nativeTheme.shouldUseDarkColors) {
                        win.setBackgroundColor("#fff");
                        //titleBarOverlay
                    } else {
                        win.setBackgroundColor("#000");
                    }
                }

                nativeTheme.on("updated", checkTheme);
                win.on('closed', () => {
                    nativeTheme.removeListener("updated", checkTheme);
                });

                checkTheme();
                } else {
                //a bug with maximizing the window
                //https://github.com/electron/electron/issues/38743

                win.once('maximize', () => {
                    const checkTheme = () => {
                        if (!nativeTheme.shouldUseDarkColors) {
                            win.setBackgroundColor("#fff");
                            //titleBarOverlay
                        } else {
                            win.setBackgroundColor("#000");
                        }
                    }

                    nativeTheme.on("updated", checkTheme);
                    win.on('closed', () => {
                        nativeTheme.removeListener("updated", checkTheme);
                    });

                    checkTheme();
                });



                }
            }

        } else {
            win = new BrowserWindow({
                frame: true,
                autoHideMenuBar: true,
                titleBarStyle: 'hidden',
                titleBarOverlay: true,
                width: Math.round(options.width),
                height: Math.round(options.height),
                minWidth: Math.round(options.minWidth),
                title: options.title,
                //transparent:true,
                maximizable: true,

                show: options.show,
                webPreferences: {
                    preload: path.join(__dirname, 'preload_main.js')
                },
                ...options.override,
                icon: path.join(__dirname, "build", "512x512.png")
            });
        }

        if (options.overlay) {
            win.once('blur', () => {
                win.close();
            })
        }

        //search on the page (just for debugging)
        win.webContents.on('found-in-page', (event, result) => {
            //show results when Ctrl+F pressed
            console.log(result)
        });

        //permissions of the window
        setHID(win);

        //focus window
        if (options.focus) {
            win.focus();
            windows.focused.add(win);
        }

        win.on('focus', () => {
            windows.focused.add(win);
        });

        win.uuid = uuid4();

        win.on('close', () => {
            windows.focused.remove(win);
            windows.windows.splice(windows.windows.findIndex(a => a.uuid === win.uuid) , 1);
        });

        //extend context menu
        if (options.contextMenu) {
            contextMenu({
                window: win,
                prepend: (defaultActions, parameters, browserWindow) => contextMenuExtensions.map((mi) => {
                    let visible = false;

                    switch(mi.visible) {
                        case 'selection':
                            visible =  parameters.selectionText.trim().length > 0;
                        break;
                        default:
                            visible = true;
                    };

                    const onclick = () => {
                        win.webContents.send('context', mi.event);
                    }

                    return ({
                        label: mi.label,
                        // Only show it when right-clicking images
                        visible: visible,
                        click: onclick
                    })
                })
                ,

                menu: (actions, props, browserWindow, dictionarySuggestions) => [
                    ...dictionarySuggestions,
                    actions.separator(),
                    actions.cut(),
                    actions.copy(),
                    actions.paste(),
                    actions.separator(),
                    actions.inspect()
                ]
            });
        }

        if (!options.url) {
            console.error('No url is provided!');
            return;
        }



        if (options.cacheClear) {
            win.webContents.session.clearCache();
        }

        //callback when it is ready
        if (options.show) {
            cbk(win);
        } else {
            win.once('ready-to-show', () => {
                win.show();
                cbk(win);
            });
        }

        //add to the list of opened windows
        windows.windows.push(win);


        const contents = win.webContents;
        //handlers for internal links and pop-ups




        win.webContents.setWindowOpenHandler(({ url }) => {
            console.log(url);
            const u = new URL(url);



            //if it is on the same domain
            if (u.hostname === (new URL(server.url.default())).hostname) {
                create_window({url: url, show: true, parent: win});

            } else {
                //open in the default user's browser
                shell.openExternal(url);
            }

            return { action: 'deny' };
        });

        if ((new RegExp(/gptchat/)).exec(options.url)) {
            if (options.parent) {


                if (options.parent.isMaximized()) options.parent.unmaximize();

                const pos = options.parent.getPosition();
                const dims = options.parent.getSize();

                const primaryDisplay = screen.getPrimaryDisplay();
                const { width, height } = primaryDisplay.workAreaSize;
                console.warn({screen: width, parentPos: pos, parentdims:dims});


                if (pos[0]+dims[0] + 310 > width) {
                    console.warn('Contaner Overflow!');
                    if (dims[0] + 310 + 50 > width) {
                        console.warn('Resize parent');
                        options.parent.setPosition(50, pos[1], true);
                        const newwidth = width - 310 - 50;
                        options.parent.setBounds({ width: newwidth, animate: true}, true);
                        win.setBounds({ width: 300, height:dims[1], animate: true}, true);
                        win.setPosition( newwidth + 10 + 50, pos[1], true);
                    } else {
                        options.parent.setPosition(50, pos[1], true);
                        win.setBounds({ width: 300, height:dims[1], animate: true}, true);
                        win.setPosition(dims[0] + 50 + 10, pos[1], true);
                    }
                } else {
                    win.setBounds({ width: 300, height:dims[1], animate: true}, true);
                    win.setPosition(pos[0]+dims[0] + 10, pos[1], true);
                }
            } else {
                win.setBounds({ width: 300, animate: true}, true);
            }
        }

        win.loadURL(options.url);

        win.on('focus', () => {
            win.webContents.send('focus');
        });

        win.on('blur', () => {
            win.webContents.send('blur');
        });


        return win;
}




/* APP Logic */

app.on('will-quit', (e) => {
    console.log('exiting the server...');

    //e.preventDefault();
    server.shutdown();
});

app.on('before-quit', (e) => {
    console.log('aaahhh...');
    if (server.debug) {
        e.preventDefault();

        dumpLogs(()=>{
            server.debug = false;
            server.shutdown();
            app.exit(0);
        });
        return false;
    }
    
    //server.shutdown();
    if ((server.browserMode || server.frontend.RunInTray) && process.platform !== 'darwin') {
    
        e.preventDefault();
        console.log('aaahhh...');
        tray.fireBallon()

        
    }
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin' && !(server.browserMode || server.frontend.RunInTray)) {app.quit()} else {
        if ((server.browserMode || server.frontend.RunInTray) && process.platform !== 'darwin') {
            console.log('aaahhh...');
            tray.fireBallon()
        }
    }
})



app.on('open-file', (ev, path) => {
    ev.preventDefault();
    app.addRecentDocument(path);
    if (!server.running) {
        server.path.requested = path;
        return;
    }

    if (isFile(path))
        create_window({url: server.url.default('local') + `/` + encodeURIComponent(path), title: path, show: true, focus: true});
    else
        create_window({url: server.url.default('local') + `/folder/` + encodeURIComponent(path), title: path, show: true, focus: true});
})

app.on('open-url', (event, url) => {
    const protocol = new RegExp('wljs-url-message:\/\/(.*)').exec(url);
    console.log(protocol);

    if (!server.running) {
        server.path.requested = path;
        server.protocol = protocol[1];
        return;
    }

    create_window({url: server.url.default('local') + `/protocol/` +protocol[1], title: 'WLJS Window', show: true, focus: true});
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        //const o = createWindow(globalURL);
        create_window({url: server.url.default('local'), focus: true, show: true});
    }
})


// Behaviour on the second instance for the parent process
const gotSingleInstanceLock = app.requestSingleInstanceLock();
if (!gotSingleInstanceLock) app.quit();
else {
    app.on('second-instance', (_, argv) => {
        //User requested a second instance of the app.
        //argv has the process.argv arguments of the second instance.
        //on windows IT SENDS --allow-file-access-from-files as a second argument.!!!
        if (app.hasSingleInstanceLock()) {
            windows.log.print('second instance was blocked');
            windows.log.print(argv[0]);
            windows.log.print(argv[1]);
            windows.log.print(argv);

            const protocol = new RegExp('wljs-url-message:\/\/(.*)').exec(argv[argv.length - 1]);
            if (protocol) {
                console.log(protocol[1]);
                create_window({url: server.url.default('local') + `/protocol/` + protocol[1], title:'WLJS Notebook', focus: true, show: false});
                return;
            }

            let pos = 1;
            if (new RegExp('--').exec(argv[pos])) pos++;
            if (new RegExp('--').exec(argv[pos])) pos++;

            if (isFile(argv[pos])) {
                create_window({url: server.url.default('local') + `/` + encodeURIComponent(argv[pos]), title: argv[pos], focus: true, show: false});
            } else {
                create_window({url: server.url.default('local') + `/folder/` + encodeURIComponent(argv[pos]), title: argv[pos], focus: true, show: false});
            }
        }
    });
}

if (process.defaultApp) {
    if (process.argv.length >= 2) {
      app.setAsDefaultProtocolClient('wljs-url-message', process.execPath, [path.resolve(process.argv[1])])
    }
  } else {
    app.setAsDefaultProtocolClient('wljs-url-message')
  }

//reset HTTP cache in the browser if an update flag was detected (created by WL)
const checkCacheReset = (cbk) => {
    if (fs.existsSync(path.join(installationFolder, '.wasupdated'))) {
        fs.unlinkSync(path.join(installationFolder, '.wasupdated'));
        session.defaultSession.clearStorageData();
        session.defaultSession.clearCache();

        server.wasUpdated = true;

        cbk();

        windows.log.print('HTTP Cache reset!', "\x1b[32m");
        windows.log.info('HTTP Cache reset');
    }
}

const powerSaver = () => {
    console.log('Electron >> starting powersafe blocker');
    powerSaveId = powerSaveBlocker.start('prevent-app-suspension');

    setInterval(() => {
        //console.log('Electron >> checking power saving...');
        if (BrowserWindow.getAllWindows().length > 0) {
            if (!powerSaveBlocker.isStarted(powerSaveId)) {
                console.log('Electron >> starting powersafe blocker');
                powerSaveId = powerSaveBlocker.start('prevent-app-suspension');
            }
        } else {
            if (powerSaveBlocker.isStarted(powerSaveId)) {
                console.log('Electron >> stopping powersafe blocker');
                powerSaveBlocker.stop(powerSaveId);
            }
        }
    }, 15000);

    powerMonitor.on('suspend', () => {

    });

    powerMonitor.on('lock-screen', () => {

    })
}


/* App Ready */

app.whenReady().then(() => {
    if (!isMac) {
        if (!isWindows) {
            tray = new Tray(path.join(__dirname, 'build', '512x512.png'));
        } else {
            tray = new Tray(path.join(__dirname, 'build', '256x256_new.ico'));
        }
        //console.log(path.join(__dirname, 'build', '256x256_new.ico'));
        tray.setToolTip('Sorry, I am buzy');
        tray.setContextMenu(Menu.buildFromTemplate([
            {
              label: 'Quit', click: function () {
                server.browserMode = false;
                server.frontend.RunInTray = false;
                app.quit();
              }
            },


            {
                label: 'Prompt', click: function () {
                    if (server.running)
                        create_window({url: server.url.default() + '/prompt', title: 'Overlay', overlay: true, show: true, focus: true});
                }
              },

              {
                label: 'Create window', click: function () {
                    if (server.running)
                        create_window({url: server.url.default(), title: 'WLJS Notebook', show: true, focus: true});
                }
              }
          ]));

        tray.fireBallon = () => {
            tray.displayBalloon({
                title: "WLJS Server",
                content: "Running in the background as a server",
                largeIcon: false
              });
              setTimeout(() => {tray.displayBalloon({
                title: "WLJS Server",
                content: "Running in the background as a server",
                largeIcon: false
              });console.log("QQQ")}, 1000);
              console.log("QQQ")
        }  

          
    }

    pluginsMenu.fetch();
    buildMenu({plugins: pluginsMenu.items});

    globalShortcut.register('CommandOrControl+W', () => {
        console.log('Electron loves global shortcuts!')
    });

    powerSaver();

    ipcMain.on('debug', () => {
        server.debug = true;

    });

    read_wl_settings();

    if (server.frontend.Theme) {
        nativeTheme.themeSource = server.frontend.Theme.toLowerCase();
    }


    //make a log window and start WL
    windows.log.construct((log_window) => {
        windows.log.version(app.getVersion());
        ipcMain.on('reinstall', () => {
            reinstall((state) => {
                if (state) {
                    app.relaunch();
                    app.quit();
                }
            }, log_window);
        });
        //new promt('input', 'Do you have Wolfram Engine installed?', (answer) => console.log(answer), log_window);
        check_installed(() => check_wl(load_configuration(), () => store_configuration(() => start_server(log_window)), log_window), log_window);
    });

    //again in a case if something changed
    read_wl_settings();

    

    //server.url.local = `http://127.0.0.1:20560`;
    //create_window({url: 'http://127.0.0.1:20560', show: true, focus: true, cacheClear: true});

    ipcMain.on('system-harptic', () => {
        trackpadUtils.triggerFeedback();
    });

    ipcMain.handle('capture', async (e, area) => {
        const img = await e.sender.capturePage(area)
        return img.toDataURL();
    });

    ipcMain.on('set-progress', (e, p) => {
        const senderWindow = BrowserWindow.fromWebContents(e.sender); // BrowserWindow or null
        if (senderWindow)
            senderWindow.setProgressBar(p);
    });

    ipcMain.on('system-window-enlarge-if-needed', (e, p) => {
        const bonds = windows.focused.win.getBounds();
        if (bonds.width < 800) {
            windows.focused.win.setBounds({ width: 800 , animate: true}, true);
        }
    });

    ipcMain.on('resize-window-by', (e, delta) => {
        const senderWindow = BrowserWindow.fromWebContents(e.sender); // BrowserWindow or null
        if (senderWindow) {
            const bonds = senderWindow.getBounds();
            const pos = senderWindow.getPosition();
            const dims = senderWindow.getSize();

            const primaryDisplay = screen.getPrimaryDisplay();
            const { width, height } = primaryDisplay.workAreaSize;

            if (delta[0] === 0) {
                if (bonds.height + delta[1] > height*0.5) {
                    console.log('Large resize. Adjusting...');
                    let mid = height/2.0 - ((bonds.height + delta[1])/2.0);
                    if (mid < 0)
                        mid = 100;

                    let wheight = bonds.height + delta[1];
                    if (wheight + mid > height) {
                        console.log('OVERLOFW!');
                        wheight = height - mid - 100;
                    }
                    console.log({ y: mid, height: wheight, animate: true});
                    senderWindow.setBounds({  height: wheight, animate: true}, true);
                    if (wheight > height / 1.45) senderWindow.center();
                } else {
                    console.log('Not too big');
                    let mid = bonds.y;
                    let wheight = bonds.height + delta[1];
                    if (wheight + mid > height) wheight = height - mid - 100;

                    console.log({ height: wheight, animate: true});
                    senderWindow.setBounds({ height: wheight, animate: true}, true);
                    if (wheight > height / 1.45) senderWindow.center();
                }
                //senderWindow.center();
            } else {
                let wwidth = bonds.width + delta[0];
                if (bonds.height + delta[1] > height*0.5) {
                    console.log('Large resize. Adjusting...');
                    let mid = height/2.0 - ((bonds.height + delta[1])/2.0);
                    if (mid < 0)
                        mid = 100;

                    let wheight = bonds.height + delta[1];
                    if (wheight + mid > height) {
                        console.log('OVERLOFW!');
                        wheight = height - mid - 100;
                    }

                    senderWindow.setBounds({  width: wwidth, height: wheight, animate: true}, true);
                    if (wheight > height / 1.45) senderWindow.center();
                } else {
                    console.log('Not too big');
                    let mid = bonds.y;
                    let wheight = bonds.height + delta[1];
                    if (wheight + mid > height) wheight = height - mid - 100;

                    senderWindow.setBounds({ width: wwidth, height: wheight, animate: true}, true);
                    if (wheight > height / 1.45) senderWindow.center();
                }              
                
                //senderWindow.center();
            }
            
        }
    })

    ipcMain.on('system-window-toggle', (e, p) => {
        const bonds = windows.focused.win.getBounds();
        if (bonds.width < 800) {
            if (windows.focused.win.previousWidth) {
                windows.focused.win.setBounds({ width: windows.focused.win.previousWidth , animate: true}, true);
            } else {
                windows.focused.win.setBounds({ width: 800 , animate: true}, true);
            }
        } else {
            windows.focused.win.previousWidth = bonds.width;
            windows.focused.win.setBounds({ width: 600 , animate: true}, true);
        }
    });

    ipcMain.handle('system-save-something', async (event, p) => {
        const result = await dialog.showSaveDialog({ title: p.title, properties: ['createDirectory'], filters: [
            { extensions: p.extension }
        ]});

        if (!result.canceled) {
            return encodeURIComponent(result.filePath);
        } else {
            return false;
        }
    });

    ipcMain.handle('system-open-folder-something', async (event, p) => {
        const result = await dialog.showOpenDialog({ title: p.title, buttonLabel:'Set home', properties: ['openDirectory', 'createDirectory']});

        if (!result.canceled) {
            return encodeURIComponent(result.filePaths[0]);
        } else {
            return false;
        }
    });


    ipcMain.on('system-window-expand', (e, p) => {
        windows.focused.win.setBounds({ width: 800 , animate: true});
    });

    ipcMain.on('open-tools', () => {
        console.warn('Dev tools!');
        windows.focused.win.webContents.openDevTools()
    });

    ipcMain.on('system-window-shrink', (e, p) => {
        windows.focused.win.setBounds({ width: 600 , animate: true});
    });

    //set up search on-page (any focused windows)
    ipcMain.on('search-text', (event, arg) => {
        let nextRes = arg.direction == 'next' ? true : false
        const requestId = windows.focused.win.webContents.findInPage(arg.searchText, {
            forward: true,
            findNext: nextRes,
            matchCase: false
        });
    });
    ipcMain.on('stop-search', (event, arg) => {
        windows.focused.win.webContents.stopFindInPage('clearSelection');
    });

    //system commands to open file explorers and etc
    ipcMain.on('system-open', (e, p) => {
        const dir = JSON.parse(p);
        if (dir[0].length == 0) {
            shell.showItemInFolder('/'+path.join(...dir));
        } else {
            shell.showItemInFolder(path.join(...dir));
        }
    });

    ipcMain.on('system-menu', (e, p) => {
        const menusection = p;
        callFakeMenu[menusection]();
    });

    ipcMain.on('system-open-external', (e, p) => {
        const url = p;
        shell.openExternal(url);
    });

    ipcMain.on('system-open-path', (e, p) => {
        const url = p;
        shell.openPath(url);
    });

    ipcMain.on('system-show-folder', (e, p) => {
        const url = p;
        shell.showItemInFolder(url);
    });

    

    ipcMain.on('system-beep', (e, p) => {
        shell.beep();
    });    



    //promts resolver
    ipcMain.on('promt-resolve', (e, id, val) => {
        promts_hash[id].resolve(val);
    });

    ipcMain.on('locate-logfile', () => {
        shell.showItemInFolder(installationFolder);
    });

    globalShortcut.register(shortcut("overlay"), () => {
        if (server.running)
            create_window({url: server.url.default() + '/prompt', title: 'Overlay', overlay: true, show: true, focus: true});
    });

    //purge cache if an update was detected (using a special file created by WL)


    let cinterval;
    let tmout;

    /*cinterval = setInterval(checkCacheReset(() => {
        clearInterval(cinterval);
        clearTimeout(tmout);
    }), 5000);

    tmout = setTimeout(() => {
        clearInterval(cinterval);
    }, 60 * 1000)  */
});


function start_server (window) {
    console.log('Started! app');
    // app.quit();
    if (!server.startedQ) {
        windows.log.clear();
        windows.log.print('Internal error. Wolframscript has not started');
        setTimeout(() => app.quit(), 3000);
        return;
    }

    windows.log.info('Starting server');
    server.wolfram.process.stdin.write(`Get["${runPath.replace(/\\/g, "\\\\")}"]\n`);

    const PACError = new RegExp(/Execution of PAC script at/);

    let url_match;
    const url_reg = new RegExp(/Open http:\/\/(?<ip>[0-9|.]*):(?<port>[0-9]*) in your browser/);

    server.wolfram.streamer = (data) => {
        const string = data.toString();
        windows.log.print(string);

        

        //listerning for a specific line in output
        url_match = url_reg.exec(string);
        if (url_match && !server.running) {
            //open a window, means server has started
            server.url.local = `http://${url_match.groups.ip}:${url_match.groups.port}`;



            console.log('Open first window');

            //open a first window. coudl be a file or second instance
            create_first_window();
            server.running = true;

            //reset to the default streamer
            server.wolfram.streamer = (data) => {
                const string = data.toString();
                windows.log.print(string);
            };

            if (!server.debug) setTimeout(() => {windows.log.destroy()}, 300);
        }

    };
    server.wolfram.errors = (data) => {
        const string = data.toString();

        //checking errors
        if (PACError.exec(string)) {
            new promt('binary', 'There might be an problem with Wolfram Engine (Execution of PAC script). If you face any further issues, try to restart frontend with no active internet connection', ()=>{}, window);
        }

        windows.log.print(string, '\x1b[46m');
    };

    server.wolfram.process.stdout.on('data', server.wolfram.streamer);
    server.wolfram.process.stderr.on('data', server.wolfram.errors);
}




//applicable only to the first time!!!
function create_first_window() {
    //we need to decide what to open!
    if (server.wasUpdated) { //reset app menu
        pluginsMenu.fetch();
        buildMenu({plugins: pluginsMenu.items});
    }

    //Windows/Unix open a file
    if (!isMac && server.startedQ && !server.running && process.argv[1]) {
        console.log('OPEN a FILE WIN/Linux');


        const protocol = new RegExp('wljs-url-message:\/\/(.*)').exec(process.argv[process.argv.length - 1]);
        if (protocol) {
            console.log(protocol[1]);
            create_window({url: server.url.default('local') + `/protocol/` + protocol[1], title:'WLJS Notebook', focus: true, show: false});
            server.wasUpdated = false;
            return;
        }

        if (process.argv[1].length > 3) {
            app.addRecentDocument(process.argv[1]);
            create_window({url: server.url.default() + '/' + encodeURIComponent(process.argv[1]), title: process.argv[1], show: false, focus: true, cacheClear: server.wasUpdated});
        } else  {
            create_window({url: server.url.default(), title: 'Notebook', show: false, focus: false, cacheClear: server.wasUpdated});
        }

        server.wasUpdated = false;
        return;
    }

    //Mac
    if (isMac && server.startedQ && !server.running && server.protocol) {
        console.log('OPEN a URL on OSX');

        //app.addRecentDocument(server.path.requested);
        create_window({url: server.url.default() + '/protocol/' + server.protocol, title: 'WLJS Window', show: false, focus: true, cacheClear: server.wasUpdated});
        server.protocol = undefined;

        server.wasUpdated = false;
        return;
    }

    //Mac
    if (isMac && server.startedQ && !server.running && server.path.requested) {
        console.log('OPEN a FILE OSX');

        app.addRecentDocument(server.path.requested);
        create_window({url: server.url.default() + '/' + encodeURIComponent(server.path.requested), title: server.path.requested, show: false, focus: true, cacheClear: server.wasUpdated});
        server.path.requested = undefined;

        server.wasUpdated = false;
        return;
    }

    //nothing... just regular start

    console.log('Regular start. Open default url');
    create_window({url: server.url.default(), title: 'Notebook', show: true, focus: false});
    server.wasUpdated = false;
}


const promts_hash = {}
class promt {
    constructor(type = 'binary', title, cbk, window) {
        this.uuid = uuid4();

        switch(type) {
            case 'binary':
                window.webContents.send('yesorno', this.uuid, title);
                this.promise = (result) => cbk(result)
            break;

            case 'input':
                window.webContents.send('promt', this.uuid, title);
                this.promise = (result) => cbk(result)
                //prompt('Action needed', title).then((result) => {
                  //  cbk(result)
                //});
            break;
        }

        promts_hash[this.uuid] = this;
    }

    resolve(value) {
        this.promise(value);
        delete promts_hash[this.uuid];
    }
}

function store_configuration(cbk) {
    const opts = {
        wolfram: server.wolfram
    };

    fs.writeFile(path.join(installationFolder, 'configuration.ini'), JSON.stringify(opts), function(err) {
        if (err) throw err;
    });

    cbk();
}

function load_configuration() {
    if (!fs.existsSync(path.join(installationFolder, 'configuration.ini'))) return undefined;
    return JSON.parse(fs.readFileSync(path.join(installationFolder, 'configuration.ini'), 'utf8'));
}

//checking if there is working Wolfram Kernel.
function check_wl (configuration, cbk, window) {
    if (configuration) server.wolfram = {...server.wolfram, ...configuration.wolfram};

    windows.log.print("");
    windows.log.info("Starting wolframscript");
    windows.log.print("Starting wolframscript by path: " + server.wolfram.path);
    let program;

    try{
        console.log('TRY');
        program = spawn(server.wolfram.path, server.wolfram.args, { cwd: workingDir });
    } catch (err) {
        windows.log.clear();
        windows.log.print(err);
        console.log(err);
        windows.log.info("wolframscript was not found!");
        //windows.log.print('Do you have Wolfram Engine installed?', '\x1b[42m');
        new promt('binary', 'Do you have Wolfram Engine installed?', (answer) => {
            if (answer) {
                windows.log.print("");
                new promt('binary', 'Please, locate an executable called `wolframscript` or `WolframKernel`', ()=>{}, window);
                windows.log.print('Please, locate an executable called `wolframscript` or `WolframKernel`', '\x1b[44m');

                setTimeout(() => {
                    const promise = dialog.showOpenDialog({ title: 'Locate wolframscript', properties: ['openFile', 'showHiddenFiles', 'treatPackageAsDirectory', 'dontAddToRecent']});
                    promise.then((res) => {
                        if (!res.canceled) {
                            server.wolfram.path = res.filePaths[0];
                            console.log(res.filePaths);
                            windows.log.clear();
                            check_wl(undefined, cbk, window);
                        } else {
                            windows.log.clear();
                            check_wl(undefined, cbk, window);
                        }
                    });
                }, 2000);

            } else {
                install_wl(window);
            }
        }, window);
        return;
    }


    program.on('close', (code) => {


        if (_nohup) {
            windows.log.info("Process exited with code "+code);
            windows.log.print("Process exited with code "+code);
            program.exitedAlready = true;

        } else {
            windows.log.info("Process exited abnormally with code "+code);
            windows.log.print("Process exited abnormally with code "+code);
            windows.log.print("Restarting soon...");
            setTimeout(() => {
                check_wl(undefined, cbk, window);
            }, 3000);
        }

    });

    //error
    program.on('error', function(err) {
        windows.log.print("");
        windows.log.info("Cannot execute a given process");
        windows.log.print("Cannot execute a given process", '\x1b[46m');
        windows.log.print(String(err));

        setTimeout(() => {
            windows.log.clear();
            windows.log.print(err);
            console.log(err);
            //windows.log.print('Do you have Wolfram Engine installed?', '\x1b[42m');
            windows.log.info("Cannot locate wolframscript!");
            new promt('binary', 'Do you have Wolfram Engine installed?', (answer) => {
                if (answer) {
                    windows.log.print("");
                    
                    windows.log.print('Please, locate an executable called `wolframscript` or `WolframKernel`', '\x1b[44m');

                    setTimeout(() => {
                        const promise = dialog.showOpenDialog({ title: 'Locate wolframscript', properties: ['openFile', 'showHiddenFiles', 'treatPackageAsDirectory', 'dontAddToRecent']});
                        promise.then((res) => {
                            if (!res.canceled) {
                                server.wolfram.path = res.filePaths[0];
                                console.log(res.filePaths);
                                windows.log.clear();
                                check_wl(undefined, cbk, window);
                            } else {
                                windows.log.clear();
                                check_wl(undefined, cbk, window);
                            }
                        });
                    }, 2000);

                } else {
                    install_wl(window);
                }
            }, window);
            return;
        }, 2000);

    });

    let _nohup = false;

    //for debugging only
    /*program.stderr.on('data', (data) => {
        windows.log.print(data.toString());
    });

    program.stdout.on('data', (data) => {
        windows.log.print(data.toString());
    }); */

    program.stderr.once('data', (data) => {
        console.warn(data.toString());
        if (_nohup) return;
        _nohup = true;

        windows.log.print("");

        //TROUBLESHOOTING
        if (default_error_handling(()=>{
            //If managed
            //Wolframscript started
            server.wolfram.process = program;
            server.running = false;
            server.startedQ = true;
            windows.log.clear();
            cbk();
        },
        () => {
            //if failed
            windows.log.clear();

            program.stdin.end();
            program.stdout.destroy();
            program.stderr.destroy();

            program.kill('SIGKILL');
            kill_all(() => console.log('killed!'));
            check_wl(undefined, cbk, window);
        }, data.toString(), program, window)) return;

        //if we did not manage to fix issues...
        windows.log.print(data.toString(), '\x1b[46m');
        windows.log.print("");

        //this is a sign that the command was not found
        setTimeout(() => {
            windows.log.clear();
            check_wl(undefined, cbk, window);

        }, 3000);
    });



    program.stdout.once('data', (data) => {
        //this is ok. wolframscript now is running
        if (_nohup) return;
        _nohup = true;

        const s = data.toString();

        windows.log.print("");

        //TROUBLESHOOTING
        if (default_error_handling(()=>{
            //If managed
            //Wolframscript started
            windows.log.clear();
            server.wolfram.process = program;
            server.running = false;
            server.startedQ = true;
            cbk();
        },
        () => {
            //if failed

            program.stdin.end();
            program.stdout.destroy();
            program.stderr.destroy();


            program.kill('SIGKILL');
            kill_all(() => console.log('killed!'));
            windows.log.clear();
            check_wl(undefined, cbk, window);
        }, s, program, window)) return;

        //If OK
        //Wolframscript started
        if (new RegExp('Wolfram').exec(s)) {
            windows.log.print(s);
            server.wolfram.process = program;
            server.running = false;
            server.startedQ = true;
            windows.log.clear();
            cbk();
            return;
        }


        windows.log.print("");
        windows.log.print(s);

        //wait for more output
        program.stdout.once('data', (data) => {
            //If OK
            //Wolframscript started
            if (new RegExp('Wolfram').exec(data.toString())) {
                windows.log.print(data.toString());
                server.wolfram.process = program;
                server.running = false;
                server.startedQ = true;
                cbk();
                return;
            }

            //if not
            windows.log.print("");
            windows.log.print(data.toString());
            windows.log.print("");
            windows.log.print("Unexpected reply from wolframscript. Restart in 5 sec", '\x1b[46m');
            windows.log.info("Unexpected reply from wolframscript. Restart in 5 sec");
            windows.log.print("Expected 'Wolfram' string");

            setTimeout(()=>{

                program.stdin.end();
                program.stdout.destroy();
                program.stderr.destroy();


                program.kill('SIGKILL');
                kill_all(() => console.log('killed!'));
                windows.log.clear();
                check_wl(undefined, cbk, window);
            }, 5000);
        });
    });

}

function default_error_handling(success, reject, s, program, window) {
    //1# activation issues
    if (new RegExp('Wolfram product is not activated').exec(s)) {
        windows.log.print("Automatic activation in 3 seconds...", '\x1b[44m');
        windows.log.info("Automatic activation in 3 seconds...");

        setTimeout(() => {
            server.wolfram.args.push('-activate');
            windows.log.clear();
            reject();
        }, 3000);
        return true;
    }

    //on success of activation
    if (new RegExp('activated').exec(s)) {
        server.wolfram.args.pop();
        windows.log.clear();
        reject();
        return true;
    }


    //#2 Too many running Kernels
    if (new RegExp('The Wolfram Engine could not be').exec(s)) {
        windows.log.print("It seems you have some Wolfram Kernels running in the background or on another machine. Due to the Wolfram licensing limitations it is not allowed to run more than 2. WLJS Notebook requires exactly 2 to run locally.", '\x1b[44m');
        windows.log.print("");
        windows.log.info('It seems you have other Wolfram Kernels running in the background. Please stop them');

        //windows.log.print('Should we try to kill other processes?', '\x1b[42m');
        new promt('binary','Should we try to kill other Wolfram processes?', (answer) => {
            if (!answer) {
                kill_all(() => {
                    windows.log.clear();
                    reject();
                }, window);
            } else {
                windows.log.clear();
                reject();
            }
        }, window);
        return true;
    }


    //#3 Activation
    if (new RegExp('The Wolfram Engine requires one-time').exec(s)) {
        //windows.log.print('Do you have a developer license from Wolfram?', '\x1b[42m');
        windows.log.info('Activation required');

        new promt('binary', 'Do you have a developer license activated?', (answer) => {


            if (!answer) {
                windows.log.clear();
                windows.log.print('Please get the license from Wolfram website. A window will open shortly...');
                shell.openExternal("https://www.wolfram.com/engine/free-license/");
                setTimeout(() => {
                    windows.log.clear();
                    activate_wl(program, success, () => {
                        //if rejected
                        windows.log.clear();
                        reject();
                    }, window);
                }, 3000);

            } else {
                

                if (program.exitedAlready) {
                    windows.log.print('Something went wrong with wolframscript.\n\r Try to run wolframscript from your terminal');
                    windows.log.print('Quitting in 5 seconds');
                    setTimeout(() => {
                        app.quit();
                    }, 5000);
                    return;
                }

                windows.log.clear();

                activate_wl(program, success, () => {
                    //if rejected
                    windows.log.clear();
                    reject();
                }, window);
            }
        }, window);

        return true;
    }

    return false;
}

function kill_all(cbk, window) {

    switch(process.platform) {
        case 'win32':
            exec('taskkill /F /IM WolframKernel.exe /T');
        break;
        default: // Linux + Darwin
            exec('pkill -9 -f Wolfram');
        break;
    }

    //windows.log.print('probably killed');
    setTimeout(cbk, 2000);
}


function activate_wl(program, success, rejection, window) {
    windows.log.clear();

    if (program.exitedAlready) {
        windows.log.print('Something went wrong with wolframscript.\n\r Try to run wolframscript from your terminal');
        windows.log.print('Quitting in 5 seconds');
        setTimeout(() => {
            app.quit();
        }, 5000);
        return;
    }

    //answer checkers
    const check = (string) => {
        //keep going...
        if (string.trim().length == 0) return false;

        if (new RegExp('Incorrect').exec(string)) {
            //windows.log.print('Incorrect');
            windows.log.info('Incorrect login/password');
            setTimeout(rejection, 3000);
            //stop
            return true;
        }

        if (new RegExp('Wolfram Language').exec(string)) {
            //windows.log.print('Success!');
            windows.log.info('Activated');
            success();
            return true;
        }

        //continue
        return false;
    }


    windows.log.print('Enter your Wolfram ID in the field box at the bottom');

    new promt('input', 'Wolfram ID', (result) => {
        program.stdin.write(result.trim());
        program.stdin.write('\n');

        windows.log.clear();
        windows.log.print('Please, enter your password in the field box');
        new promt('input', 'Password', (result) => {
            program.stdin.write(result.trim());
            program.stdin.write('\n');

            windows.log.clear();
            windows.log.print('Waiting for the responce from wolframscript');

            let _nohup = false;
            let timer = setTimeout(() => {
                windows.log.print('Timeout. Restarting in 3 seconds...', '\x1b[42m');
                program.stdin.end();
                program.stdout.destroy();
                program.stderr.destroy();


                program.kill('SIGKILL');
                kill_all(() => console.log('killed!'));
                setTimeout(rejection, 3000);
            }, 15000);

            program.stderr.once('data', (data) => {
                if (_nohup) return;
                _nohup = true;

                clearTimeout(timer);

                windows.log.print(data.toString());
                if (check(data.toString())) return;

                windows.log.print('please, wait...');
                windows.log.info('Please wait');

                program.stderr.once('data', (data) => {
                    windows.log.print(data.toString());
                    if (check(data.toString())) return;
                    //timeout to retry

                    program.stdin.end();
                    program.stdout.destroy();
                    program.stderr.destroy();


                    program.kill('SIGKILL');
                    kill_all(() => console.log('killed!'));
                    setTimeout(rejection, 3000);
                });
            });

            program.stdout.once('data', (data) => {
                if (_nohup) return;
                _nohup = true;

                clearTimeout(timer);

                windows.log.print(data.toString());
                if (check(data.toString())) return;

                windows.log.print('please, wait...');
                windows.log.info('Please wait');

                program.stdout.once('data', (data) => {
                    windows.log.print(data.toString());
                    if (check(data.toString())) return;
                    //timeout to retry
                    program.kill('SIGKILL');
                    kill_all(() => console.log('killed!'));
                    setTimeout(rejection, 3000);
                });
            });
        }, window);
    }, window);
}

function install_wl(window) {
    windows.log.clear();
    windows.log.info('Wolfram Engine is required. Please, install > 13.0.1');
    windows.log.print("Please download and install Wolfram Engine manually. A windows will open shortly. A feature for auto-installation is not supported for now.");
    windows.log.print("");
    windows.log.print("Recommended version is 13.0.1", '\x1b[42m');
    setTimeout(() => {
        shell.openExternal("https://www.wolfram.com/engine/");
        app.quit();
    }, 3000);
}

function reinstall(cbk, window) {
    const toRemove = ['package.json', '.wl_timestamp', '.wljs_timestamp', 'wl_packages_lock.wl', 'wljs_packages_lock.wl', 'wljs_packages_users.wl'];
    const dirToRemove = ['wl_packages', 'Scripts', 'wljs_packages', '__localkernel'];
    const recreate = ['__localkernel'];

    new promt('binary', 'This action will remove wl*, wljs* package folders', (answer) => {
        if (answer) {
            //cbk(true); return;
            if (!app.isPackaged) return cbk(false);

            toRemove.forEach((p) => {
                if (fs.existsSync(path.join(installationFolder, p))) {
                    fs.unlinkSync(path.join(installationFolder, p));
                }
            });
        
            dirToRemove.forEach((p) => {
                if (fs.existsSync(path.join(installationFolder, p))) {
                    fs.rmSync(path.join(installationFolder, p), { recursive: true, force: true });
                }
            });
        
            recreate.forEach((p) => {
                fs.mkdirSync(path.join(installationFolder, p))
            });
        
            cbk(true);
        } else {
            cbk(false);
        }
    }, window);



}

function check_installed (cbk, window) {
    windows.log.print('checking the installation folder...', '\x1b[32m');
    windows.log.print(installationFolder, '\x1b[32m');

    const package = path.join(installationFolder, 'package.json');
    const script = path.join(installationFolder, 'Scripts', 'start.wls');

    //if it is already installed
    if (fs.existsSync(script)) {
        fs.readFile(package, (err, raw) => {
            if (err) {
                windows.log.print('Cannot read '+package+'!');
                windows.log.info('Cannot read bundle files!');
                throw err;
            }

            let data = JSON.parse(raw);
            windows.log.print("");
            windows.log.print('Current version: ' + data["version"], '\x1b[34m');
            const version = parseInt(data["version"].replaceAll(/\./gm, ''));

            //watchdog for internet connection
            const watchdog = setTimeout(() => {
                windows.log.info('Offline mode');
                windows.log.print('No internet connection! Skipping update checks...', '\x1b[32m');
                cbk();
            }, 5000);

            const repo = server.frontend.UpdatesChannelRepo ||  'JerryI/wolfram-js-frontend';
            let branch = server.frontend.UpdatesChannelBranch ||  'main';

            if (branch.trim() == "updates") branch = 'main';

            console.log([repo, branch]);
            //app.exit(-1);

            //check internet
            windows.log.info('Checking updates');
            const test = net.fetch('https://github.com');
            test.then((result) => {
                if (result.status === 200) {
                    clearTimeout(watchdog);

                    //check the official version


                    const request = net.fetch('https://raw.githubusercontent.com/'+repo+'/'+branch+'/package.json');
                    request.then((result) => {
                        if (result.status === 200) {
                            console.log(result);

                            result.text().then((data) => {

                                console.log(data);
                                const remote = JSON.parse(data);
                                if (remote["version"]) {
                                    const rersion = parseInt(remote["version"].replaceAll(/\./gm, ''));
                                    if (rersion > version) {

                                        

                                        windows.log.print('A new version is available. Should we install it?', '\x1b[44m');



                                        windows.log.print(':: warning :: it will clean up `wl_packages`, `wljs_packages` and `Examples` folders', '\x1b[32m');
                                        windows.log.info('Update is available');

                                        new promt('binary', 'A new version is available. Should we install it?', (answer) => {
                                            if (answer) {
                                                const appVersion = parseInt(app.getVersion().replaceAll(/\./gm, ''));
                                                const remoteAppVersion = parseInt(remote["recommended-client-version"].replaceAll(/\./gm, ''));
                                                if (appVersion < remoteAppVersion) {
                                                    new promt('binary', 'A recommended Desktop App version is '+ remote["recommended-client-version"] + ', but you have installed ' + app.getVersion() + '. Some features might not work properly. Continue?', (answer) => {
                                                        if (answer) {
                                                            install_frontend(cbk, window);
                                                        } else {
                                                            cbk();
                                                        }
                                                    });
                                                } else {
                                                    install_frontend(cbk, window);
                                                }                           

                                                
                                            } else {
                                                cbk();
                                            }
                                        }, window);


                                    } else {
                                        windows.log.print('You are using the latest release', '\x1b[32m');
                                        windows.log.info('You are using the latest');
                                        cbk();
                                    }
                                } else {
                                    windows.log.print('Unable to check updates!', '\x1b[42m');
                                    windows.log.print('skipping...', '\x1b[32m');
                                    windows.log.info('Unable to check updates');
                                    cbk();
                                }
                            })
                        } else {
                            windows.log.print('Unable to check updates!', '\x1b[32m');
                            windows.log.print('status code ' + result.status, '\x1b[34m');
                            windows.log.print('skipping...', '\x1b[32m');
                            windows.log.info('Unable to check updates');
                            cbk();
                        }
                    },
                    (rejection) => {
                        windows.log.print('Unable to check updates! Reason:', '\x1b[32m');
                        windows.log.print(JSON.stringify(rejection), '\x1b[34m');
                        windows.log.print('skipping...', '\x1b[32m');
                        windows.log.info('Unable to check updates');
                        cbk();
                    });

                } else {
                    windows.log.print('Failed! using ' + repo + ' and branch ' + branch, '\x1b[32m');
                    windows.log.info('Failed!');
                }
            });
        });

        return;
    }

    windows.log.print('System folder is empty! Starting installation...', '\x1b[32m');
    windows.log.info('Installing WLJS');
    install_frontend(cbk, window);
}


function install_frontend(cbk, window) {
    //watchdog for internet connection
    const watchdog = setTimeout(() => {
        windows.log.print('No internet connection! Using shipped version...', '\x1b[32m');
        windows.log.info('Offline mode. Using shipped packages');
        install_shipped(cbk, window);
    }, 5000);

    //check internet
    const test = net.fetch('https://github.com');
    test.then((result) => {
     if (result.status === 200) {
        clearTimeout(watchdog);

        //set the flag to reset cache of the HTTP client
        server.wasUpdated = true;

        windows.log.clear();
        windows.log.print('Downloading .zip archive to ' + installationFolder + '...', '\x1b[32m');
        

        //path to zip
        const pathToFile = path.join(installationFolder, 'pkg.zip');

        const repo = server.frontend.UpdatesChannelRepo ||  'JerryI/wolfram-js-frontend';
        let branch = server.frontend.UpdatesChannelBranch ||  'main';
        if (branch.trim() == "updates") branch = 'main';

        windows.log.info('Dowloading the latest release from ' + (branch ));

        downloadFile('https://api.github.com/repos/'+repo+'/zipball/'+branch, pathToFile, (file) => {
            windows.log.print('Unzipping...', '\x1b[32m');
            windows.log.info('Unzipping');

            const extracted = path.join(installationFolder, '__extracted');

            if (!fs.existsSync(extracted)) {
                fs.mkdirSync(extracted);
            } else {
                fs.rmSync(extracted, { recursive: true, force: true });
                fs.mkdirSync(extracted);
            }

            const StreamZip = require('node-stream-zip');
            const zip = new StreamZip.async({ file: file });

            zip.extract(null, extracted).then((res) => {
                windows.log.print(res);
                windows.log.print('Extracted', '\x1b[32m');

                windows.log.info('Extracted');

                //remove zip archive
                zip.close();
                fs.unlinkSync(file);

                //read extracted folder
                const sub = fs.readdirSync(extracted)[0];
                windows.log.print(sub);

                //git rid of .git folder
                //fs.unlinkSync(path.join(extracted, sub, 'main.js'));
                if (fs.existsSync(path.join(extracted, sub, '.git'))) fs.rmSync(path.join(extracted, sub, '.git'), { recursive: true, force: true });
                windows.log.print('`.git` was removed');

                //remove examples from the previous build
                if (fs.existsSync(path.join(installationFolder, 'Examples'))) {
                    //fs.rmSync(path.join(installationFolder, 'Examples'), { recursive: true, force: true });
                    //windows.log.print('`Examples` was removed');
                }


                windows.log.print('Copying new data...');
                windows.log.info('Copying new data over the previous');
                fse.copySync(path.join(extracted, sub), installationFolder, { overwrite: true });
                windows.log.print('Done');

                //remove specific files
                const toremove = ['.thumbnails', 'LPM.wl', 'main.js', 'wl_packages_lock.wl', 'wljs_packages_lock.wl', 'wljs_packages_users.wl', '.wl_timestamp', '.wljs_timestamp'];
                const dirtoremove = ['wljs_packages', 'wl_packages'];

                //windows.log.print('removing Packages...');
                //windows.log.print('removing wl_packages...');

                toremove.forEach((p) => {
                    if (fs.existsSync(path.join(installationFolder, p))) {
                        fs.unlinkSync(path.join(installationFolder, p));
                    }
                });

                dirtoremove.forEach((p) => {
                    if (fs.existsSync(path.join(installationFolder, p))) {
                        fs.rmSync(path.join(installationFolder, p), { recursive: true, force: true });
                    }
                });

                //resetting cache
                windows.log.print('Cache reset');

                session.defaultSession.clearStorageData();
                session.defaultSession.clearCache();

                windows.log.print('Done');

                fs.rmSync(extracted, { recursive: true, force: true });

                windows.log.print('Temporal folders were cleaned up');

                windows.log.info('Done!');

                cbk();

            })
        });
     }
    });
}


//in a case of a powerful firewall or apocalipse
const install_shipped = (cbk, window) => {

    windows.log.print('Copying to installation folder of a shipped package...');
    windows.log.info('Restoring the shipped version');
    const sub = path.join(app.getAppPath(), 'shipped');
    windows.log.print(sub);


    fse.copySync(sub, installationFolder, { overwrite: true });
    windows.log.print('');
    windows.log.print('Done!');
    windows.log.info('Done!');
    server.wasUpdated = true;

    cbk();
}

function downloadFile(file_url, targetPath, cbk) {
    // Save variable to know progress
    var received_bytes = 0;
    var total_bytes = 0;

    let cnt = 0;

    const showProgress = (received, total) => {
        cnt++;
        if (cnt % 10) {
            windows.log.print("::: " + (100.0 * received / total).toFixed(2), '\x1b[32m');
        }
    }

    const ft = net.request(file_url);

    var out = fs.createWriteStream(targetPath);
    //req.pipe(out);

    ft.on('response', (responce) => {
        // Change the total bytes value to get progress later.
        console.log(responce.headers);
        let lenHeader = responce.headers['content-Length'];
        if (Array.isArray(lenHeader)) lenHeader = lenHeader[0];

        if (isNaN(lenHeader)) lenHeader = 300*1024*1024;

        total_bytes = parseInt(lenHeader);

        responce.pipe(out);

        responce.on('data', function(chunk) {
            // Update the received bytes
            received_bytes += chunk.length;

            showProgress(received_bytes, total_bytes);
        });

        responce.on('end', function() {
            windows.log.print("File succesfully downloaded", '\x1b[34m');
            cbk(targetPath);
        });
    });



    ft.end()
}


/* uuid v4 generator */
var uuid4 = () => {
    var h=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    var k=['x','x','x','x','x','x','x','x','-','x','x','x','x','-','4','x','x','x','-','y','x','x','x','-','x','x','x','x','x','x','x','x','x','x','x','x'];
    var u='',i=0,rb=Math.random()*0xffffffff|0;
    while(i++<36) {
        var c=k[i-1],r=rb&0xf,v=c=='x'?r:(r&0x3|0x8);
        u+=(c=='-'||c=='4')?c:h[v];rb=i%8==0?Math.random()*0xffffffff|0:rb>>4
    }
    return u
}

var unshift = (array, value) => {
    array.unshift(value);
    array.length = Math.min(array.length, 5);
    return array;
}
