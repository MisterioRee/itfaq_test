/**
 * Author: Muhammad Rehan
 * email: mrmuhammadrehan65@gmail.com
 * 
 * This code is subjected to an exam test, you might want to
 * copy this code and modify as your own need, you are free to 
 * use this code as your own.
 */

const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'ITFAQ APi Document',
            version: "1.0.0",
            description: 'Coding exam for NodeJS dev from ITFAQ',
            contact: {
                name: 'Muhammad Rehan',
                email: 'mrmuhammadrehan65@gmail.com',
                url: 'https://github.com/misterioree'
            },
        },

    },
    apis: ["./api/routes/employee.js"],
};


const swaggerDocs = swaggerJsDoc(swaggerOptions);


module.exports = swaggerDocs;