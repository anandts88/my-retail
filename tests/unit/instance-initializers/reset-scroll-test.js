import Ember from 'ember';
import { initialize } from 'my-retail/instance-initializers/reset-scroll';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';
import startMirage from '../../helpers/setup-mirage-for-integration';

module('Unit | Instance Initializer | reset scroll', {
  beforeEach: function() {
    startMirage(this.container);
    Ember.run(() => {
      this.application = Ember.Application.create();
      this.appInstance = this.application.buildInstance();
    });
  },
  afterEach: function() {
    Ember.run(this.appInstance, 'destroy');
    destroyApp(this.application);
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(this.appInstance);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
