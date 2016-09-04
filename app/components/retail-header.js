import Ember from 'ember';

const {
  Component,
  inject: { service }
} = Ember;

/**
  Component to render myRetail Header.

  @class RetailHeaderComponent
  @extends Ember.Component
  @public
*/
export default Component.extend({
  cart: service('shopping-cart'),

  tagName: 'header',
  ariaRole: 'banner'
});
