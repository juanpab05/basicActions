function generarContraseñaSegura(opciones = {}) {
    const config = {
        longitud: 12,
        incluirMayusculas: true,
        incluirMinusculas: true,
        incluirNumeros: true,
        incluirSimbolos: true,
        excluirCaracteresAmbiguos: true,
        ...opciones
    };
    
    // Conjuntos de caracteres
    const mayusculas = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // Excluyendo I, O por ambigüedad
    const minusculas = 'abcdefghjkmnpqrstuvwxyz';   // Excluyendo i, l, o
    const numeros = '23456789';                     // Excluyendo 0, 1
    const simbolos = '!@#$%&*+-=?';
    
    // Conjunto completo basado en configuración
    let conjuntoCompleto = '';
    const conjuntosActivos = [];
    
    if (config.incluirMayusculas) {
        conjuntoCompleto += mayusculas;
        conjuntosActivos.push(mayusculas);
    }
    if (config.incluirMinusculas) {
        conjuntoCompleto += minusculas;
        conjuntosActivos.push(minusculas);
    }
    if (config.incluirNumeros) {
        conjuntoCompleto += numeros;
        conjuntosActivos.push(numeros);
    }
    if (config.incluirSimbolos) {
        conjuntoCompleto += simbolos;
        conjuntosActivos.push(simbolos);
    }
    
    // Validar que al menos un conjunto esté activo
    if (conjuntoCompleto.length === 0) {
        throw new Error('Debe incluir al menos un tipo de carácter');
    }
    
    let contraseña = '';
    const caracteresUsados = new Set();
    
    // Asegurar al menos un carácter de cada conjunto activo
    for (const conjunto of conjuntosActivos) {
        const caracterAleatorio = conjunto[Math.floor(Math.random() * conjunto.length)];
        contraseña += caracterAleatorio;
        caracteresUsados.add(caracterAleatorio);
    }
    
    // Completar la longitud restante
    while (contraseña.length < config.longitud) {
        const caracter = conjuntoCompleto[Math.floor(Math.random() * conjuntoCompleto.length)];
        
        // Evitar repeticiones consecutivas excesivas
        if (config.excluirCaracteresAmbiguos) {
            const ultimoCaracter = contraseña[contraseña.length - 1];
            if (caracter === ultimoCaracter) {
                continue; // Saltar si es igual al anterior
            }
        }
        
        contraseña += caracter;
        caracteresUsados.add(caracter);
    }
    
    // Mezclar la contraseña para que los caracteres obligatorios no estén al inicio
    contraseña = mezclarString(contraseña);
    
    return {
        contraseña,
        fortaleza: calcularFortaleza(contraseña, conjuntosActivos.length),
        longitud: contraseña.length,
        conjuntosUsados: conjuntosActivos.length
    };
}

function mezclarString(str) {
    const array = str.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
}

function calcularFortaleza(contraseña, conjuntosUsados) {
    let puntuacion = 0;
    
    // Longitud
    if (contraseña.length >= 16) puntuacion += 3;
    else if (contraseña.length >= 12) puntuacion += 2;
    else if (contraseña.length >= 8) puntuacion += 1;
    
    // Diversidad de conjuntos
    puntuacion += (conjuntosUsados - 1) * 2;
    
    // Caracteres únicos
    const caracteresUnicos = new Set(contraseña).size;
    const ratioUnicidad = caracteresUnicos / contraseña.length;
    if (ratioUnicidad > 0.8) puntuacion += 2;
    else if (ratioUnicidad > 0.6) puntuacion += 1;
    
    // Determinar nivel de fortaleza
    if (puntuacion >= 6) return 'Muy Fuerte';
    if (puntuacion >= 4) return 'Fuerte';
    if (puntuacion >= 2) return 'Moderada';
    return 'Débil';
}
