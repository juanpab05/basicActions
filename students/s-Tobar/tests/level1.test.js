// students/s-tuNombre/tests/level1.test.js
const { isPalindrome } = require('../src/level1');

describe('isPalindrome', () => {
    test('Detecta palíndromos simples', () => {
        expect(isPalindrome('ana')).toBe(true);
        expect(isPalindrome('oso')).toBe(true);
        expect(isPalindrome('radar')).toBe(true);
    });

    test('Detecta palíndromos con mayúsculas', () => {
        expect(isPalindrome('Ana')).toBe(true);
        expect(isPalindrome('Reconocer')).toBe(true);
    });

    test('Detecta palíndromos con espacios', () => {
        expect(isPalindrome('anita lava la tina')).toBe(true);
        expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
    });

    test('Detecta que no son palíndromos', () => {
        expect(isPalindrome('hola')).toBe(false);
        expect(isPalindrome('javascript')).toBe(false);
    });

    test('Lanza error con entrada inválida', () => {
        expect(() => isPalindrome(123)).toThrow('Input must be a string');
        expect(() => isPalindrome('')).toThrow('Input cannot be empty');
        expect(() => isPalindrome('   ')).toThrow('Input cannot be empty');
    });
});
