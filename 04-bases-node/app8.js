<<<<<<< HEAD
const {crearArchivo}= require ('../helpers/multiplicar3')

console.clear();

const [, , arg3='base=5']= process.argv;
const[, base=5] = arg3.split ('=')

crearArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo,'creado'))
=======
const {crearArchivo}= require ('../helpers/multiplicar3')

console.clear();

const [, , arg3='base=5']= process.argv;
const[, base=5] = arg3.split ('=')

crearArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo,'creado'))
>>>>>>> fdb305fbb70543863e1c8ddc2a118f3706eb940b
.catch(err => console.log(err));