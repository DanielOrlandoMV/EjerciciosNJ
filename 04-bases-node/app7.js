<<<<<<< HEAD
const {crearArchivo}= require ('../helpers/multiplicar3')

console.log(process.argv);


const[,,arg3='base=5']=process.argv; 
const[, base=5]= arg3.split('=')
=======
const {crearArchivo}= require ('../helpers/multiplicar3')

console.log(process.argv);


const[,,arg3='base=5']=process.argv; 
const[, base=5]= arg3.split('=')
>>>>>>> fdb305fbb70543863e1c8ddc2a118f3706eb940b
console.log(base);