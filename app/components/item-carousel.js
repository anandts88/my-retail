import Ember from 'ember';

const {
  Component,
  computed,
  set,
  get
} = Ember;

/**
  Ember Component to render slick carousel which enables to scroll through Item images.

  This will render currently selected image in the slick carousel at top and slick carousel at bottom.

  This will provide option to view the larger images of the selected carousel.
  Setting `viewlarger: false` will turn off this option in the view.

  @class ItemCarouselComponent
  @extends Ember.Component
  @public
*/
export default Component.extend({
  classNames: ['carosel'],

  items: undefined,
  viewlarger: true,
  showlarger: false,

  current: computed('items.[]', {
    get() {
      // By default return first image as the selected image
      return get(this, 'items.firstObject');
    },

    set() {
      return arguments[1];
    }
  }),

  actions: {

    /**
      Open image at the specified index.

      @method currentImage
      @param {Number} Index of the image.
      @public
    */
    currentImage(index) {
      // Get `item` object at the passed and index and set it as currently selected image.
      set(this, 'current', get(this, 'items').objectAt(index));
    },

    /**
      Open modal window with currently selected image

      @method openLargeView
      @public
    */
    openLargeView() {
      set(this, 'showlarger', true);
    },

    /**
      Close modal window

      @method openLargeView
      @public
    */
    closeLargeView() {
      set(this, 'showlarger', false);
    }
  }
});
