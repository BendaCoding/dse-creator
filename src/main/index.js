'use strict';

import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import { format as formatUrl } from 'url';
import { electronStore } from './electronStore';
import { IPC_EVENTS } from '../constants';

const isDevelopment = process.env.NODE_ENV !== 'production';

let mainWindow;
console.log('##################', __dirname);
function createMainWindow() {
  const { width, height } = electronStore.get('windowBounds');

  const window = new BrowserWindow({
    width,
    height,
    webPreferences: {
      // nodeIntegration: false,
      // webSecurity: false,
      // preload: __dirname + '/preload.js'
    }
  });

  window.on('resize', () => {
    let { width, height } = mainWindow.getBounds();
    electronStore.set('windowBounds', { width, height });
  });

  if (isDevelopment) {
    window.webContents.openDevTools();
  }

  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
  } else {
    window.loadURL(
      formatUrl({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
      })
    );
  }

  window.on('closed', () => {
    mainWindow = null;
  });

  window.webContents.on('devtools-opened', () => {
    window.focus();
    setImmediate(() => {
      window.focus();
    });
  });

  return window;
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow();
  }
});

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow();
});

ipcMain.on(IPC_EVENTS.REQUEST_STATE, event => {
  const data = electronStore.get('store');
  console.log('Hydrate App from file storage');
  event.sender.send(IPC_EVENTS.HYDRATE_STATE, data);
});

ipcMain.on(IPC_EVENTS.SAVE_STATE_TO_FILE, (event, state) => {
  electronStore.set('store', state);
  console.log('Saved state to file');
});
