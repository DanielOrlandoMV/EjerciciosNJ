<<<<<<< HEAD
const{crearArchivo}= require ('../helpers/multiplicar4')
const argv= require('../config/yargs')

console.clear();
console.log(argv);

crearArchivo(argv.b, argv.l)
.then(nombreArchivo => console.log(nombreArchivo,'creado'))
=======
const{crearArchivo}= require ('../helpers/multiplicar4')
const argv= require('../config/yargs')

console.clear();
console.log(argv);

crearArchivo(argv.b, argv.l)
.then(nombreArchivo => console.log(nombreArchivo,'creado'))
>>>>>>> fdb305fbb70543863e1c8ddc2a118f3706eb940b
.catch(err => console.log(err));