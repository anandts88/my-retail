import Ember from 'ember';
import { RestSerializer } from 'ember-cli-mirage';

const {
  String: { capitalize }
} = Ember;

export default RestSerializer.extend({
  keyForAttribute(attr) {
    let _attr = attr;

    switch (attr) {
      case 'upc':
        _attr = _attr.toUpperCase();
        break;
      case 'images':
        _attr = capitalize(_attr);
        break;
      case 'itemDescription':
        _attr = capitalize(_attr);
        break;
      case 'promotions':
        _attr = capitalize(_attr);
        break;
      case 'offers':
        _attr = capitalize(_attr);
        break;
      case 'customerReview':
        _attr = capitalize(_attr);
        break;
    }

    return _attr;
  },

  keyForModel() {
    return 'CatalogEntryView';
  }
});
