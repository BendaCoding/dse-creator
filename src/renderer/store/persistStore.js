import { IPC_EVENTS } from '../../constants';
import { ipcRenderer } from 'electron';

/**
 * Custom middleware to persist the store upon changes
 */
export const persistStoreMiddleware = store => next => action => {
  next(action);
  const state = store.getState();
  ipcRenderer.send(IPC_EVENTS.SAVE_STATE_TO_FILE, state);
};
