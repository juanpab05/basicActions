const{GeneradorLaberintos} = require('../src/level3');

describe('level 3 - Algorithms and metrics', () => {
    test('GeneradorLaberintos: it should create and visualize a small labyrinth', () => {
        const laberintoBasico = new GeneradorLaberintos(15, 15);
        laberintoBasico.generarLaberinto();
        const complejidad = laberintoBasico.medirComplejidad();
        console.log("Métricas de complejidad:");
        console.log(`- Puntuación: ${complejidad.puntuacion.toFixed(2)}`);
        console.log(`- Tiempo análisis: ${complejidad.tiempoProcesamiento.toFixed(2)}ms`);
        console.log(`- Celdas caminables: ${complejidad.metricas.totalCeldas}`);
        console.log(`- Dead ends: ${complejidad.metricas.deadEnds}`);
        console.log(`- Intersecciones: ${complejidad.metricas.intersecciones}`);
    });
    test('GeneradorLaberintos: It should compare labyrinths of different sizes', () => {
        const tamanios = [11, 21, 31];
        tamanios.forEach(tamanio => {
            console.log('\n=== LABERINTO ${tamanio}x${tamanio} ===');
            const generador = new GeneradorLaberintos(tamanio, tamanio);
            //Medir tiempo de generacion
            const inicio = performance.now();
            generador.generarLaberinto();
            const tiempoGeneracion = performance.now() - inicio;
            const complejidad = generador.medirComplejidad();
            console.log(`Tiempo generación: ${tiempoGeneracion.toFixed(2)}ms`);
            console.log(`Puntuación complejidad: ${complejidad.puntuacion.toFixed(2)}`);
            console.log(`Densidad: ${(complejidad.metricas.totalCeldas / (tamanio * tamanio) * 100).toFixed(1)}%`);

            //Mostrar solo laberintos pequeños por legibilidad
            if (tamanio <= 21 ) {
                console.log(generador.visualizar());
            }
        });
    });
    test('GeneradorLaberintos: It should generate multiple labyrinths and choose the most complex', () => {
        function encontrarLaberintoMasComplejo(cantidad = 5, tamanio = 25) {
             let laberintoMasComplejo = null;
              let maxComplejidad = -1;
               console.log(`Generando ${cantidad} laberintos ${tamanio}x${tamanio}...`);
               for (let i = 0; i < cantidad; i++) {
                 const generador = new GeneradorLaberintos(tamanio, tamanio);
                  generador.generarLaberinto();
                  const complejidad = generador.medirComplejidad();

                   console.log(`Laberinto ${i + 1}: ${complejidad.puntuacion.toFixed(2)} puntos`);
                   if (complejidad.puntuacion > maxComplejidad) {
                    maxComplejidad = complejidad.puntuacion;
                    laberintoMasComplejo = {
                         generador: generador,
                          complejidad: complejidad,
                           numero: i + 1
                    };
                   }
               }
                console.log(`\n LABERINTO MÁS COMPLEJO: #${laberintoMasComplejo.numero}`);
                console.log(`Puntuación: ${laberintoMasComplejo.complejidad.puntuacion.toFixed(2)}`);
                console.log(`Intersecciones: ${laberintoMasComplejo.complejidad.metricas.intersecciones}`);
                console.log(`Dead ends: ${laberintoMasComplejo.complejidad.metricas.deadEnds}`);

                 return laberintoMasComplejo;

        }
        // Encontrar el laberinto más complejo entre 5 generados
        const masComplejo = encontrarLaberintoMasComplejo(5, 25);
        

    });
});


