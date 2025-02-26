const http = require('http');

const express = require('express');


const hostRouter = require('./routes/hosts');

const app = express();
const bodyParser = require('body-parser');
//Middleware 1
app.use((req, res, next) => {

    console.log(req.url, req.method);
    next()
});


app.get('/', (req, res, next) => {
    res.send('<h1>Welcome to Home page</h1>');
});


// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/host', hostRouter);

const server = http.createServer(app);

const PORT = 3000;

server.listen(PORT, () => {

    console.log(`Server running at address: http://localhost:${PORT}`);
})