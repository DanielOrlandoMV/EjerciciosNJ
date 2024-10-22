<<<<<<< HEAD
const { getUsuario}= require('./usuarios/usuarios');

console.log('inicio de programa');
console.time('inicio');


getUsuario( 1, ( usuario) => {
 console.log('Usuario 1:',usuario);
});

getUsuario( 2, ( usuario) => {
    console.log('Usuario 2:',usuario);
    console.timeEnd('inicio')
   });

console.log('fin del programa');
console.log('inicio');
=======
const { getUsuario}= require('./usuarios/usuarios');

console.log('inicio de programa');
console.time('inicio');


getUsuario( 1, ( usuario) => {
 console.log('Usuario 1:',usuario);
});

getUsuario( 2, ( usuario) => {
    console.log('Usuario 2:',usuario);
    console.timeEnd('inicio')
   });

console.log('fin del programa');
console.log('inicio');
>>>>>>> fdb305fbb70543863e1c8ddc2a118f3706eb940b
