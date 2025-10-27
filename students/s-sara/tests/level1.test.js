const {reverseString, countEvenNumbers, maxNumber} = require('../src/level1');

describe('Sara - Level 1 - Basic functions', () => {

    test('reverseString correctly inverts a text', () => {
    expect(reverseString('Sara')).toBe('araS');
    expect(reverseString('Hello')).toBe('olleH');
    expect(reverseString(123)).toBe(false);
    });

    test('maxNumber find the largest number', () => {
    expect(maxNumber([1, 5, 3, 9])).toBe(9);
    expect(maxNumber([])).toBeNull();
    expect(maxNumber('not an array')).toBeNull();
    });

    test('countEvenNumbers correctly counts even numbers', () => {
    expect(countEvenNumbers([1, 2, 3, 4, 6])).toBe(3);
    expect(countEvenNumbers([1, 3, 5])).toBe(0);
    expect(countEvenNumbers('no an array')).toBe(0);
    });

});

