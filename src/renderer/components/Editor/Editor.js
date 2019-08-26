import React from 'react';
import { Editor as BaseEditor } from 'react-draft-wysiwyg';

export const Editor = props => (
  <BaseEditor
    abc={{ a: 1 }}
    mention={{
      separator: ' ',
      trigger: '@',
      suggestions: [
        { text: 'Name', value: 'name', url: 'apple' },
        { text: 'Straße', value: 'straße', url: 'banana' }
      ]
    }}
    {...props}
  />
);
