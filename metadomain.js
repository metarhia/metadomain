'use strict';

const path = require('path');
const { Model } = require('metaschema');

const load = async () => {
  const modelPath = path.join(process.cwd(), 'schemas');
  return Model.load(modelPath);
};

module.exports = { load };
