const { smartCalculator, passwordLevel, factorial } = require('../src/level3');

describe('Santiago - Level 3 - Algorithms and Metrics', () => {
    // -----------------------------
    test('smartCalculator: should perform different operations correctly', () => {
        expect(() => smartCalculator("3", 2, 'power')).toThrow();
        expect(() => smartCalculator(3, "2", 'mod')).toThrow();

        // Power
        expect(smartCalculator(2, 3, 'power')).toBe(8);

        // Modulo
        expect(smartCalculator(10, 3, 'mod')).toBe(1);
        expect(smartCalculator(10, 0, 'mod')).toBe('Modulo by zero error');

        // Average
        expect(smartCalculator(6, 10, 'average')).toBe(8);

        // Max
        expect(smartCalculator(6, 10, 'max')).toBe(10);

        // Invalid operation
        expect(smartCalculator(5, 2, 'sum')).toBe('Invalid operation');
    });

    // -----------------------------
    test('passwordLevel: should correctly evaluate password strength', () => {
        expect(() => passwordLevel(12345)).toThrow();

        expect(passwordLevel("abc")).toBe('Weak');
        expect(passwordLevel("abc123XYZ")).toBe('Medium');
        expect(passwordLevel("Abc123!@#xyz")).toBe('Very Strong');
        expect(passwordLevel("PASSWORD123")).toBe('Medium');
        expect(passwordLevel("Ab!23")).toBe('Medium');
    });

    // -----------------------------
    test('factorial: should calculate factorial recursively', () => {
        expect(() => factorial("5")).toThrow();
        expect(() => factorial(-3)).toThrow();

        expect(factorial(0)).toBe(1);
        expect(factorial(1)).toBe(1);
        expect(factorial(5)).toBe(120);
        expect(factorial(7)).toBe(5040);
    });
});
