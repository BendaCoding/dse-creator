import * as TYPES from './actionTypes';

const createAction = type => payload => ({
  type,
  payload
});

export const addSection = createAction(TYPES.ADD_SECTION);

export const removeSection = createAction(TYPES.REMOVE_SECTION);

export const reorderSection = createAction(TYPES.REORDER_SECTION);

export const addGroup = createAction(TYPES.ADD_GROUP);

export const removeGroup = createAction(TYPES.REMOVE_GROUP);

export const reorderGroup = createAction(TYPES.REORDER_GROUP);
