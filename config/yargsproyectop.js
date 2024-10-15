const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        default:6,
        describe: 'Es la base de la tabla de multiplicar'
    })

    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Define hasta qué número se genera la tabla'
    })
    
    .option('limite', {
        alias: 'limite',
        type: 'number',
        demandOption: false,
        default: 15,
        describe: 'Este es el número límite hasta donde se requiere la tabla'
    })
    
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        if (isNaN(argv.h)) {
            throw 'El límite hasta tiene que ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv;
