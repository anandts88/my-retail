import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('item-highlights', 'Integration | Component | item highlights', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{item-highlights}}`);

  // Template block usage:
  this.render(hbs`
    {{#item-highlights}}
      template block text
    {{/item-highlights}}
  `);


});
