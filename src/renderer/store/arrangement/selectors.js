import { createSelector } from 'reselect';
import find from 'lodash/fp/find';
import compose from 'lodash/fp/compose';
import property from 'lodash/fp/property';
import camelCase from 'lodash/fp/camelCase';

export const getArrangement = state => state.arrangement;

export const getSections = state => getArrangement(state).sections;

export const getSnippet = createSelector(
  getSections,
  (_, props) => props,
  (sections, { sectionId, snippetId }) =>
    compose(
      find(({ id }) => id === snippetId),
      property('snippets'),
      find(({ id }) => id === sectionId)
    )(sections)
);

const getCheckedSnippets = ({ name, snippets }) => {
  const formattedName = camelCase(name);
  return snippets.reduce(
    (prev, cur) =>
      cur.defaultOn
        ? {
            ...prev,
            [formattedName]: {
              ...prev[formattedName],
              [cur.id]: true
            }
          }
        : prev,
    {}
  );
};

export const getInitialValues = createSelector(
  getSections,
  sections => {
    return sections.reduce(
      (prev, cur) => ({ ...prev, ...getCheckedSnippets(cur) }),
      {}
    );
  }
);
