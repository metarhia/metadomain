'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const metadomain = require('..');

test('Load metadomain', async () => {
  const model = await metadomain.load();
  assert.ok(model);
  if (model.warnings.length) console.log(model.warnings.join('\n'));
  assert.equal(model.warnings.length, 0);
});
