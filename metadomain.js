'use strict';

const path = require('path');
const { Model } = require('metaschema');

const load = async () => {
  const modelPath = path.join(__dirname, 'schemas');
  return Model.load(modelPath);
};

module.exports = { load };
