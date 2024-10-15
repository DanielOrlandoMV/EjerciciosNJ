const { crearArchivo } = require('../helpers/multiplicarproyectop');
const colors = require('colors');
const argv = require('../config/yargsproyectop');

console.clear();
console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.error(err));
