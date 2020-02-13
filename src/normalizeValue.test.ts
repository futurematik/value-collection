import 'jest';
import { normalizeValue } from './normalizeValue';

describe('normalizeValue', () => {
  it('turns a single-element array into a scalar', () => {
    const input = ['one'];
    const output = normalizeValue(input);

    expect(output).toEqual(input[0]);
  });

  it('turns a zero-element array into undefined', () => {
    const input: string[] = [];
    const output = normalizeValue(input);

    expect(output).toBeUndefined();
  });

  it('leaves a multi-element array as-is', () => {
    const input = ['one', 'two', 'three'];
    const output = normalizeValue(input);

    expect(output).toEqual(input);
  });
});
