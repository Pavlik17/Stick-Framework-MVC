/* eslint-disable import/prefer-default-export */
import { format } from 'date-fns';

/**
 *
 * @param {String} str
 * @param {String} type
 *
 */
export function formatDate(str, type) {
  const date = new Date(str);
  return format(date, type);
}
