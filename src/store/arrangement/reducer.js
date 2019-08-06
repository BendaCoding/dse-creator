import * as TYPES from './actionTypes';

export const initialState = {
  sections: []
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.ADD_SECTION: {
      const addAtIndex = payload.index || state.sections.length;

      return {
        ...state,
        sections: [
          ...state.sections.slice(0, addAtIndex),
          { name: payload.name, groups: [] },
          ...state.sections.slice(addAtIndex)
        ]
      };
    }
    case TYPES.REMOVE_SECTION: {
      return {
        ...state,
        sections: [
          ...state.sections.slice(0, payload.index),
          ...state.sections.slice(payload.index + 1)
        ]
      };
    }
    case TYPES.ADD_GROUP: {
      const {
        sectionIndex,
        groupIndex = state.sections[sectionIndex].length
      } = payload;

      return {
        ...state,
        sections: [
          ...state.sections.slice(0, sectionIndex),
          {
            ...state.sections[sectionIndex],
            groups: [
              
            ]
          }
          ...state.sections.slice(sectionIndex)
        ]
      };
    }
    case TYPES.REMOVE_GROUP: {
      return {
        ...state,
        sections: [
          ...state.sections.slice(0, payload.index),
          ...state.sections.slice(payload.index + 1)
        ]
      };
    }
    case 'HYDRATE_STORE': {
      return payload.arrangement;
    }
    default:
      return state;
  }
};
