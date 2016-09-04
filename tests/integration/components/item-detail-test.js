import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('item-detail', 'Integration | Component | item detail', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{item-detail}}`);

  // Template block usage:
  this.render(hbs`
    {{#item-detail}}
      template block text
    {{/item-detail}}
  `);
});
