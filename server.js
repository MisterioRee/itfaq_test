const http = require('http');
const app = require('./app');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swaggerDoc');

// Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const port = process.env.port || 3000;

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));

