const Store = require('electron-store');
const { ContentState, convertToRaw } = require('draft-js');

const createRawTextState = text =>
  convertToRaw(ContentState.createFromText(text));

const defaults = {
  windowBounds: { width: 1280, height: 1080 },
  store: {
    arrangement: {
      sections: [
        {
          name: 'Intro',
          id: '147eff5e-490e-4343-918d-a9ac078845d3',
          snippets: [
            {
              name: 'Willkommen',
              id: '555fda2e-294e-4343-918d-a9ac07884123',
              text: createRawTextState(
                'Herzlich willkommen bei den Datenschutzinformationen von {name}.'
              )
            },
            {
              name: 'Wer ist verantwortlich',
              id: '212eff5e-490e-4343-918d-a9ac0788abab',
              title: 'Wer ist für die Verarbeitung verantwortlich?',
              text: createRawTextState(
                `Für die Datenverarbeitung von {name} ist  {addresse}  verantwortlich.`
              )
            }
          ]
        },
        {
          name: 'Tools',
          id: '55abd5e-0152-2352-123d-d5de078823cc',
          snippets: []
        },
        {
          name: 'Post Scriptum',
          id: '687acc2d-123f-12af-634d-b2da238845d3',
          snippets: []
        }
      ]
    }
  }
};

module.exports = new Store({
  configName: 'dseCreator',
  defaults
});
