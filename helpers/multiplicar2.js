<<<<<<< HEAD
//Ejercicio - Conversión de función a Promesas
//Aca se utiliza le archivo app5.js
const fs = require('fs')
/**
* Se utiliza el modulo.exports para dar permiso a este archivo * de exportar crearArchivo hasta el final de este archivo.
*/
const crearArchivo = (base = 5) => {

return new Promise ((resolve, reject) => {
console.log('====================');
console.log(' Tabla del:', base);
console.log('==== ====');
let salida = '';

for(let i=1; i <= 10; i++){
    salida += `${base} x ${i} = ${base * i}\n`;
    }
    console.log(salida);
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    resolve(`tabla-${base}.txt`);
    })
    }
    module.exports = {
    crearArchivo
=======
//Ejercicio - Conversión de función a Promesas
//Aca se utiliza le archivo app5.js
const fs = require('fs')
/**
* Se utiliza el modulo.exports para dar permiso a este archivo * de exportar crearArchivo hasta el final de este archivo.
*/
const crearArchivo = (base = 5) => {

return new Promise ((resolve, reject) => {
console.log('====================');
console.log(' Tabla del:', base);
console.log('==== ====');
let salida = '';

for(let i=1; i <= 10; i++){
    salida += `${base} x ${i} = ${base * i}\n`;
    }
    console.log(salida);
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    resolve(`tabla-${base}.txt`);
    })
    }
    module.exports = {
    crearArchivo
>>>>>>> fdb305fbb70543863e1c8ddc2a118f3706eb940b
    }