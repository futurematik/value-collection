import { ValueCollection } from './ValueCollection';

/**
 * Does a case-insensitive search for a key and returns the original case or
 * undefined if not found.
 */
export function findKey<T>(
  headers: ValueCollection<T>,
  key: string,
): string | undefined {
  key = key.toLowerCase();

  for (const header in headers) {
    if (key === header.toLowerCase()) {
      return header;
    }
  }
}
