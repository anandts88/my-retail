import Ember from 'ember';

export function textEllipsize([value], { chars=60 }) {
  let _value = value;

  if (_value && _value.length > chars) {
    _value = `${_value.substr(0, chars)} ...`;
  }

  return _value;
}

export default Ember.Helper.helper(textEllipsize);
