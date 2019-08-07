const Store = require('electron-store');

const defaults = {
  windowBounds: { width: 1280, height: 1080 },
  store: {
    arrangement: {
      sections: [
        { name: 'Intro', groups: [] },
        { name: 'Tools', groups: [] },
        { name: 'Post Scriptum', groups: [] }
      ]
    }
  }
};

module.exports = new Store({
  configName: 'dseCreator',
  defaults
});
