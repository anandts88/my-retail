import Ember from 'ember';
import DS from 'ember-data';

const {
  JSONAPISerializer
} = DS;

const {
  assign,
  get,
  String: { camelize }
} = Ember;

/**
  Serializer for item model.

  Response returned by rest api is not jsonapi standard. Serialize the response to JSONAPI structure.

  @class ItemSerializer
  @extends Ember.JSONAPISerializer
  @public
*/
export default JSONAPISerializer.extend({
  normalizeItem(model, type) {
    const { itemId } = model;
    const attrs = ['Images', 'ItemDescription', 'Promotions', 'Offers', 'CustomerReview'];
    let attributes = { upc: get(model, 'UPC') };
    let _attr;

    delete model.itemId;
    delete model.UPC;

    attrs.forEach((attr) => {
      _attr = camelize(attr);
      attributes[_attr] = get(model, attr);

      delete model[attr];
    });

    attributes.itemDescription = get(attributes.itemDescription, 'firstObject.features');

    attributes = assign(attributes, model);

    return { id: itemId, type, attributes };
  },

  /**
    Serialize response of findAllResponse

    @override
  */
  normalizeFindAllResponse() {
    const type = arguments[1];
    const payload = arguments[2];
    const _payload = {};
    const { CatalogEntryViews=[] } = payload;
    let items;
    let _item;

    items = CatalogEntryViews.map((item) => {
      _item = this.normalizeItem(item, type.modelName);
      _item.links = { self: `/items/${item.id}` };

      return _item;
    });

    _payload.links = { self: '/items' };
    _payload.data = items;

    return _payload;
  },

  /**
    Serialize response of findRecordResponse

    @override
  */
  normalizeFindRecordResponse() {
    const type = arguments[1];
    const payload = arguments[2];
    const _payload = {};
    let { CatalogEntryView={} } = payload;
    const item = this.normalizeItem(CatalogEntryView, type.modelName);

    _payload.links = { self: `/items/${item.id}` };
    _payload.data = item;

    return _payload;
  }
});
