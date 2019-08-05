const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;
const dialog = electron.dialog;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 1080,
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + '/preload.js'
    }
  });
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => (mainWindow = null));
}

ipcMain.on('select-file', event => {
  dialog.showOpenDialog(mainWindow, {}, filePaths => {
    console.log('file selected');

    if (filePaths) {
      fs.readFile(filePaths[0], 'utf-8', (error, data) => {
        const db = JSON.parse(data);
        mainWindow.send('SEND_DB', db);
      });
    }
  });
});

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
