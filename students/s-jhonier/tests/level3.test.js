const { isAnagram, wordFrequency, matrixDiagonalSum } = require('../src/level3');

describe('Jhonier - Level 3 - Advanced Logic', () => {
  // -----------------------------
  test('isAnagram: should detect anagrams correctly', () => {
    expect(isAnagram('roma', 'amor')).toBe(true);
    expect(isAnagram('hola', 'halo')).toBe(true);
    expect(isAnagram('perro', 'gato')).toBe(false);
    expect(() => isAnagram(123, 'abc')).toThrow();
  });

  // -----------------------------
  test('wordFrequency: should count word occurrences', () => {
    expect(wordFrequency('Hola hola mundo mundo mundo')).toEqual({ hola: 2, mundo: 3 });
    expect(wordFrequency('Un dos tres')).toEqual({ un: 1, dos: 1, tres: 1 });
    expect(() => wordFrequency(123)).toThrow();
  });

  // -----------------------------
  test('matrixDiagonalSum: should sum diagonal elements', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    expect(matrixDiagonalSum(matrix)).toBe(15);

    const matrix2 = [
      [10, 0],
      [0, 5]
    ];
    expect(matrixDiagonalSum(matrix2)).toBe(15);

    expect(() => matrixDiagonalSum([[1, 2], [3]])).toThrow();
  });
});
