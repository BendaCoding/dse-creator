const path = require('path');

module.exports = {
  externals: ['react', 'react-dom'],
  resolve: {
    alias: {
      '@@base': path.resolve(__dirname, '../src/renderer/base/'),
      '@@components': path.resolve(__dirname, '../src/renderer/components/'),
      '@@screens': path.resolve(__dirname, '../src/renderer/screens/'),
      '@@store': path.resolve(__dirname, '../src/renderer/store/'),
      '@@utils': path.resolve(__dirname, '../src/renderer/utils/')
    }
  }
};
