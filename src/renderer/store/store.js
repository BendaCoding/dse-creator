import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import { persistStoreMiddleware } from './persistStore';
import { compose } from 'redux';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(persistStoreMiddleware))
);
