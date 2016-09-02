import { stringReplace } from 'my-retail/helpers/string-replace';
import { module, test } from 'qunit';

module('Unit | Helper | string replace');

// Replace this with your real tests.
test('test replce string', function(assert) {
  let result = stringReplace(['Hello %s', 'myRetail'], {});
  assert.equal(result, 'Hello myRetail');
});
