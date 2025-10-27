const { longestWord, sumEven, reverseEachWord } = require('../src/level1');

describe('Santiago - Level 1 - Basic Functions', () => {
    // -----------------------------
    test('longestWord: should return the longest word in a sentence', () => {
        expect(() => longestWord(123)).toThrow();
        expect(() => longestWord(['hola', 'mundo'])).toThrow();
        expect(longestWord('hola soy santiago amariles')).toBe('santiago');
        expect(longestWord('el gato duerme mucho')).toBe('duerme');
    });

    // -----------------------------
    test('sumEven: should return the sum of even numbers in an array', () => {
        expect(() => sumEven('hola')).toThrow();
        expect(() => sumEven(123)).toThrow();
        expect(sumEven([1, 2, 3, 4, 5, 6])).toBe(12);
        expect(sumEven([11, 13, 17])).toBe(0);
    });

    // -----------------------------
    test('reverseEachWord: should reverse each word in a sentence', () => {
        expect(() => reverseEachWord(456)).toThrow();
        expect(() => reverseEachWord(['hola', 'mundo'])).toThrow();
        expect(reverseEachWord('hola mundo')).toBe('aloh odnum');
        expect(reverseEachWord('  hola   santiago  ')).toBe('aloh ogaitnas');
    });
});