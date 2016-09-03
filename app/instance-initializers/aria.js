import Ember from 'ember';

const {
  Component
} = Ember;

export function initialize() {

  Component.reopen({
    attributeBindings: ['role', 'aria-label', 'aria-labelledby']
  });
}

export default {
  name: 'aria',
  initialize
};
