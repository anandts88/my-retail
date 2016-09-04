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
    const find = items.find((_item) => get(_item, 'item.id') === get(item, 'id') && get(_item, 'online') === online);

    if (isEmpty(find)) {
      items.pushObject({ online, item, quantity });
    } else {
      set(find, 'quantity', get(find, 'quantity') + quantity);
    }
  }

});
