import { ValueCollection } from './ValueCollection';
import { normalizeValue } from './normalizeValue';

/**
 * For a map with array values, returns the result of calling `normalizeValue()`
 * for each value, removing undefined values.
 */
export function normalize<T>(
  values: ValueCollection<T[]>,
): ValueCollection<T | T[]> {
  return Object.keys(values).reduce((a, x) => {
    const v = normalizeValue(values[x]);
    return v ? { ...a, [x]: v } : a;
  }, {} as ValueCollection<T | T[]>);
}
