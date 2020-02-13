import { ValueCollection } from './ValueCollection';
import { findKey } from './findKey';

/**
 * Set a value in a collection with a case-insensitive key lookup.
 */
export function setValue<T>(
  values: ValueCollection<T>,
  key: string,
  value: T,
): ValueCollection<T> {
  const actualKey = findKey(values, key) || key;
  return { ...values, [actualKey]: value };
}
