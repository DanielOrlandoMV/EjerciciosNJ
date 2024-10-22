<<<<<<< HEAD
//Christian tomas ajanel ajanel 
// carnet 2290-20-21920


const getUsuarioSync = (id) =>{
    const startPoint= new Date().getTime();
        while ( new Date().getTime()-startPoint <= 3000) {
            //esperando---
            //haciendo fetch de base de datos 
            // robando datros de facebook
        }

        return {
            id,
           nombre: `Usuario ${ id }`
        };
}


const getUsuario =(id, callback)=>{
    const Usuario={
        id,
        nombre: `Usuario ${ id }`
    };
    
    setTimeout(() => {
        callback(Usuario);
    },3000);
}

module.exports={
    getUsuario,
    getUsuarioSync
=======
//Christian tomas ajanel ajanel 
// carnet 2290-20-21920


const getUsuarioSync = (id) =>{
    const startPoint= new Date().getTime();
        while ( new Date().getTime()-startPoint <= 3000) {
            //esperando---
            //haciendo fetch de base de datos 
            // robando datros de facebook
        }

        return {
            id,
           nombre: `Usuario ${ id }`
        };
}


const getUsuario =(id, callback)=>{
    const Usuario={
        id,
        nombre: `Usuario ${ id }`
    };
    
    setTimeout(() => {
        callback(Usuario);
    },3000);
}

module.exports={
    getUsuario,
    getUsuarioSync
>>>>>>> fdb305fbb70543863e1c8ddc2a118f3706eb940b
}