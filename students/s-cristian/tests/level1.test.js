const { describe, test, expect } = require('@jest/globals');
const { isPalindrome, sumArray, countVowels, findLargest } = require('../src/level1.js');

describe('Cristian - Level 1 – Basic Functions', () => {
  // -----------------------------
  test('isPalindrome: Detect if a word is a palindrome', () => {
    expect(isPalindrome('ana')).toBe(true);
    expect(isPalindrome('reconocer')).toBe(true);
    expect(isPalindrome('hola')).toBe(false);
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
    expect(() => isPalindrome(123)).toThrow('Input must be a string');
  });

  // -----------------------------
  test('sumArray: Sum all numbers in an array', () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
    expect(sumArray([-1, 0, 1])).toBe(0);
    expect(sumArray([])).toBe(0);
    expect(() => sumArray([1, 'a', 3])).toThrow('All elements must be numbers');
    expect(() => sumArray('not an array')).toThrow('Input must be an array');
  });

  // -----------------------------
  test('countVowels: Count vowels in a sentence', () => {
    expect(countVowels('hello world')).toBe(3);
    expect(countVowels('aeiou')).toBe(5);
    expect(countVowels('bcdfg')).toBe(0);
    expect(countVowels('Hola mundo')).toBe(4);
    expect(() => countVowels(123)).toThrow('Input must be a string');
  });

  // -----------------------------
  test('findLargest: Find the largest number in an array', () => {
    expect(findLargest([1, 5, 3, 9, 2])).toBe(9);
    expect(findLargest([-1, -5, -3])).toBe(-1);
    expect(findLargest([42])).toBe(42);
    expect(() => findLargest([])).toThrow('Array cannot be empty');
    expect(() => findLargest('not an array')).toThrow('Input must be an array');
  });
});
