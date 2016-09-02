import Ember from 'ember';
import moment from 'moment';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

const {
  computed,
  copy,
  getWithDefault,
  assign,
  get
} = Ember;

const {
  alias,
  map,
  filter
} = computed;

export default Model.extend({
  upc: attr(),
  applyCouponLink: attr(),
  buyable: attr(),
  catEntryId: attr(),
  classId: attr(),
  department: attr(),
  eligibleFor: attr(),
  inventoryCode: attr(),
  inventoryStatus: attr(),
  itemId: attr(),
  itemType: attr(),
  manufacturerPartNumber: attr(),
  packageQuantity: attr(),
  partNumber: attr(),
  purchasingChannelCode: attr(),
  purchasingChannel: attr(),
  webClass: attr(),
  shortDescription: attr(),
  callOutMsg: attr(),
  manufacturer: attr(),
  title: attr(),
  webclass: attr(),
  images: attr(),
  itemDescription: attr(),
  promotions: attr(),
  offers: attr(),
  customerReview: attr(),

  image: alias('images.firstObject'),
  primaryImages: alias('image.PrimaryImage'),
  alternateImages: alias('image.AlternateImages'),
  price: alias('offers.firstObject.OfferPrice.firstObject'),
  review: alias('customerReview.firstObject'),

  allImages: computed('primaryImages.[]', 'alternateImages.[]', function() {
    const primary = getWithDefault(this, 'primaryImages', []);
    const alternates = getWithDefault(this, 'alternateImages', []);
    let items = Ember.A(primary);

    items.addObjects(alternates);

    items = copy(items);

    return items;
  }),

  promotionList: map('promotions', function(promotion) {
    const _promotion = copy(promotion);
    const description = get(_promotion, 'Description.firstObject');

    assign(_promotion, description);

    delete _promotion.Description;

    return _promotion;
  }),

  // Filter eligible promotions - If current date falls between provided start and end date.
  eligiblePromotions: filter('promotionList', function(promotion) {
    return moment().isBetween(moment(get(promotion, 'startDate')), moment(get(promotion, 'endDate')));
  })
});
