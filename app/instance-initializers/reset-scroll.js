import Ember from 'ember';

const {
  Router,
  on
} = Ember;

export function initialize() {
  Router.reopen({

    // Ember will fire `didTransition` event, after completing route transition.
    resetScroll: on('didTransition', function() {

      // Scroll to top position after every route transition
      Ember.$.Velocity(Ember.$('html,body'), 'scroll', { offset: 0, duration: 250 });
    })
  });
}

export default {
  name: 'reset-scroll',
  initialize
};
