const Store = require('electron-store');

const defaults = {
  windowBounds: { width: 1280, height: 1080 },
  store: {
    arrangement: {
      sections: [
        {
          name: 'Intro',
          id: '147eff5e-490e-4343-918d-a9ac078845d3',
          groups: []
        },
        {
          name: 'Tools',
          id: '55abd5e-0152-2352-123d-d5de078823cc',
          groups: []
        },
        {
          name: 'Post Scriptum',
          id: '687acc2d-123f-12af-634d-b2da238845d3',
          groups: []
        }
      ]
    }
  }
};

module.exports = new Store({
  configName: 'dseCreator',
  defaults
});
