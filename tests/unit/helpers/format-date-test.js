import { formatDate } from 'my-retail/helpers/format-date';
import { module, test } from 'qunit';

module('Unit | Helper | format date');

// Replace this with your real tests.
test('test format date', function(assert) {
  let result = formatDate(['Sep, 01 2016'], { from: 'MMM, DD YYYY' });

  assert.equal(result, 'September, 01 2016');

  result = formatDate(['Sep, 01 2016'], { from: 'MMM, DD YYYY', to: 'MM/DD/YYYY' });
  assert.equal(result, '09/01/2016');
});
