<<<<<<< HEAD
const{crearArchivo} = require ('../helpers/multiplicar3')

console.clear();

const base =2;
crearArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo,'creado'))
=======
const{crearArchivo} = require ('../helpers/multiplicar3')

console.clear();

const base =2;
crearArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo,'creado'))
>>>>>>> fdb305fbb70543863e1c8ddc2a118f3706eb940b
.catch(err => console.error(err));