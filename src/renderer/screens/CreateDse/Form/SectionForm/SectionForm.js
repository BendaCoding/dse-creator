import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import filter from 'lodash/fp/filter';
import { Tab } from 'semantic-ui-react';
import { FormCheckbox } from '@@components';
import camelCase from 'lodash/fp/camelCase';
import * as S from './styled';

const filterSnippets = filter(({ alwaysShow }) => !alwaysShow);

export const SectionForm = ({ name, snippets }) => {
  const filteredSnippets = useMemo(() => filterSnippets(snippets), [snippets]);

  const sectionPropName = camelCase(name);

  if (!filteredSnippets.length) {
    return null;
  }

  return (
    <>
      <h3>{name}</h3>
      <Tab.Pane>
        <S.CheckboxWrap>
          {filteredSnippets.map(snippet => (
            <FormCheckbox
              key={snippet.id}
              name={`${sectionPropName}.${snippet.id}`}
              label={snippet.name}
            />
          ))}
        </S.CheckboxWrap>
      </Tab.Pane>
    </>
  );
};

SectionForm.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  snippets: PropTypes.array.isRequired
};
