'use strict';

const metatests = require('metatests');
const metadomain = require('..');

metatests.test('Load metadomain', async (test) => {
  try {
    const model = await metadomain.load();
    test.assert(model);
    console.log(model.warnings.join('\n'));
    test.strictEqual(model.warnings.length, 0);
  } catch (err) {
    test.error(err);
  }
  test.end();
});
