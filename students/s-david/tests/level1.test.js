const { countWordsArray, invertArray, avgArray } = require('../src/level1');

describe('David - Level 1 - Basic Functions', () => {
    // -----------------------------
    test('countWordsArray: should count total of words on an array', () => {
        expect(() => countWordsArray(3)).toThrow();
        expect(() => countWordsArray("Anita")).toThrow();
        expect(countWordsArray([3, "Juan", 7, 1, "Diego"])).toStrictEqual(2);
        expect(countWordsArray([1, "David", 3, 8, "Santiago", "Juan", 17])).toStrictEqual(3);
    });

    // -----------------------------
    test('invertArray: should invert an array', () => {
        expect(() => invertArray(3)).toThrow();
        expect(() => invertArray("Anita")).toThrow();
        expect(invertArray([3, 2, 7])).toStrictEqual([7, 2, 3]);
        expect(invertArray([1, 3, "Juan", 17])).toStrictEqual([17, "Juan", 3, 1]);
    });

        // -----------------------------
    test('avgArray: should return the average of an array with numbers', () => {
        expect(() => avgArray(3)).toThrow();
        expect(() => avgArray("Anita")).toThrow();
        expect(avgArray([3, 2, 7])).toStrictEqual(4);
        expect(avgArray([2, 3, "Juan", 10, 5])).toStrictEqual(5);
    });
});