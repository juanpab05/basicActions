const { describe, test, expect } = require('@jest/globals');
const { isPrime, insertionSort, repeatedNumbers } = require('../src/level2.js');

describe('Level 1 – Basic Functions', () => {
  // -----------------------------
  test('isPrime: Detect if a number is prime', () => {
    expect(isPrime(11)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(() => isPrime('not a number')).toThrow();
  });

  // -----------------------------
  test('insertionSort: should return an array sorted ascendingly', () => {
    expect(insertionSort([10, 1, 5, 2, 0, -9])).toStrictEqual([-9, 0, 1, 2, 5, 10]);
    expect(insertionSort([9, -1, 0, 4, -10, 2])).toStrictEqual([-10, -1, 0, 2, 4, 9]);
    expect(() => insertionSort([])).toThrow();
    expect(() => insertionSort('not an array')).toThrow();
  });

  // -----------------------------
  test('repeatedNumbers: Should return an array with the repeated numbers', () => {
    expect(repeatedNumbers([4, 4, 1, 1, 3, 3])).toContain(1, 3, 4);
    expect(repeatedNumbers([5, 1, 5, 2, 2, 2])).toContain(2, 5);
    expect(repeatedNumbers([1, 1, 1])).toStrictEqual([1]);
    expect(() => repeatedNumbers('hola')).toThrow();
  });
});
