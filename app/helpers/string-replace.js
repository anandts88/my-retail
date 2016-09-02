import Ember from 'ember';

/**
  Replace each occurance of placeholder with supplied value.

  @param {String} - Value which contains placeholder string.
  @param {Sequence} - args Sequence of replacing entries.
  @param {String} - Placeholder that needs to be replaced.
  @returns Replaced string
  @public
 */
export function stringReplace([value='', ...args], { placeholder='%s' }) {
  let _value = value;

  args.forEach((arg) => {
    _value = value.replace(placeholder, arg);
  });

  return _value;
}

export default Ember.Helper.helper(stringReplace);
