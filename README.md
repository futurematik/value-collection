# value-collection

A collection of types and utility functions for manipulating case-insensitive maps of values, such as HTTP headers.

## API

### ValueCollection<T>

```typescript
interface ValueCollection<T> {
  [key: string]: T;
}
```

A key-value map.

### addToValues()

```typescript
function addToValues<T>(values: T[] | T | undefined, value: T): T[] | T;
```

Adds `value` to the end of the `values` array, returning a new instead of modifying the original.

### addValue()

```typescript
function addValue<T>(
  values: ValueCollection<T[]>,
  key: string,
  value: T,
): ValueCollection<T[]>;
function addValue<T>(
  values: ValueCollection<T | T[]>,
  key: string,
  value: T,
): ValueCollection<T | T[]>;
```

Adds a `value` to a `key`, which may or may not already exist.

### findKey()

```typescript
function findKey<T>(
  headers: ValueCollection<T>,
  key: string,
): string | undefined;
```

Does a case-insensitive search for a key and returns the original case or undefined if not found.

### getLastValue()

```typescript
function getLastValue<T>(
  values: ValueCollection<T | T[]>,
  key: string,
): T | undefined;
function getLastValue<T>(
  values: ValueCollection<T[]>,
  key: string,
): T | undefined;
```

Get the last value for a given `key` in a map of arrays.

### getValue()

```typescript
function getValue<T>(values: ValueCollection<T>, key: string): T | undefined;
```

Does a case-insensitive search for a `key` and returns the value if it exists.

### normalize()

```typescript
function normalize<T>(values: ValueCollection<T[]>): ValueCollection<T | T[]>;
```

For a map with array values, returns the result of calling `normalizeValue()` to each value, removing undefined values.

### normalizeValue()

```typescript
function normalizeValue<T>(value: T[]): T | T[] | undefined;
```

If value has zero elements, return undefined; if value has 1 element, return the element; and otherwise return the array.

### overrideValues()

```typescript
function overrideValues<T>(
  ...collections: ValueCollection<T>[]
): ValueCollection<T>;
```

Process the collections from left to right, with later values overriding earlier ones.

### setValue()

```typescript
function setValue<T>(
  values: ValueCollection<T>,
  key: string,
  value: T,
): ValueCollection<T>;
```

Set a value in a collection with a case-insensitive key lookup.

### toArrayValue()

```typescript
function toArrayValue<T>(value: T | T[]): T[];
```

Ensure that `value` is an array.

### toArrayValues()

```typescript
function toArrayValues<T>(
  values: ValueCollection<T | T[]>,
): ValueCollection<T[]>;
```

Convert each value in the map into an array.
