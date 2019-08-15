import { createSelector } from 'reselect';
import find from 'lodash/fp/find';
import compose from 'lodash/fp/compose';
import property from 'lodash/fp/property';

export const getArrangement = state => state.arrangement;

export const getSections = state => getArrangement(state).sections;

export const getSnippet = createSelector(
  getSections,
  (_, props) => props,
  (sections, { sectionId, snippetId }) =>
    compose(
      find(({ id }) => id === snippetId),
      property('snippets'),
      a => {
        console.log('hit selector');
        return a;
      },
      find(({ id }) => id === sectionId)
    )(sections)
);
