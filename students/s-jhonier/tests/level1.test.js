const { reverseWords, multiplyArray, capitalizeFirst } = require('../src/level1');

describe('Jhonier - Level 3 - Custom Basic Functions', () => {
  // -----------------------------
  test('reverseWords: should reverse word order', () => {
    expect(reverseWords('hola mundo')).toBe('mundo hola');
    expect(reverseWords('uno dos tres')).toBe('tres dos uno');
    expect(() => reverseWords(123)).toThrow();
  });

  // -----------------------------
  test('multiplyArray: should multiply all elements by a factor', () => {
    expect(multiplyArray([1, 2, 3], 2)).toEqual([2, 4, 6]);
    expect(multiplyArray([], 5)).toEqual([]);
    expect(() => multiplyArray('not array', 2)).toThrow();
    expect(() => multiplyArray([1, 2, 3], 'x')).toThrow();
  });

  // -----------------------------
  test('capitalizeFirst: should capitalize each word', () => {
    expect(capitalizeFirst('hola mundo')).toBe('Hola Mundo');
    expect(capitalizeFirst('javascript es genial')).toBe('Javascript Es Genial');
    expect(() => capitalizeFirst(123)).toThrow();
  });
});
