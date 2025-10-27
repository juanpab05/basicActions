const {countVowels, sumMatrix, isIsogram} = require('../src/level2');

describe('Sara - Level 2 - Logic and conditions', () => {

    test('countVowels counts vowels correctly', () => {
        expect(countVowels('Hello World')).toBe(3);
        expect(countVowels(123)).toBe(0);
    });

    test('sumMatrix correctly sums all numbers in a 2D array', () => {
    expect(sumMatrix([[1,2],[3,4]])).toBe(10);
    expect(sumMatrix([[1,2,'a'],[3,null]])).toBe(6);
    expect(sumMatrix('not an array')).toBe(0);
    });

    test('isIsogram detects words with no repeating letters', () => {
    expect(isIsogram('Machine')).toBe(true);
    expect(isIsogram('Letter')).toBe(false);
    expect(isIsogram('')).toBe(true);
    expect(isIsogram('isogram')).toBe(true);
    expect(isIsogram(123)).toBe(false);
    });

});
