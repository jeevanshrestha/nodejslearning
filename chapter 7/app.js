// External modules
const express = require('express');
const http = require('http'); // Import the http module
const app = express();

// Middleware 1
app.get("/", (req, res, next) => {
    console.log('First middleware');

    //  res.send("<h1>Came from first Products!</h1>");
    next();

});

// Middleware 2
app.get("/products", (req, res, next) => {
    console.log('Second middleware');
    res.send("<h1>Hello Products!</h1>");
});

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Define the port
const PORT = 3001;

// Start the server
server.listen(PORT, () => {
    console.log(`Server running at address: http://localhost:${PORT}`);
});