const { app, BrowserWindow } = require('electron');
const path = require('path');
const { ipcMain } = require('electron');

let mainWindow;
// let projectwindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname,'preload.js'),
    },
  });
    app.commandLine.appendSwitch('disable-hardware-acceleration');
    app.commandLine.appendSwitch('disable-gpu');

  mainWindow.loadFile('index.html');
});
app.on('window-all-closed',() =>{
  app.quit();
});

// projectwindow = new BrowserWindow({
//   width:800,
//   height:600,
// })


ipcMain.on('button-click', (_event, data) => {
    console.log('Button click received in main process:', data);
});

ipcMain.on('list-item-click', (_event, data) => {
    console.log('List item click received in main process:', data);
});