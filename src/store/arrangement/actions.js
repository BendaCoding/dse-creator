import * as TYPES from './actionTypes';

export const addSection = payload => ({
  type: TYPES.ADD_SECTION,
  payload
});

export const removeSection = id => ({
  type: TYPES.REMOVE_SECTION,
  payload: id
});

export const addGroup = payload => ({
  type: TYPES.ADD_GROUP,
  payload
});

export const removeGroup = id => ({
  type: TYPES.REMOVE_GROUP,
  payload: id
});
