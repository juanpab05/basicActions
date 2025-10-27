class GeneradorLaberintos {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
        this.laberinto = null;
    }

    generarLaberinto() {
        // Inicializar laberinto lleno de paredes
        this.laberinto = Array(this.alto).fill().map(() => 
            Array(this.alto).fill(1)
        );

        const inicio = { x: 1, y: 1 };
        this.laberinto[inicio.y][inicio.x] = 0;

        const frontera = this.obtenerCeldasAdyacentes(inicio.x, inicio.y);
        const stack = [...frontera];

        while (stack.length > 0) {
            // Elegir celda aleatoria de la frontera
            const indiceAleatorio = Math.floor(Math.random() * stack.length);
            const celdaActual = stack.splice(indiceAleatorio, 1)[0];

            const vecinos = this.obtenerVecinosConectados(celdaActual.x, celdaActual.y);
            if (vecinos.length > 0) {
                const vecino = vecinos[Math.floor(Math.random() * vecinos.length)];
                
                // Conectar la celda actual con el vecino
                const xEntre = (celdaActual.x + vecino.x) / 2;
                const yEntre = (celdaActual.y + vecino.y) / 2;
                
                this.laberinto[celdaActual.y][celdaActual.x] = 0;
                this.laberinto[yEntre][xEntre] = 0;

                // Agregar nuevos fronteras
                const nuevasFronteras = this.obtenerCeldasAdyacentes(celdaActual.x, celdaActual.y);
                stack.push(...nuevasFronteras);
            }
        }

        // Crear entrada y salida
        this.laberinto[1][0] = 0; // Entrada
        this.laberinto[this.alto - 2][this.ancho - 1] = 0; // Salida

        return this.laberinto;
    }

    obtenerCeldasAdyacentes(x, y) {
        const direcciones = [
            { dx: 0, dy: -2 }, // Arriba
            { dx: 2, dy: 0 },  // Derecha
            { dx: 0, dy: 2 },  // Abajo
            { dx: -2, dy: 0 }  // Izquierda
        ];

        const celdas = [];
        for (const dir of direcciones) {
            const nuevoX = x + dir.dx;
            const nuevoY = y + dir.dy;
            
            if (nuevoX > 0 && nuevoX < this.ancho - 1 && 
                nuevoY > 0 && nuevoY < this.alto - 1 && 
                this.laberinto[nuevoY][nuevoX] === 1) {
                celdas.push({ x: nuevoX, y: nuevoY });
            }
        }
        return celdas;
    }

    obtenerVecinosConectados(x, y) {
        const direcciones = [
            { dx: 0, dy: -2 }, // Arriba
            { dx: 2, dy: 0 },  // Derecha
            { dx: 0, dy: 2 },  // Abajo
            { dx: -2, dy: 0 }  // Izquierda
        ];

        const vecinos = [];
        for (const dir of direcciones) {
            const nuevoX = x + dir.dx;
            const nuevoY = y + dir.dy;
            
            if (nuevoX >= 0 && nuevoX < this.ancho && 
                nuevoY >= 0 && nuevoY < this.alto && 
                this.laberinto[nuevoY][nuevoX] === 0) {
                vecinos.push({ x: nuevoX, y: nuevoY });
            }
        }
        return vecinos;
    }

    // Función para medir complejidad del laberinto
    medirComplejidad() {
        if (!this.laberinto) return 0;

        const inicioTiempo = performance.now();
        
        let caminos = 0;
        let deadEnds = 0;
        let intersecciones = 0;

        // Analizar estructura del laberinto
        for (let y = 1; y < this.alto - 1; y += 2) {
            for (let x = 1; x < this.ancho - 1; x += 2) {
                if (this.laberinto[y][x] === 0) {
                    caminos++;
                    
                    // Contar conexiones
                    const conexiones = [
                        this.laberinto[y-1][x], // Arriba
                        this.laberinto[y][x+1], // Derecha
                        this.laberinto[y+1][x], // Abajo
                        this.laberinto[y][x-1]  // Izquierda
                    ].filter(celda => celda === 0).length;

                    if (conexiones === 1) deadEnds++;
                    if (conexiones > 2) intersecciones++;
                }
            }
        }

        const finTiempo = performance.now();
        const tiempoProcesamiento = finTiempo - inicioTiempo;

        // Calcular puntuación de complejidad
        const complejidad = {
            puntuacion: (intersecciones * 3) + (deadEnds * 1) + (caminos * 0.5),
            tiempoProcesamiento: tiempoProcesamiento,
            metricas: {
                totalCeldas: caminos,
                deadEnds: deadEnds,
                intersecciones: intersecciones,
                ratioComplejidad: intersecciones / Math.max(1, deadEnds)
            }
        };

        return complejidad;
    }

    // Visualizar laberinto en consola
    visualizar() {
        if (!this.laberinto) return "";
        
        const simbolos = {
            0: ' ', // Camino
            1: '█', // Pared
            entrada: 'E',
            salida: 'S'
        };

        let output = "";
        for (let y = 0; y < this.alto; y++) {
            let fila = "";
            for (let x = 0; x < this.ancho; x++) {
                if (y === 1 && x === 0) {
                    fila += simbolos.entrada;
                } else if (y === this.alto - 2 && x === this.ancho - 1) {
                    fila += simbolos.salida;
                } else {
                    fila += this.laberinto[y][x] === 0 ? simbolos[0] : simbolos[1];
                }
            }
            output += fila + '\n';
        }
        return output;
    }
}

// Función de benchmarking para comparar diferentes tamaños
function benchmarkGeneradorLaberintos() {
    const tamanios = [15, 25, 35, 45];
    const resultados = [];

    for (const tamanio of tamanios) {
        const generador = new GeneradorLaberintos(tamanio, tamanio);
        
        const inicio = performance.now();
        generador.generarLaberinto();
        const tiempoGeneracion = performance.now() - inicio;
        
        const complejidad = generador.medirComplejidad();
        
        resultados.push({
            tamanio: tamanio,
            tiempoGeneracion: tiempoGeneracion,
            complejidad: complejidad.puntuacion,
            metricas: complejidad.metricas
        });
    }

    return resultados;
}

// Ejemplos de uso
console.log("=== GENERADOR DE LABERINTOS ===");

// Laberinto pequeño
const laberintoPequeno = new GeneradorLaberintos(15, 15);
laberintoPequeno.generarLaberinto();
console.log("Laberinto 15x15:");
console.log(laberintoPequeno.visualizar());
console.log("Complejidad:", laberintoPequeno.medirComplejidad());

// Benchmark comparativo
console.log("\n=== BENCHMARK DE RENDIMIENTO ===");
const resultadosBenchmark = benchmarkGeneradorLaberintos();
resultadosBenchmark.forEach(resultado => {
    console.log(`Tamaño ${resultado.tamanio}x${resultado.tamanio}:`);
    console.log(`  - Tiempo generación: ${resultado.tiempoGeneracion.toFixed(2)}ms`);
    console.log(`  - Puntuación complejidad: ${resultado.complejidad.toFixed(2)}`);
    console.log(`  - Intersecciones: ${resultado.metricas.intersecciones}`);
    console.log(`  - Dead ends: ${resultado.metricas.deadEnds}`);
});

module.exports = { GeneradorLaberintos };
