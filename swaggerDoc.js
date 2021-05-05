const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "ITFAQ API",
            version: '1.0.0',
        },
    },
    apis: ["app.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);


module.exports = swaggerDocs;