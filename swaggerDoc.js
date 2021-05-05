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