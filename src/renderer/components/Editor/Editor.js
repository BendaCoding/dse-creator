import React from 'react';
import { Editor as BaseEditor } from 'react-draft-wysiwyg';
import { PLACEHOLDERS } from '../../../constants';

export const Editor = props => (
  <BaseEditor
    abc={{ a: 1 }}
    mention={{
      separator: ' ',
      trigger: '@',
      suggestions: Object.entries(PLACEHOLDERS).map(([, value]) => ({
        text: value,
        value
      }))
    }}
    {...props}
  />
);
