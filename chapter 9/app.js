const http = require('http');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//Middleware 1

app.get('/', (req, res, next) => {

    console.log('First Middleware', req.url, req.method);
    next()
});

app.get('/', (req, res, next) => {

    console.log('Second Middleware', req.url, req.method);
    // res.send('<h1>Hello Products!</h1>');
    next();
});

app.get('/', (req, res, next) => {

    console.log('Third Middleware', req.url, req.method);
    res.send('<h1>Hello From THird middleware!</h1>');
    next();
})


app.get('/contact-us', (req, res, next) => {
    const contactForm = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Contact Us</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background-color: #f4f4f4;
                    }
                    form {
                        background: #fff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        width: 300px;
                    }
                    label {
                        display: block;
                        margin-bottom: 8px;
                        font-weight: bold;
                    }
                    input[type="text"], input[type="email"], textarea {
                        width: 100%;
                        padding: 8px;
                        margin-bottom: 16px;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                    }
                    input[type="submit"] {
                        background-color: #28a745;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                    input[type="submit"]:hover {
                        background-color: #218838;
                    }
                </style>
            </head>
            <body>
                <form action="/contact-us" method="POST">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
    
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
    
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
    
                    <input type="submit" value="Submit">
                </form>
            </body>
            </html>
        `;

    res.send(contactForm);
});



// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/contact-us', (req, res, next) => {

    console.log(req.body)
    const { name, email, message } = req.body;

    console.log('Contact Form Submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // You can save the data to a database or send an email here

    res.send('Thank you for contacting us! We will get back to you soon.');
});
const server = http.createServer(app);

const PORT = 3000;

server.listen(PORT, () => {

    console.log(`Server running at address: http://localhost:${PORT}`);
})