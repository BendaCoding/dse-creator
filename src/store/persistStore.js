import { IPC_EVENTS } from '../utils/enums';

export const persistStoreMiddleware = store => next => action => {
  next(action);

  const state = store.getState();
  console.log(state);
  window.ipc.send(IPC_EVENTS.SAVE_STATE_TO_FILE, state);
};
