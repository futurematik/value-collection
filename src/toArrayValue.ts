/**
 * Ensure that `value` is an array.
 */
export function toArrayValue<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}
