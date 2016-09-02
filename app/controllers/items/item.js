import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

const {
  alias
} = computed;

export default Controller.extend({
  item: alias('model'),
  modal: false
});
