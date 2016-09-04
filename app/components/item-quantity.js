import Ember from 'ember';
import { invokeAction } from 'ember-invoke-action';

const {
  Component,
  computed,
  get
} = Ember;

/**
  Ember component for incrementing or decrementing item quantity.

  Default quantity is 1.
  Default minimum quantity is 1.
  Default maximum quantity is 99.

  @class SlickCarouselComponent
  @extends Ember.Component
  @public
*/
export default Component.extend({
  classNames: ['quantity'],

  quantity: 1,
  minQuantity: 1,
  maxQuantity: 99,

  // Compute whether the quantity reached maximum limit
  reachedMax: computed('quantity', 'maxQuantity', function() {
    const quantity = get(this, 'quantity');
    const maxQuantity = get(this, 'maxQuantity');

    return quantity >= maxQuantity;
  }),

  // Compute whether the quantity reached minimum limit
  reachedMin: computed('quantity', 'minQuantity', function() {
    const quantity = get(this, 'quantity');
    const minQuantity = get(this, 'minQuantity');

    return quantity <= minQuantity;
  }),

  actions: {

    /**
      Increment quantity

      @method increment
      @public
    */
    increment() {
      // Increment quantity only if it not reached the max limit
      if (!get(this, 'reachedMax')) {
        this.incrementProperty('quantity');

        invokeAction(this, 'onchange', get(this, 'quantity'));
      }
    },

    /**
      Decrement quantity

      @method increment
      @public
    */
    decrement() {
      // decrement quantity only if it not reached the min limit
      if (!get(this, 'reachedMin')) {
        this.decrementProperty('quantity');

        invokeAction(this, 'onchange', get(this, 'quantity'));
      }
    }
  }
});
