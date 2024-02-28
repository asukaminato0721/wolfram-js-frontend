const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  contextMenu: (callback) => ipcRenderer.on('context', callback),
  call: (callback) => ipcRenderer.on('call', callback),

  listener: (name, callback) => ipcRenderer.on(name, callback),

  
  cellop: (callback) => ipcRenderer.on('cellop', callback),

  pluginsMenu: (callback) => ipcRenderer.on('pluginsMenu', callback),
  
  openFinder: (path) => {
    console.log(path);
    ipcRenderer.send('system-open',  path);
  },

  topMenu: (name) => {
    console.log(name);
    ipcRenderer.send('system-menu',  name);
  },

  toggleWindowSize: () => {
    ipcRenderer.send('system-window-toggle',  {});
  },

  windowExpand: (path) => {
    console.log(path);
    ipcRenderer.send('system-window-expand',  {});
  },

  windowShrink: (path) => {
    console.log(path);
    ipcRenderer.send('system-window-shrink',  {});
  },   
  
  searchText: (searchText, direction) => ipcRenderer.send('search-text', { searchText, direction }),
  stopSearch: () => ipcRenderer.send('stop-search')
})

function search(direction) {
  let searched = document.getElementById("searchInput").value.trim();
  if(searched.length > 0){
      window.electronAPI.searchText(searched,direction)
  }                
  document.getElementById("searchInput").focus()
}

