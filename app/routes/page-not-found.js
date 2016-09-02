import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({

  /**
    @override
  */
  beforeModel() {
    // When `wildcard` (URL not matching any defined route in `router.js`) route is launched,
    // then redirect to `error-page` route for displaying page not found error message.
    this.transitionTo('error-page', 'pagenotfound');
  }
});
