import * as TYPES from './actionTypes';
import set from 'lodash/fp/set';

export const initialState = {
  sections: []
};

const getSectionIndexFromId = ({ sections, sectionId }) =>
  sections.findIndex(({ id }) => id === sectionId);

const getSnippetIndexFromId = ({ sections, sectionId, snippetId }) => {
  const sectionIndex = getSectionIndexFromId({ sections, sectionId });
  return sections[sectionIndex].snippets.findIndex(
    ({ id }) => id === snippetId
  );
};

const getIndexes = payload => {
  const sectionIndex = getSectionIndexFromId(payload);
  const snippetIndex = getSnippetIndexFromId(payload);
  return { sectionIndex, snippetIndex };
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.ADD_SECTION: {
      return {
        ...state,
        sections: [...state.sections, { ...payload, snippets: [] }]
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
    case TYPES.ADD_SNIPPET: {
      const { sectionIndex, ...rest } = payload;
      const section = state.sections[sectionIndex];

      return {
        ...state,
        sections: [
          ...state.sections.slice(0, sectionIndex),
          {
            ...section,
            snippets: [
              ...section.snippets,
              { ...rest, defaultOn: true, text: '' }
            ]
          },
          ...state.sections.slice(sectionIndex + 1)
        ]
      };
    }
    case TYPES.REMOVE_SNIPPET: {
      const { sectionId, snippetId } = payload;
      const { sections } = state;
      const { sectionIndex, snippetIndex } = getIndexes({
        sections,
        sectionId,
        snippetId
      });
      const sectionToEdit = sections[sectionIndex];
      const snippets = sectionToEdit.snippets.slice();
      snippets.splice(snippetIndex, 1);

      return {
        ...state,
        sections: [
          ...sections.slice(0, sectionIndex),
          { ...sectionToEdit, snippets },
          ...state.sections.slice(sectionIndex + 1)
        ]
      };
    }
    case TYPES.REORDER_SNIPPET: {
      const { from, to } = payload;
      const result = state.sections.slice();

      const fromSectionIndex = result.findIndex(
        ({ id }) => id === from.sectionId
      );
      const toSectionIndex = result.findIndex(({ id }) => id === to.sectionId);
      const [removed] = result[fromSectionIndex].snippets.splice(from.index, 1);
      result[toSectionIndex].snippets.splice(to.index, 0, removed);

      return {
        ...state,
        sections: result
      };
    }
    case TYPES.EDIT_SNIPPET: {
      const { sectionId, snippetId, snippet } = payload;
      const { sections } = state;

      const { sectionIndex, snippetIndex } = getIndexes({
        sections,
        sectionId,
        snippetId
      });

      return set(
        `sections[${sectionIndex}].snippets[${snippetIndex}]`,
        snippet,
        state
      );
    }
    case 'HYDRATE_STORE': {
      return payload.arrangement;
    }
    default:
      return state;
  }
};
