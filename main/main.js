const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;
const dialog = electron.dialog;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const fs = require('fs');

const Store = require('electron-store');

let mainWindow;

const store = new Store({
  configName: 'dseCreator',
  defaults: {
    windowBounds: { width: 1280, height: 1080 },
    data: {
      sections: ['Intro', 'Tools', 'Post Scriptum']
    }
  }
});

function createWindow() {
  const { width, height } = store.get('windowBounds');

  mainWindow = new BrowserWindow({
    width,
    height,
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + '/preload.js'
    }
  });

  mainWindow.on('resize', () => {
    let { width, height } = mainWindow.getBounds();
    console.log('save new size', width, height);
    store.set('windowBounds', { width, height });
  });

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => (mainWindow = null));
}

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

ipcMain.on('REQUEST_DATA', event => {
  const data = store.get('data');
  console.log('hydrate it');
  event.sender.send('HYDRATE_APP', data);
});
