import Ember from 'ember';

const {
  Component,
  computed,
  get
} = Ember;

/**
  Ember component to display star rating.

  Default maximum rating will be 5, we can override by passing `maximum` property to this component.
  Pass the current rating to this component so it will render stars out of `maximum` stars.

  {{rating-star maximum=10 rating=4}} This will render 10 starts out of which 4 will be colored.

  This will render font awesome stars.

  To change the color or appreance of the star override css classes.

  `star-pros` - Class will be applied when star is colored.
  `star-cons` - Class will be applied when star is not colored.

  Default size of the star will be determined by font awesome class `fa-lg`.
  Pass `sizeClass` property with a class name if need to change the size of star.

  @class RatingStarComponent
  @extends Ember.Component
  @public
*/
export default Component.extend({
  maximum: 5,
  rating: 0,
  sizeClass: 'fa-lg',

  stars: computed('maximum', 'rating', function() {
    const stars = Ember.A();
    const maximum = get(this, 'maximum');
    const rating = get(this, 'rating');

    // Loop until maximum number of stars
    for (let i = 1; i <= maximum; i++) {
      // If current index is less than or equal to current rating,
      // then this star needs to be filled.
      // else this star will we greyed or not filled.
      stars.pushObject({ fill: i <= rating });
    }

    return stars;
  })
});
