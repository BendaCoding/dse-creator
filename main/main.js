const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;
const dialog = electron.dialog;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const fs = require('fs');

const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS
} = require('electron-devtools-installer');

const store = require('./store');
const { IPC_EVENTS } = require('../src/utils/enums');

let mainWindow;

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

// ipcMain.on('select-file', event => {
//   dialog.showOpenDialog(mainWindow, {}, filePaths => {
//     console.log('file selected');

//     if (filePaths) {
//       fs.readFile(filePaths[0], 'utf-8', (error, data) => {
//         const db = JSON.parse(data);
//         mainWindow.send('SEND_DB', db);
//       });
//     }
//   });
// });

ipcMain.on(IPC_EVENTS.REQUEST_STATE, event => {
  const data = store.get('store');
  console.log('Hydrate App from file storage');
  event.sender.send(IPC_EVENTS.HYDRATE_STATE, data);
});

ipcMain.on(IPC_EVENTS.SAVE_STATE_TO_FILE, (event, state) => {
  store.set('store', state);
  console.log('Saved state to file');
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
    store.set('windowBounds', { width, height });
  });

  installExtentions();

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  mainWindow.on('closed', () => (mainWindow = null));
}

function installExtentions() {
  if (process.env.NODE_ENV === 'dev') {
    mainWindow.webContents.openDevTools();

    installExtension(REACT_DEVELOPER_TOOLS)
      .then(name => console.log(`Added Extension:  ${name}`))
      .catch(err => console.log('An error occurred: ', err));

    installExtension(REDUX_DEVTOOLS)
      .then(name => console.log(`Added Extension:  ${name}`))
      .catch(err => console.log('An error occurred: ', err));
  }
}
