import Ember from 'ember';
import config from './config/environment';

const {
  Router
} = Ember;

const RetailRouter = Router.extend({
  location: config.locationType
});

RetailRouter.map(function() {

  // Route for handling all items
  this.route('items', { path: '/' }, function() {

    // Route for handling items based on `id`
    this.route('item', { path: '/items/:id' });
  });

  // Route for handling error scenario.
  this.route('error-page', { path: '/error/:id' });

  // Route for handling incorrect URLs entered by the user.
  this.route('page-not-found', { path: '/*wildcard' });
});

export default RetailRouter;
