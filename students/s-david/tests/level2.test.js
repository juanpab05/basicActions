const { describe, test, expect } = require('@jest/globals');
const { sumOfArrays, FizzBuzz, vaidateEmail } = require('../src/level2');

describe('David - Level 2 - Logic and conditions', () => {
    // -----------------------------
    test('sumOfArrays: should sum 2 arrays', () => {
        expect(() => sumOfArrays([1, 2, 3], [1, 4, 5, 6])).toThrow();
        expect(() => sumOfArrays("Anita", [1, 4, 5, 6])).toThrow();
        expect(() => sumOfArrays([1, 3, "Juan", 4], [1, 4, 5, 6])).toThrow();
        expect(sumOfArrays([3, 2, 7], [1, 4, 6])).toStrictEqual([4, 6, 13]);
        expect(sumOfArrays([3, 2, 7, 17], [1, 4, 6, 21])).toStrictEqual([4, 6, 13, 38]);
    });

    // -----------------------------
    test('FizzBuzz: should return correct array', () => {
        expect(() => FizzBuzz("15")).toThrow();
        expect(FizzBuzz(15)).toStrictEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
        expect(FizzBuzz(5)).toStrictEqual([1, 2, 'Fizz', 4, 'Buzz']);
    });

    // -----------------------------
    test('vaidateEmail: should validate email format', () => {
        expect(vaidateEmail("test@example.com")).toBe(true);
        expect(vaidateEmail("invalid-email")).toBe(false);
        expect(vaidateEmail("another.test@domain.co")).toBe(true);
        expect(vaidateEmail("")).toBe(false);
    });
});