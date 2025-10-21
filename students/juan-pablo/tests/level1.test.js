const { isPalindrome, sumArray, countVowels } = require('../src/level1');

describe('Level 1 – Basic Functions', () => {
  // -----------------------------
  test('isPalindrome: should detect palindromes', () => {
    expect(isPalindrome('Anita lava la tina')).toBe(true);
    expect(isPalindrome('radar')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
  });

  // -----------------------------
  test('sumArray: should add numbers and validate type', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
    expect(sumArray([])).toBe(0);
    expect(() => sumArray('not an array')).toThrow();
  });

  // -----------------------------
  test('countVowels: should count vowels correctly', () => {
    expect(countVowels('Hello World')).toBe(3);
    expect(countVowels('BCDFG')).toBe(0);
    expect(countVowels('AEiou')).toBe(5);
  });
});
