const { mergeAlternate, evenOddLabels, validatePassword } = require('../src/level2');

describe('Santiago - Level 2 - Logic and conditions', () => {
    // -----------------------------
    test('mergeAlternate: should merge two arrays alternating elements', () => {
        expect(() => mergeAlternate("hola", [1, 2, 3])).toThrow();
        expect(() => mergeAlternate([1, 2], "adios")).toThrow();
        expect(mergeAlternate([1, 2, 3], ['a', 'b', 'c'])).toStrictEqual([1, 'a', 2, 'b', 3, 'c']);
        expect(mergeAlternate(['x', 'y'], [10, 20, 30])).toStrictEqual(['x', 10, 'y', 20, 30]);
        expect(mergeAlternate([], ['a', 'b'])).toStrictEqual(['a', 'b']);
    });

    // -----------------------------
    test('evenOddLabels: should return correct even/odd labels', () => {
        expect(() => evenOddLabels("hola")).toThrow();
        expect(() => evenOddLabels([1, "dos", 3])).toThrow();
        expect(evenOddLabels([1, 2, 3, 4])).toStrictEqual(["1-odd", "2-even", "3-odd", "4-even"]);
        expect(evenOddLabels([10, 15, 22])).toStrictEqual(["10-even", "15-odd", "22-even"]);
    });

    // -----------------------------
    test('validatePassword: should check password strength', () => {
        expect(() => validatePassword(123456)).toThrow();
        expect(validatePassword("abc")).toBe(false);                    
        expect(validatePassword("password")).toBe(false);               
        expect(validatePassword("Password123")).toBe(false);            
        expect(validatePassword("Password123!")).toBe(true);            
        expect(validatePassword("HolaMundo7@")).toBe(true);             
    });
});