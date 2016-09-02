import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slick-carousel', 'Integration | Component | slick carousel', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{slick-carousel}}`);



  // Template block usage:
  this.render(hbs`
    {{#slick-carousel}}
      template block text
    {{/slick-carousel}}
  `);


});
