import { test } from 'qunit';
import moduleForAcceptance from 'my-retail/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | item');

test('visiting /item', function(assert) {
  assert.expect(1);

  server.create('item', { itemId: 1 });

  visit('/items/1');

  andThen(() => {
    assert.equal(currentURL(), '/items/1');
  });
});

test('test for item title', function(assert) {
  assert.expect(2);

  server.create('item', { itemId: 1, title: 'Ninja' });

  visit('/items/1');

  andThen(() => {
    assert.ok(find('h4.item-title').length);
    assert.equal(find('h4.item-title').text(), 'Ninja');
  });
});

test('test for purchasingChannelCode 0', function(assert) {
  assert.expect(4);

  server.create('item', { itemId: 1, purchasingChannelCode: 0 });

  visit('/items/1');

  andThen(() => {
    assert.ok(find('button.pick-in-store').length);
    assert.ok(find('button.pick-in-store + small'));
    assert.ok(find('button.pick-in-store + small').text(), 'find in a store');
    assert.ok(find('button.add-to-cart').length);
  });
});

test('test for purchasingChannelCode 1', function(assert) {
  assert.expect(2);

  server.create('item', { itemId: 1, purchasingChannelCode: 1 });

  visit('/items/1');

  andThen(() => {
    assert.ok(!find('button.pick-in-store').length);
    assert.ok(find('button.add-to-cart').length);
  });
});

test('test for purchasingChannelCode 2', function(assert) {
  assert.expect(3);

  server.create('item', { itemId: 1, purchasingChannelCode: 2 });

  visit('/items/1');

  andThen(() => {
    assert.ok(find('button.pick-in-store').length);
    assert.ok(find('button.pick-in-store + small'));
    assert.ok(find('button.pick-in-store + small').text(), 'find in a store');
  });
});

test('test for image carsoul container', function(assert) {
  assert.expect(5);

  server.create('item', { itemId: 1 });

  visit('/items/1');

  andThen(() => {
    assert.ok(find('.carosel').length);
    assert.equal(find('.carosel > .carosel-col > figure > img').length, 1);
    assert.ok(find('.carosel > .carosel-col > .view-larger').length);
    assert.ok(find('.carosel > .carosel-col .slider .slick-list .slick-active').length);
    assert.equal(find('.carosel > .carosel-col .slider .slick-list .slick-active').length, 3);
  });
});

test('test for image carsoul container view large', function(assert) {
  assert.expect(2);

  server.create('item', { itemId: 1 });

  visit('/items/1');

  andThen(() => {
    assert.ok(find('.carosel > .carosel-col > .view-larger').length);
    click('.carosel > .carosel-col > .view-larger > a');
  });

  andThen(() => {
    assert.ok(find('.modal-content').length);
  });
});

test('test for quantity', function(assert) {

  server.create('item', { itemId: 1 });

  visit('/items/1');

  andThen(() => {
    assert.ok(find('.quantity'));
    click('.quantity a.fa-plus-circle');
  });

  andThen(() => {
    assert.equal(find('.quantity label > .total').text(), 2);
    click('.quantity a.fa-minus-circle');
  });

  andThen(() => {
    assert.equal(find('.quantity label > .total').text(), 1);
  });

});
