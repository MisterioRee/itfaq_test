/**
 * Author: Muhammad Rehan
 * email: mrmuhammadrehan65@gmail.com
 * 
 * This code is subjected to an exam test, you might want to
 * copy this code and modify as your own need, you are free to 
 * use this code as your own.
 */

const app = require('./app');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swaggerDoc');

// Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const port = process.env.port || 3000;

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));

