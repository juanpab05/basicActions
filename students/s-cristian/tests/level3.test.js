const { describe, test, expect } = require('@jest/globals');
const { miniCalculator, validatePasswordStrength, factorialRecursive, detectDuplicatesAndStats } = require('../src/level3.js');

describe('Cristian - Level 3 – Algorithms and Metrics', () => {
  // -----------------------------
  test('miniCalculator: Implement a mini calculator with multiple operations', () => {
    expect(miniCalculator(5, 3, 'add')).toBe(8);
    expect(miniCalculator(10, 4, 'subtract')).toBe(6);
    expect(miniCalculator(3, 4, 'multiply')).toBe(12);
    expect(miniCalculator(15, 3, 'divide')).toBe(5);
    expect(miniCalculator(2, 3, 'power')).toBe(8);
    expect(miniCalculator(10, 3, 'modulo')).toBe(1);
    
    expect(() => miniCalculator(5, 0, 'divide')).toThrow('Division by zero is not allowed');
    expect(() => miniCalculator(5, 0, 'modulo')).toThrow('Modulo by zero is not allowed');
    expect(() => miniCalculator(5, 3, 'invalid')).toThrow('Invalid operation');
    expect(() => miniCalculator('5', 3, 'add')).toThrow('Both operands must be numbers');
  });

  // -----------------------------
  test('validatePasswordStrength: Validate password strength', () => {
    const strongPassword = validatePasswordStrength('MyStr0ng!Pass');
    expect(strongPassword.strength).toBe('Very Strong');
    expect(strongPassword.score).toBe(5);
    expect(strongPassword.criteria.length).toBe(true);
    expect(strongPassword.criteria.hasUppercase).toBe(true);
    
    const weakPassword = validatePasswordStrength('weak');
    expect(weakPassword.strength).toBe('Very Weak');
    expect(weakPassword.score).toBe(1);
    
    const mediumPassword = validatePasswordStrength('Medium123');
    expect(mediumPassword.strength).toBe('Strong');
    expect(mediumPassword.score).toBe(4);
    
    expect(() => validatePasswordStrength(123)).toThrow('Input must be a string');
  });

  // -----------------------------
  test('factorialRecursive: Calculate factorial recursively', () => {
    expect(factorialRecursive(0)).toBe(1);
    expect(factorialRecursive(1)).toBe(1);
    expect(factorialRecursive(5)).toBe(120);
    expect(factorialRecursive(10)).toBe(3628800);
    
    expect(() => factorialRecursive(-1)).toThrow('Factorial is not defined for negative numbers');
    expect(() => factorialRecursive('5')).toThrow('Input must be a number');
  });

  // -----------------------------
  test('detectDuplicatesAndStats: Detect duplicates and compute statistics', () => {
    const result = detectDuplicatesAndStats([1, 2, 3, 2, 4, 1, 5]);
    expect(result.total).toBe(7);
    expect(result.unique).toBe(5);
    expect(result.duplicates).toEqual([2, 1]);
    expect(result.duplicatesCount).toBe(2);
    expect(result.mostFrequent).toBe('2');
    expect(result.average).toBeCloseTo(2.57, 2);
    expect(result.min).toBe(1);
    expect(result.max).toBe(5);
    
    const noDuplicates = detectDuplicatesAndStats([1, 2, 3, 4, 5]);
    expect(noDuplicates.duplicates).toEqual([]);
    expect(noDuplicates.duplicatesCount).toBe(0);
    
    expect(() => detectDuplicatesAndStats([])).toThrow('Array cannot be empty');
    expect(() => detectDuplicatesAndStats([1, 'a', 3])).toThrow('All elements must be numbers');
    expect(() => detectDuplicatesAndStats('not an array')).toThrow('Input must be an array');
  });
});
