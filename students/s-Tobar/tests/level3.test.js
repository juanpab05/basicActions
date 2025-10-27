const { factorial } = require('../src/level3');

describe('Factorial Tests', () => {
    test('Calcula factorial de números pequeños', () => {
        expect(factorial(0)).toBe(1);
        expect(factorial(1)).toBe(1);
        expect(factorial(2)).toBe(2);
        expect(factorial(3)).toBe(6);
        expect(factorial(4)).toBe(24);
        expect(factorial(5)).toBe(120);
    });

    test('Calcula factorial de números más grandes', () => {
        expect(factorial(6)).toBe(720);
        expect(factorial(7)).toBe(5040);
        expect(factorial(10)).toBe(3628800);
    });

    test('Lanza error para números negativos', () => {
        expect(() => factorial(-1)).toThrow('Input must be a non-negative integer');
        expect(() => factorial(-5)).toThrow('Input must be a non-negative integer');
    });

    test('Lanza error para valores no numéricos', () => {
        expect(() => factorial('5')).toThrow('Input must be a valid number');
        expect(() => factorial(NaN)).toThrow('Input must be a valid number');
        expect(() => factorial(undefined)).toThrow('Input must be a valid number');
        expect(() => factorial(null)).toThrow('Input must be a valid number');
    });

    test('Lanza error para números decimales', () => {
        expect(() => factorial(3.5)).toThrow('Input must be an integer');
        expect(() => factorial(5.2)).toThrow('Input must be an integer');
    });
});
