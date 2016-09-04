import Ember from 'ember';

const {
  Service,
  set,
  get,
  isEmpty,
  computed
} = Ember;

const {
  sum,
  mapBy
} = computed;

export default Service.extend({
  items: undefined,

  quantities: mapBy('items', 'quantity'),
  size: sum('quantities'),

  init() {
    this._super(...arguments);
    set(this, 'items', Ember.A());
  },

  add(item, quantity, online=true) {
    const items = get(this, 'items');
    // Find items in the cart based on supplied arguments. `item.id` and `online`.
    const find = items.find((_item) => get(_item, 'item.id') === get(item, 'id') && get(_item, 'online') === online);

    // If the item is not available in the cart.
    if (isEmpty(find)) {
      // Add the item into cart.
      items.pushObject({ online, item, quantity });
    } else {
      // If item is already available in cart then update quantity alone.
      set(find, 'quantity', get(find, 'quantity') + quantity);
    }
  }

});
