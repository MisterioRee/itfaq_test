/**
 * Author: Muhammad Rehan
 * email: mrmuhammadrehan65@gmail.com
 * 
 * This code is subjected to an exam test, you might want to
 * copy this code and modify as your own need, you are free to 
 * use this code as your own.
 */
const express = require('express');
const app = express();
const employeeRoutes = require('./api/routes/employee'); //routes
const bodyParser = require('body-parser'); // Middleware

// Local Database
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
db.defaults({ employees: [] }).write();
app.db = db; //Add database in context

//Parcing request body to read perameters
//Returns middleware that only parses urlencoded 
//bodies and only looks at requests where the Content-Type 
//header matches the type option
app.use(bodyParser.urlencoded({
    extended: true
}));

//Returns middleware that only parses json and only 
//looks at requests where the Content-Type header 
//matches the type option.
app.use(bodyParser.json());

//CORS 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authrization');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Header', 'PUT, GET, POST, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});


//Api routes 
app.use('/api/employee', employeeRoutes);


//404 requests
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

//Invalid routes
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    });
});


module.exports = app;


