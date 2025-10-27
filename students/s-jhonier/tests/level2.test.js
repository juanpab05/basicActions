const { countWords, findLongestWord, hasUniqueChars } = require('../src/level2');

describe('Jhonier - Level 3 - Logic and Conditions', () => {
  // -----------------------------
  test('countWords: should count words correctly', () => {
    expect(countWords('Hola mundo')).toBe(2);
    expect(countWords('   Esto   es   una   prueba ')).toBe(4);
    expect(countWords('')).toBe(0);
    expect(() => countWords(123)).toThrow();
  });

  // -----------------------------
  test('findLongestWord: should find the longest word', () => {
    expect(findLongestWord('El desarrollo de software es divertido')).toBe('desarrollo');
    expect(findLongestWord('uno dos tres')).toBe('tres');
    expect(findLongestWord('')).toBe('');
    expect(() => findLongestWord(456)).toThrow();
  });

  // -----------------------------
  test('hasUniqueChars: should detect unique characters', () => {
    expect(hasUniqueChars('hola')).toBe(true);
    expect(hasUniqueChars('casa')).toBe(false);
    expect(hasUniqueChars('abcde')).toBe(true);
    expect(() => hasUniqueChars(null)).toThrow();
  });
});
