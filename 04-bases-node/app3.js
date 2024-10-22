<<<<<<< HEAD
const fs = require ('fs');

const base = 16
let salida = '';

console.clear();
console.log(' ==');
console.log( `Tabla del: ${base} `);
console.log('====================');
for(let i=1; i <= 10; i++){
salida += `${base} x ${i} = ${base * i}\n`;
}
console.log(salida);
fs.writeFileSync(`tabla-${base}.txt`, salida)
=======
const fs = require ('fs');

const base = 16
let salida = '';

console.clear();
console.log(' ==');
console.log( `Tabla del: ${base} `);
console.log('====================');
for(let i=1; i <= 10; i++){
salida += `${base} x ${i} = ${base * i}\n`;
}
console.log(salida);
fs.writeFileSync(`tabla-${base}.txt`, salida)
>>>>>>> fdb305fbb70543863e1c8ddc2a118f3706eb940b
console.log(`tabla-${base}.txt creado con writeFileSync`);