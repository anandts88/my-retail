import DS from 'ember-data';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend({
  // Set namespace for item.json
  namespace: 'my-retail-api'
});
