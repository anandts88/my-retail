import Ember from 'ember';
import { invokeAction } from 'ember-invoke-action';

const {
  Component,
  get
} = Ember;

/**
  Ember component to render slick carousel.
  By default this will render slick carousel with `centerMode: true`, `slidesToShow: 3`
  Please pass the corresponding attributes for overriding the default behaviour by passing appropirate values.

  For example: Below will turn off `centerMode`.

  {{slick-carousel centerMode=false}}

  To more options refer `https://github.com/kenwheeler/slick`.

  @class SlickCarouselComponent
  @extends Ember.Component
  @public
*/
export default Component.extend({
  classNames: ['slider', 'carousel'],

  accessibility: true,
  dots: false,
  infinite: true,
  slidesToShow: 3,
  speed: 300,
  arrows: true,
  prevArrow: '<i class="fa fa-angle-left slick-prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-right slick-next" aria-hidden="true"></i>',
  centerMode: true,
  centerPadding: '0px',
  initialSlide: 0,

  /**
    @override
  */
  didInsertElement() {
    this._super(...arguments);

    this.$().slick({
      initialSlide: get(this, 'initialSlide'),
      dots: get(this, 'dots'),
      infinite: get(this, 'infinite'),
      slidesToShow: get(this, 'slidesToShow'),
      speed: get(this, 'speed'),
      arrows: get(this, 'arrows'),
      accessibility: get(this, 'accessibility'),
      prevArrow: get(this, 'prevArrow'),
      nextArrow: get(this, 'nextArrow'),
      centerMode: get(this, 'centerMode'),
      centerPadding: get(this, 'centerPadding')
    })
    .on('afterChange', () => {
      invokeAction(this, 'afterChange', this.$().slick('slickCurrentSlide'));
    });
  },

  actions: {

    /**
      Goto Item in the slick as per index passed

      @method gotoslick
      @param {Number} Index where to go.
      @public
    */
    gotoslick(index) {
      this.$().slick('slickGoTo', index);
    }
  }

});
