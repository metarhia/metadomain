'use strict';

const init = require('eslint-config-metarhia');

module.exports = [
  ...init,
  {
    files: ['schemas/**/*.js'],
    languageOptions: {
      sourceType: 'module',
    },
  },
];
