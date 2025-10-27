const { describe, test, expect } = require('@jest/globals');
const { isEven, minArray, pythagoras } = require('../src/level1.js');

describe('Level 1 – Basic Functions', () => {
  // -----------------------------
  test('isEven: Detect if a number is even', () => {
    expect(isEven(8)).toBe(true);
    expect(isEven(1)).toBe(false);
    expect(() => isEven('not a number')).toThrow();
  });

  // -----------------------------
  test('minArray: should find the minimum value and validate type', () => {
    expect(minArray([5, 2, -3])).toBe(-3);
    expect(minArray([])).toBe(Infinity);
    expect(() => minArray('not an array')).toThrow();
  });

  // -----------------------------
  test('pythagoras: Should calculate the hypotenuse given 2 sides correctly', () => {
    expect(pythagoras(3, 4)).toBe(5);
    expect(pythagoras(5, 12)).toBe(13);
    expect(() => pythagoras(3, 'hola')).toThrow();
  });
});
