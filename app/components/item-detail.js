import Ember from 'ember';

const {
  Component,
  get,
  set,
  inject: { service }
} = Ember;

export default Component.extend({
  cart: service('shopping-cart'),
  quantity: 1,

  actions: {

    addToCart(online=true) {
      const item = get(this, 'item');
      const quantity = get(this, 'quantity');

      get(this, 'cart').add(item, quantity, online);      
    },

    setQuantity(quantity) {
      set(this, 'quantity', quantity);
    }

  }
});
