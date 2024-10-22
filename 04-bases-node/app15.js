<<<<<<< HEAD
const { crearArchivo}=require ('../helpers/multiplicar4')
const colors = require ('colors')
const argv= require ('../config/yargs2')

console.clear();
console.log(argv)

crearArchivo(argv.b,argv.l)
.then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado con exito'))
.catch(err => console.error(err))
=======
const { crearArchivo}=require ('../helpers/multiplicar4')
const colors = require ('colors')
const argv= require ('../config/yargs2')

console.clear();
console.log(argv)

crearArchivo(argv.b,argv.l)
.then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado con exito'))
.catch(err => console.error(err))
>>>>>>> fdb305fbb70543863e1c8ddc2a118f3706eb940b
