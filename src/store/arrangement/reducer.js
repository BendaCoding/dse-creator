import * as TYPES from './actionTypes';

export const initialState = {
  sections: []
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.ADD_SECTION: {
      return {
        ...state,
        sections: [
          ...state.sections,
          { name: `Sektion ${state.sections.length + 1}`, groups: [] }
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
      const { sectionIndex } = payload;
      const section = state.sections[sectionIndex];

      return {
        ...state,
        sections: [
          ...state.sections.slice(0, sectionIndex),
          {
            ...section,
            groups: [...section.groups, payload.group]
          },
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
