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
    test('generarContraseñaSegura: Should create a password with only numbers', () => {
        const contraseña5 = generarContraseñaSegura({
            incluirMayusculas: false,
            incluirMinusculas: false,
            incluirSimbolos: false,
            longitud: 6
        });
        console.log(contraseña5.contraseña);
    });
     test('generarContraseñaSegura: Should create a very safe password', () => {
        const contraseña6 = generarContraseñaSegura({
            longitud: 20,
             excluirCaracteresAmbiguos: true
        });
        console.log(contraseña6);
     });

     test('generarContraseñaSegura: Should generate passwords for different services', () => {
        function generarContraseñasParaServicios() {
            const servicios = {
                banco: {
                    longitud: 16,
                    incluirMayusculas: true,
                    incluirMinusculas: true,
                    incluirNumeros: true,
                    incluirSimbolos: true,
                    excluirCaracteresAmbiguos: true

                },
                email: {
                    longitud: 14,
                    incluirMayusculas: true,
                    incluirMinusculas: true,
                    incluirNumeros: true,
                    incluirSimbolos: true,
                    excluirCaracteresAmbiguos: true
                },
                redesSociales: {
                    longitud: 12,
                    incluirMayusculas: true,
                    incluirMinusculas: true,
                    incluirNumeros: true,
                    incluirSimbolos: true,
                    excluirCaracteresAmbiguos: true
                },
                 wifi: {
                    longitud: 20,
                    incluirMayusculas: true,
                    incluirMinusculas: true,
                    incluirNumeros: true,
                    incluirSimbolos: true,
                    excluirCaracteresAmbiguos: true

                }

            };
            console.log(" CONTRASEÑAS POR SERVICIO\n");
             for (const [servicio, config] of Object.entries(servicios)) {
                const resultado = generarContraseñaSegura(config);
                console.log(`📱 ${servicio.toUpperCase()}:`);
                console.log(`   Contraseña: ${resultado.contraseña}`);
                console.log(`   Fortaleza: ${resultado.fortaleza}`);
                console.log(`   Longitud: ${resultado.longitud}`);
                console.log("   ---");
             }

        }
        // Uso
        generarContraseñasParaServicios();
     });
     test('generarContraseñaSegura: Should mix a string of words', () => {
        const resultado = mezclarString("hola", "mundo");
        console.log(resultado);
     });
     test('generarContraseñaSegura: Should generate passwords with symbols but without excluding vague characters', () => {
        const contraseñaCompleta = generarContraseñaSegura({
                excluirCaracteresAmbiguos: false,
                longitud: 20
        });
     });


});
