import { ValueCollection } from './ValueCollection';
import { findKey } from './findKey';

import { addToValues } from './addToValues';

/**
 * Adds a `value` to a `key`, which may or may not already exist.
 */
export function addValue<T>(
  values: ValueCollection<T[]>,
  key: string,
  value: T,
): ValueCollection<T[]>;
/**
 * Adds a `value` to a `key`, which may or may not already exist.
 */
export function addValue<T>(
  values: ValueCollection<T | T[]>,
  key: string,
  value: T,
): ValueCollection<T | T[]>;
export function addValue<T>(
  values: ValueCollection<T | T[]>,
  key: string,
  value: T,
): ValueCollection<T | T[]> {
  const actualKey = findKey(values, key) || key;
  return { ...values, [actualKey]: addToValues(values[actualKey], value) };
}
