import { ValueCollection } from './ValueCollection';
import { setValue } from './setValue';

/**
 * Process the collections from left to right, with later values overriding
 * earlier ones.
 */
export function overrideValues<T>(
  ...collections: ValueCollection<T>[]
): ValueCollection<T> {
  return collections.reduce(
    (merged, current) =>
      Object.keys(current).reduce(
        (headers, key) => setValue(headers, key, current[key]),
        merged,
      ),
    {},
  );
}
