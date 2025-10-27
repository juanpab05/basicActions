const { duplicatesMatrix, logicCircuit, validatePasswordScore} = require('../src/level3');


describe('Sara - Level 3 -  Algorithms and metrics', () => {

    test('duplicatesMatrix determine if a 2D array contains any duplicate numbers', () => {
        expect(duplicatesMatrix([[1,2,3],[4,5,6]])).toBe(false);
        expect(duplicatesMatrix([[1,2,3],[4,5,2]])).toBe(true);
        expect(duplicatesMatrix('not an array')).toBe(false);
    });

    test('logicCircuit logic gate', () => {
        expect(logicCircuit([true, true, true], 'AND')).toBe(true);
        expect(logicCircuit([true, false, true], 'AND')).toBe(false);
        expect(logicCircuit([false, false, false], 'OR')).toBe(false);
        expect(logicCircuit([true, false, false], 'OR')).toBe(true);
        expect(logicCircuit([true, false], 'XOR')).toBe(true);
        expect(logicCircuit([true, true], 'XOR')).toBe(false);
        expect(logicCircuit([false, false, true], 'XOR')).toBe(true);
        expect(logicCircuit([true, false], 'NOT')).toEqual([false, true]);
        expect(logicCircuit([false, false], 'NOT')).toEqual([true, true]);
        expect(logicCircuit('not an array', 'AND')).toBeNull();
        expect(logicCircuit([true, false], 'NAND')).toBeNull();
    });

    test('validatePasswordScore password score validation', () => {
        expect(validatePasswordScore('Abc123!@')).toBe(5);
        expect(validatePasswordScore('StrongPass1$')).toBe(5);
        expect(validatePasswordScore('short1A')).toBe(3);
        expect(validatePasswordScore('nocaps123!')).toBe(4);
        expect(validatePasswordScore('NOLOWER123!')).toBe(4);
        expect(validatePasswordScore('NoNumber!')).toBe(4);
        expect(validatePasswordScore('NoSpecial123')).toBe(4);
        expect(validatePasswordScore(12345678)).toBe(0);
        expect(validatePasswordScore(null)).toBe(0);
        expect(validatePasswordScore(undefined)).toBe(0);
    })
    
});
