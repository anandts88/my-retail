import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({

  /**
    @override
  */
  model() {
    // Find all items.
    return this.store.findAll('item');
  }
});
