import * as TYPES from './actionTypes';

export const initialState = {
  sections: []
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.ADD_SECTION: {
      return {
        ...state,
        sections: [...state.sections, { ...payload, groups: [] }]
      };
    }
    case TYPES.REMOVE_SECTION: {
      const id = payload;
      return {
        ...state,
        sections: [
          ...state.sections.slice(0, id),
          ...state.sections.slice(id + 1)
        ]
      };
    }
    case TYPES.REORDER_SECTION: {
      const { from, to } = payload;

      const sections = state.sections.slice();
      const [removed] = sections.splice(from, 1);
      sections.splice(to, 0, removed);

      return {
        ...state,
        sections
      };
    }
    case TYPES.ADD_GROUP: {
      const { sectionIndex, ...rest } = payload;
      const section = state.sections[sectionIndex];

      return {
        ...state,
        sections: [
          ...state.sections.slice(0, sectionIndex),
          {
            ...section,
            groups: [...section.groups, { ...rest }]
          },
          ...state.sections.slice(sectionIndex + 1)
        ]
      };
    }
    case TYPES.REMOVE_GROUP: {
      const id = payload;
      return {
        ...state,
        sections: [
          ...state.sections.slice(0, id),
          ...state.sections.slice(id + 1)
        ]
      };
    }
    case TYPES.REORDER_GROUP: {
      const { from, to } = payload;
      const result = state.sections.slice();

      const fromSectionIndex = result.findIndex(
        ({ id }) => id === from.sectionId
      );
      const toSectionIndex = result.findIndex(({ id }) => id === to.sectionId);
      console.log(fromSectionIndex, result[fromSectionIndex]);
      const [removed] = result[fromSectionIndex].groups.splice(from.index, 1);
      result[toSectionIndex].groups.splice(to.index, 0, removed);

      return {
        ...state,
        sections: result
      };
    }
    case 'HYDRATE_STORE': {
      return payload.arrangement;
    }
    default:
      return state;
  }
};
