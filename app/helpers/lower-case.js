import Ember from 'ember';

/**
  Convert string to lower case.

  @param {String} - Value that needs to be converted to lower case
  @returns Lower case string
  @public
 */
export function lowerCase([value='']) {
  return value.toLowerCase();
}

export default Ember.Helper.helper(lowerCase);
