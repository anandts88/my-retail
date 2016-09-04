import Ember from 'ember';

/**
  Ellipsize the given string.

  @param {String} - Value String that needs to be ellipsized.
  @param {Integer} - Number of visible charcters
  @returns {String} - Ellipsized string.
  @public
 */
export function textEllipsize([value], { chars=60 }) {
  let _value = value;

  if (_value && _value.length > chars) {
    _value = `${_value.substr(0, chars)} ...`;
  }

  return _value;
}

export default Ember.Helper.helper(textEllipsize);
