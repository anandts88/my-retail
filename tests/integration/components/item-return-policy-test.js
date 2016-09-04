import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('item-return-policy', 'Integration | Component | item return policy', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{item-return-policy}}`);

  // Template block usage:
  this.render(hbs`
    {{#item-return-policy}}
      template block text
    {{/item-return-policy}}
  `);


});
