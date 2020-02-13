import { ValueCollection } from './ValueCollection';
import { toArrayValue } from './toArrayValue';

/**
 * Convert each value in the map into an array.
 */
export function toArrayValues<T>(
  values: ValueCollection<T | T[]>,
): ValueCollection<T[]> {
  return Object.keys(values).reduce(
    (a, x) => ({ ...a, [x]: toArrayValue(values[x]) }),
    {} as ValueCollection<T[]>,
  );
}
