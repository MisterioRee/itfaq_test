const express = require('express');
const app = express();
const employeeRoutes = require('./api/routes/employee');
const bodyParser = require('body-parser'); // Middleware

// Local Database
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
db.defaults({ employees: [] }).write();
app.db = db;


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

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

app.use('/api/employee', employeeRoutes);





app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    });
});


module.exports = app;


