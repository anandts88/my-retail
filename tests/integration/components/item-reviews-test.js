import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('item-reviews', 'Integration | Component | item reviews', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{item-reviews}}`);

  // Template block usage:
  this.render(hbs`
    {{#item-reviews}}
      template block text
    {{/item-reviews}}
  `);


});
