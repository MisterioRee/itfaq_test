const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swaggerDoc.js');
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));



////CORS 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authrization');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Header', 'PUT, GET, POST, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});

//Employees Route
/**
 * @swagger
 * /api/employee:
 *  get:
 *      description: Get employess
 *      responses:
 *          200:
 *            description: success
 */
app.use('/api/employee', (req, res, next) => {
    res.status(200).json({
        message: "Employees..!"
    });
});


//Info Route
app.use('/api/info', (req, res, next) => {
    res.status(200).json({
        version: process.env.version || 1.0,
        description: "ITFAQ Systems Node.js API",
    });
});



// Home route
app.use((req, res, next) => {
    const error = new Error('No Route Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    });
});


module.exports = app;


