import { combineReducers } from 'redux';
import * as Arrangement from './arrangement';

export const rootReducer = combineReducers({
  arrangement: Arrangement.reducer
});
