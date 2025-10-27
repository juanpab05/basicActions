const { describe, test, expect } = require('@jest/globals');
const { primesBefore, factorial, geomCalc } = require('../src/level3.js');

describe('Level 1 – Basic Functions', () => {
  // -----------------------------
  test('primesBefore: Show all prime numbers before a number', () => {
    expect(primesBefore(10)).toStrictEqual([2, 3, 5, 7]);
    expect(primesBefore(2)).toStrictEqual([2]);
    expect(() => primesBefore('not a number')).toThrow();
  });

  // -----------------------------
  test('factorial: Calculate the factorial of a number recursively', () => {
    expect(factorial(2)).toBe(2);
    expect(factorial(10)).toBe(3628800);
    expect(() => factorial()).toThrow();
    expect(() => factorial('not a number')).toThrow();
  });

  // -----------------------------
  test('geomCalc: Calculator with the 6 trigonometrical relations and the option to input degrees or radians', () => {
    expect(geomCalc("sin", "deg", 90)).toBe(1);
    expect(geomCalc("cos", "rad", Math.PI/4)).toBe(0.71);
    expect(geomCalc("tan", "deg", 45)).toBe(1);
    expect(geomCalc("sec", "deg", 60)).toBe(2);
    expect(geomCalc("csc", "deg", 30)).toBe(2);
    expect(geomCalc("cot", "deg", 45)).toBe(1);
    expect(() => geomCalc("tan", "nose", 67)).toThrow();
    expect(() => geomCalc("algo", "deg", 777)).toThrow();
  });
});
