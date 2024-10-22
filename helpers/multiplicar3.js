<<<<<<< HEAD
const fs = require('fs')
/**Ejercicio - Utilizando una Función async
Trabajando con el archivo app6.js
Se utiliza el modulo.exports para dar permiso a este archivo
de exportar crearArchivo hasta el final de este archivo.
*/
const crearArchivo = async (base = 5) => {
    try {
        console.log( '====================');
        console.log('Tabla del:', base     );
        console.log('==================== ');
        let salida = '';

        for(let i=1; i <= 10; i++){
        salida += `${base} x ${i} = ${base *i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    }catch (err) {

        throw err

    }
}

module.exports = {
crearArchivo
=======
const fs = require('fs')
/**Ejercicio - Utilizando una Función async
Trabajando con el archivo app6.js
Se utiliza el modulo.exports para dar permiso a este archivo
de exportar crearArchivo hasta el final de este archivo.
*/
const crearArchivo = async (base = 5) => {
    try {
        console.log( '====================');
        console.log('Tabla del:', base     );
        console.log('==================== ');
        let salida = '';

        for(let i=1; i <= 10; i++){
        salida += `${base} x ${i} = ${base *i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    }catch (err) {

        throw err

    }
}

module.exports = {
crearArchivo
>>>>>>> fdb305fbb70543863e1c8ddc2a118f3706eb940b
}