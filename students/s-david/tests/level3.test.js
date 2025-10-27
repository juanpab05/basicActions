const { miniCalc, checkPasswordStrength, fibonacci } = require('../src/level3');

describe('David - Level 3 – Algorithms and metrics', () => {
    // -----------------------------
    test('miniCalc function', () => {
        expect(miniCalc(5, 3, 'add')).toBe(8);
        expect(miniCalc(5, 3, 'subtract')).toBe(2);
        expect(miniCalc(5, 3, 'multiply')).toBe(15);
        expect(miniCalc(6, 3, 'divide')).toBe(2);
        expect(miniCalc(6, 0, 'divide')).toBe('Division by zero error');
        expect(miniCalc(5, 3, 'modulus')).toBe('Invalid operation');
    });

    // -----------------------------
    test('checkPasswordStrength function', () => {
        expect(checkPasswordStrength('Abcdef1!')).toBe('Strong password');
        expect(checkPasswordStrength('abcdef1!')).toBe('Weak password');
        expect(checkPasswordStrength('Abcdefgh')).toBe('Weak password');
        expect(checkPasswordStrength('12345678')).toBe('Weak password');
        expect(checkPasswordStrength('!@#$%^&*')).toBe('Weak password');
    });

    // -----------------------------
    test('fibonacci function', () => {
        expect(fibonacci(0)).toEqual([]);
        expect(fibonacci(1)).toEqual([0]);
        expect(fibonacci(2)).toEqual([0, 1]);
        expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
        expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
});
