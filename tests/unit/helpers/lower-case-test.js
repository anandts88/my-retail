import { lowerCase } from 'my-retail/helpers/lower-case';
import { module, test } from 'qunit';

module('Unit | Helper | lower case');

// Replace this with your real tests.
test('test lower case', function(assert) {
  let result = lowerCase(['UPPER']);
  assert.equal(result, 'upper');
});
