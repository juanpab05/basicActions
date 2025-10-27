const { invertirOrdenPalabras, contarLetras, generarUsuario } = require('../src/level1');

describe('Level 1 – Basic Functions', () => {
    //------------------
    test('invertirOrdenPalabras: Should invert the order of words', () => {
        console.log(invertirOrdenPalabras("Hola mundo JavaScript"));
        console.log(invertirOrdenPalabras("El sol brilla hoy")); 
        console.log(invertirOrdenPalabras("Programación es divertida")); 
        console.log(invertirOrdenPalabras("Me gusta la pizza")); 
    });
    test('contarLetras: Should count the number of letters in a word', () => {
        console.log(contarLetras("programacion"));
        console.log(contarLetras("noche"));
        console.log(contarLetras("Amanecer"));
        console.log(contarLetras("matematicas"));
        console.log(contarLetras("onomatopeya"));
    });
    test('generarUsuario: Should generate a unique username combining name, surname and a random number', () => {
        console.log(generarUsuario("Maria", "Gonzalez")); 
        console.log(generarUsuario("Carlos", "Lopez")); 
        console.log(generarUsuario("Ana", "Martinez")); 
    });
});
