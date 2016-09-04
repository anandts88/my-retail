import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('retail-header', 'Integration | Component | retail header', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{retail-header}}`);

  // Template block usage:
  this.render(hbs`
    {{#retail-header}}
      template block text
    {{/retail-header}}
  `);


});
