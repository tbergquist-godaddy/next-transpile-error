// @flow

const path = require('path');
const withTranspileModules = require('next-transpile-modules');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');

module.exports = withCustomBabelConfigFile(
  withTranspileModules(['test-components'])({
    babelConfigFile: path.join(
      __dirname,
      '..', 
      '..',
      'babel.config.js',
    ),
  }),
);
