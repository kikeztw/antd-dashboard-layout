/* eslint-disable no-shadow */
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = function override(config) {
  // do stuff with the webpack config...
  return config;
};
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addLessLoader({
    javascriptEnabled: true,
  }),
);
