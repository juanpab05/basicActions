//---function 1 ---
function invertirOrdenPalabras(frase) {
    return frase.split(' ').reverse().join(' ');
}
//--- function 2 ---

function contarLetras(texto) {
    const contador = {};
    
    for (let letra of texto.toLowerCase()) {
        if (letra >= 'a' && letra <= 'z') {
            contador[letra] = (contador[letra] || 0) + 1;
        }
    }
    
    return contador;
}
// --- function 3 ---

function generarUsuario(nombre, apellido) {
    const numeroAleatorio = Math.floor(Math.random() * 1000);
    const nombreUsuario = (nombre.slice(0, 3) + apellido.slice(0, 3)).toLowerCase();
    return `${nombreUsuario}${numeroAleatorio}`;
}

//Export so jest can use them
module.exports = { invertirOrdenPalabras, contarLetras, generarUsuario };