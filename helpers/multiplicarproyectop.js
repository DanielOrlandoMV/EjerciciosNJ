<<<<<<< HEAD
const fs = require('fs');
const PDFDocument = require('pdfkit');
const colors = require('colors');

const crearArchivo = async (base = 6, listar = false, hasta = 10) => {
    try {
        let consola = '';
        let salida = '';


        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${colors.blue(base)} ${'x'.red} ${colors.blue(i)} ${'='.bgYellow} ${colors.green(base * i)}\n`;
        }

        if (listar) {
            console.log('========================='.red);
            console.log(`|     Tabla : ${colors.blue(base)}        |`.red);
            console.log('========================='.red);
            console.log(consola);
        }

        
        const doc = new PDFDocument();
        const filePath = `../salida/Creacion-tabla-${base}-hasta-${hasta}-en-formato.pdf`;
        doc.pipe(fs.createWriteStream(filePath));

       
        doc.fontSize(20).text(`Tabla de multiplicar ${base} hasta ${hasta}`, {
            align: 'center'
        });
        doc.moveDown();
     
         for (let i = 1; i <= hasta; i++) {
             doc.fontSize(16)
                 .fillColor('black')
                 .text(`${base}`, { continued: true }) 
                  .fillColor('red') 
                  .text(' x ', { continued: true })
                  .fillColor('black') 
                  .text(`${i}`, { continued: true })
                  .fillColor('orange') 
                  .text(' = ', { continued: true })
                  .fillColor('green')
                  .text(`${base * i}`);
                }
       
        doc.end();

        return filePath;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};
=======
const fs = require('fs');
const PDFDocument = require('pdfkit');
const colors = require('colors');

const crearArchivo = async (base = 6, listar = false, hasta = 10) => {
    try {
        let consola = '';
        let salida = '';


        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${colors.blue(base)} ${'x'.red} ${colors.blue(i)} ${'='.bgYellow} ${colors.green(base * i)}\n`;
        }

        if (listar) {
            console.log('========================='.red);
            console.log(`|     Tabla : ${colors.blue(base)}        |`.red);
            console.log('========================='.red);
            console.log(consola);
        }

        
        const doc = new PDFDocument();
        const filePath = `../salida/Creacion-tabla-${base}-hasta-${hasta}-en-formato.pdf`;
        doc.pipe(fs.createWriteStream(filePath));

       
        doc.fontSize(20).text(`Tabla de multiplicar ${base} hasta ${hasta}`, {
            align: 'center'
        });
        doc.moveDown();
     
         for (let i = 1; i <= hasta; i++) {
             doc.fontSize(16)
                 .fillColor('black')
                 .text(`${base}`, { continued: true }) 
                  .fillColor('red') 
                  .text(' x ', { continued: true })
                  .fillColor('black') 
                  .text(`${i}`, { continued: true })
                  .fillColor('orange') 
                  .text(' = ', { continued: true })
                  .fillColor('green')
                  .text(`${base * i}`);
                }
       
        doc.end();

        return filePath;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};
>>>>>>> fdb305fbb70543863e1c8ddc2a118f3706eb940b
