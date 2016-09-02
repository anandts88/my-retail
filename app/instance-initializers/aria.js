import Ember from 'ember';

const {
  Component
} = Ember;

export function initialize() {

  Component.reopen({
    attributeBindings: ['role', 'aria-label']
  });
}

export default {
  name: 'aria',
  initialize
};
