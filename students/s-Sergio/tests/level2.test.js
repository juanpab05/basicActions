const {generarContraseñaSegura, mezclarString, calcularFortaleza } = require('../src/level2');

describe('Level 2 – Logic and conditions', () => {
    //---------------------
    test('generarContraseñaSegura: Should generate a safe password with a predetermined configuration', () => {
       const contraseña1 = generarContraseñaSegura();
       console.log(contraseña1);
    });
    test('generarContraseñaSegura: Should generate a longer password', () => {
        const contraseña2 = generarContraseñaSegura({
            longitud: 16
        });
        console.log(contraseña2.contraseña);
    });
    test('generarContraseñaSegura: Should generate a password with only numbers and letters', () => {
        const contraseña3 = generarContraseñaSegura({
            incluirSimbolos: false
        });
        console.log(contraseña3);
    });
    test('generarContraseñaSegura: Should catch an error when you input an invalid password', () => {
        try{
            const contraseñaInvalida = generarContraseñaSegura({
                incluirMayusculas: false,
                incluirMinusculas: false, 
                incluirNumeros: false,
                incluirSimbolos: false,

            });

        }catch(error){
            console.error('Error:', error.message);
        }
    });

});
