'use strict';

const path = require('node:path');
const { loadModel } = require('metaschema');

const load = () => {
  const modelPath = path.join(__dirname, 'schemas');
  return loadModel(modelPath);
};

module.exports = { load };
