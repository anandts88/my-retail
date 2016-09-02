import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({

  /**
    @override
  */
  model({ id }) {
    // Find the item based on identifier.
    // By default ember data will cache the record if it is fetched before.
    // Setting `reload: true` will always fetch latest record from backend.
    return this.store.findRecord('item', id, { reload: true });
  }
});
