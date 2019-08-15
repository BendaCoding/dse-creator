import * as TYPES from './actionTypes';
import * as U from '../utils';

export const addSection = U.createAction(TYPES.ADD_SECTION);

export const removeSection = U.createAction(TYPES.REMOVE_SECTION);

export const reorderSection = U.createAction(TYPES.REORDER_SECTION);

export const addSnippet = U.createAction(TYPES.ADD_SNIPPET);

export const removeSnippet = U.createAction(TYPES.REMOVE_SNIPPET);

export const reorderSnippet = U.createAction(TYPES.REORDER_SNIPPET);

export const editSnippet = U.createAction(TYPES.EDIT_SNIPPET);
