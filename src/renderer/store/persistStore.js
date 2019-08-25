import { IPC_EVENTS } from '../utils/enums';

/**
 * Custom middleware to persist the store upon changes
 */
export const persistStoreMiddleware = store => next => action => {
  next(action);
  const state = store.getState();
  window.ipc.send(IPC_EVENTS.SAVE_STATE_TO_FILE, state);
};
