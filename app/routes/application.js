import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  actions: {
    error() {
      return this.transitionTo('error-page');
    }
  }
});
