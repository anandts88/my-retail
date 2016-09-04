import { textEllipsize } from 'my-retail/helpers/text-ellipsize';
import { module, test } from 'qunit';

module('Unit | Helper | text ellipsize');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = textEllipsize(["Hello"], { chars: 2 });

  assert.equal(result, "He ...");
});
