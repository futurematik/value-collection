import { ValueCollection } from './ValueCollection';
import { findKey } from './findKey';

/**
 * Does a case-insensitive search for a `key` and returns the value if it
 * exists.
 */
export function getValue<T>(
  values: ValueCollection<T>,
  key: string,
): T | undefined {
  const actualKey = findKey(values, key);
  if (actualKey) {
    return values[actualKey];
  }
}
