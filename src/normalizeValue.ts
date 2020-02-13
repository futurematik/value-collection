/**
 * If `value` has zero elements, return undefined; if value has 1 element,
 * return the element; and otherwise return the array.
 */
export function normalizeValue<T>(value: T[]): T | T[] | undefined {
  if (value.length > 1) {
    return value;
  }
  if (value.length === 1) {
    return value[0];
  }
}
