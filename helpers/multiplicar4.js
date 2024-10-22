<<<<<<< HEAD
const fs = require('fs');
const colors = require('colors');

// Se utiliza el module.exports para exportar crearArchivo.
// Se agregó el parámetro listar=false por si el usuario no lo envía.

const crearArchivo = async (base = 5, listar = false) => {
    try {
        let salida = ''; // Para escribir en archivo (sin colores)
        let salidaConsola = ''; // Para la consola (con colores)

        // Genera la tabla de multiplicar
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`; 
            salidaConsola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`; 
        }

        // Si viene el parámetro listar, imprime en consola
        if (listar) {
            console.log('========================'.green);
            console.log(` Tabla del: ${colors.yellow(base)}`);
            console.log('========================='.green);
            console.log(salidaConsola); 
        }

        // Guardar en archivo (sin colores)
        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt creado`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};
=======
const fs = require('fs');
const colors = require('colors');

// Se utiliza el module.exports para exportar crearArchivo.
// Se agregó el parámetro listar=false por si el usuario no lo envía.

const crearArchivo = async (base = 5, listar = false) => {
    try {
        let salida = ''; // Para escribir en archivo (sin colores)
        let salidaConsola = ''; // Para la consola (con colores)

        // Genera la tabla de multiplicar
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`; 
            salidaConsola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`; 
        }

        // Si viene el parámetro listar, imprime en consola
        if (listar) {
            console.log('========================'.green);
            console.log(` Tabla del: ${colors.yellow(base)}`);
            console.log('========================='.green);
            console.log(salidaConsola); 
        }

        // Guardar en archivo (sin colores)
        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt creado`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};
>>>>>>> fdb305fbb70543863e1c8ddc2a118f3706eb940b
