import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'semantic-ui-react';
import filter from 'lodash/fp/filter';
import { FormCheckbox } from '@@components';
import camelCase from 'lodash/fp/camelCase';

const filterSnippets = filter(({ alwaysShow }) => !alwaysShow);

export const SectionForm = ({ name, snippets }) => {
  const filteredSnippets = useMemo(() => filterSnippets(snippets), [snippets]);

  const sectionPropName = camelCase(name);

  return (
    <>
      <h3>{name}</h3>
      <Tab.Pane>
        {filteredSnippets.map(snippet => (
          <FormCheckbox
            key={snippet.id}
            name={`${sectionPropName}.${snippet.id}`}
            label={snippet.name}
          />
        ))}
      </Tab.Pane>
    </>
  );
};

SectionForm.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  snippets: PropTypes.array.isRequired
};
