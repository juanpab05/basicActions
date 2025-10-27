const { fizzBuzz } = require('../src/level2');

describe('FizzBuzz Tests', () => {
    test('Devuelve "Fizz" para múltiplos de 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(6)).toBe('Fizz');
        expect(fizzBuzz(9)).toBe('Fizz');
        expect(fizzBuzz(12)).toBe('Fizz');
    });

    test('Devuelve "Buzz" para múltiplos de 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(10)).toBe('Buzz');
        expect(fizzBuzz(20)).toBe('Buzz');
    });

    test('Devuelve "FizzBuzz" para múltiplos de 15', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
        expect(fizzBuzz(45)).toBe('FizzBuzz');
        expect(fizzBuzz(60)).toBe('FizzBuzz');
    });

    test('Devuelve el número como string si no es múltiplo de 3 ni 5', () => {
        expect(fizzBuzz(1)).toBe('1');
        expect(fizzBuzz(2)).toBe('2');
        expect(fizzBuzz(7)).toBe('7');
        expect(fizzBuzz(11)).toBe('11');
    });

    test('Funciona con números negativos', () => {
        expect(fizzBuzz(-15)).toBe('FizzBuzz');
        expect(fizzBuzz(-3)).toBe('Fizz');
        expect(fizzBuzz(-5)).toBe('Buzz');
    });

    test('Lanza error si el input no es un número válido', () => {
        expect(() => fizzBuzz('3')).toThrow('Input must be a valid number');
        expect(() => fizzBuzz(NaN)).toThrow('Input must be a valid number');
        expect(() => fizzBuzz(undefined)).toThrow('Input must be a valid number');
    });

    test('Lanza error si el input no es un entero', () => {
        expect(() => fizzBuzz(3.5)).toThrow('Input must be an integer');
        expect(() => fizzBuzz(7.2)).toThrow('Input must be an integer');
    });
});