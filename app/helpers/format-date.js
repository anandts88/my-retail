import Ember from 'ember';
import moment from 'moment';
import _isString from 'lodash/lang/isString';
import _isDate from 'lodash/lang/isDate';

/**
  Format supplied javascript date object or moment object or string to the supplied to format

  @param {Date/moment/String} - Value to be formatted
  @param {String} - In case of date string, supply the from format
  @param {to} - Format to convert. Default 'MMMM, DD YYYY'
  @returns Formatted date
  @public
 */
export function formatDate([value], { from, to='MMMM, DD YYYY' }) {
  let date = value;

  // If value is string then parse the date using `from` format
  if (_isString(value) && from) {
    date = moment(value, from);
  } else if (_isString(value) && !from) {
    date = moment(new Date(value));
  } else if (_isDate(value)) {
    date = moment(value);
  }

  // Format moment object with supplied to format.
  return date.format(to);
}

export default Ember.Helper.helper(formatDate);
