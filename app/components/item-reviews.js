import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

const {
  alias
} = computed;

/**
  Ember component to render product pros and cons

  @class ItemPromotions
  @extends Ember.Component
  @public
*/
export default Component.extend({
  review: undefined,

  pros: alias('review.Pro'),
  cons: alias('review.Con')
});
