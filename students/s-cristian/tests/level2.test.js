const { describe, test, expect } = require('@jest/globals');
const { toTitleCase, fizzBuzz, isIsogram, findUniqueWords, validateEmail } = require('../src/level2.js');

describe('Cristian - Level 2 – Logic and Conditions', () => {
  // -----------------------------
  test('toTitleCase: Convert text to Title Case', () => {
    expect(toTitleCase('hello world')).toBe('Hello World');
    expect(toTitleCase('javascript is awesome')).toBe('Javascript Is Awesome');
    expect(toTitleCase('UPPERCASE TEXT')).toBe('Uppercase Text');
    expect(() => toTitleCase(123)).toThrow('Input must be a string');
  });

  // -----------------------------
  test('fizzBuzz: Create a FizzBuzz function', () => {
    expect(fizzBuzz(15)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
    expect(fizzBuzz(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
    expect(fizzBuzz(3)).toEqual([1, 2, 'Fizz']);
    expect(() => fizzBuzz('15')).toThrow('Input must be a number');
    expect(() => fizzBuzz(0)).toThrow('Input must be a positive number');
  });

  // -----------------------------
  test('isIsogram: Detect if a word is an isogram', () => {
    expect(isIsogram('abcdef')).toBe(true);
    expect(isIsogram('hello')).toBe(false);
    expect(isIsogram('subdermatoglyphic')).toBe(true);
    expect(isIsogram('programming')).toBe(false);
    expect(() => isIsogram(123)).toThrow('Input must be a string');
  });

  // -----------------------------
  test('findUniqueWords: Find unique words in a paragraph', () => {
    expect(findUniqueWords('hello world hello')).toEqual(['hello', 'world']);
    expect(findUniqueWords('the quick brown fox jumps over the lazy dog')).toEqual(['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog']);
    expect(findUniqueWords('word')).toEqual(['word']);
    expect(() => findUniqueWords(123)).toThrow('Input must be a string');
  });

  // -----------------------------
  test('validateEmail: Validate if a string is a simple email', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('user.name@domain.co.uk')).toBe(true);
    expect(validateEmail('invalid-email')).toBe(false);
    expect(validateEmail('test@')).toBe(false);
    expect(validateEmail('@domain.com')).toBe(false);
    expect(() => validateEmail(123)).toThrow('Input must be a string');
  });
});
