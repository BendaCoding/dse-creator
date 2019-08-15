import React, { useCallback } from 'react';
import { Tab } from 'semantic-ui-react';
import filter from 'lodash/fp/filter';

export const SectionForm = ({ name, snippets }) => {
  const memoizedFilter = useCallback(
    filter(({ alwaysShow }) => !alwaysShow),
    []
  );
  const filteredSnippets = memoizedFilter(snippets);

  return (
    <>
      <h3>{name}</h3>
      <Tab.Pane>
        {filteredSnippets.map(snippet => (
          <div key={snippet.id}>{snippet.name}</div>
        ))}
      </Tab.Pane>
    </>
  );
};
