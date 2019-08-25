import Store from 'electron-store';

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
              data: {
                blocks: [
                  {
                    data: {},
                    depth: 0,
                    entityRanges: [],
                    inlineStyleRanges: [],
                    key: '37eqm',
                    text: 'Willkommen',
                    type: 'header-one'
                  },
                  {
                    data: {},
                    depth: 0,
                    entityRanges: [],
                    inlineStyleRanges: [],
                    key: '43eqg',
                    text:
                      'Herzlich willkommen bei den Datenschutzinformationen von {name}.',
                    type: 'unstyled'
                  }
                ],
                entityMap: {}
              },
              defaultOn: true
            },
            {
              name: 'Wer ist verantwortlich',
              id: '212eff5e-490e-4343-918d-a9ac0788abab',
              data: {
                blocks: [
                  {
                    data: {},
                    depth: 0,
                    entityRanges: [],
                    inlineStyleRanges: [],
                    key: '5co54',
                    text: 'Wer ist verantwortlich?',
                    type: 'header-one'
                  },
                  {
                    data: {},
                    depth: 0,
                    entityRanges: [],
                    inlineStyleRanges: [],
                    key: '7bcdl',
                    text: 'Für die Datenverarbeitung von {name} ist',
                    type: 'unstyled'
                  },
                  {
                    data: {},
                    depth: 0,
                    entityRanges: [],
                    inlineStyleRanges: [],
                    key: '14h2u',
                    text: '{addresse}',
                    type: 'unstyled'
                  },
                  {
                    data: {},
                    depth: 0,
                    entityRanges: [],
                    inlineStyleRanges: [],
                    key: '40tds',
                    text: 'verantwortlich.',
                    type: 'unstyled'
                  }
                ],
                entityMap: {}
              },
              defaultOn: true
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

export const electronStore = new Store({
  configName: 'dseCreator',
  defaults
});
