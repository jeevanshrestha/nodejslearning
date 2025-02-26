const express = require('express');

const hostRouter = express.Router();

// Route to serve the "Add Home" form
hostRouter.get('/add-home', (req, res) => {
    const addHomeForm = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Add Home</title>
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
                input[type="text"], input[type="tel"], textarea {
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
            <form action="/host/submit-home" method="POST">
                <label for="homeName">Home Name:</label>
                <input type="text" id="homeName" name="homeName" required>

                <label for="address">Address:</label>
                <textarea id="address" name="address" rows="4" required></textarea>

                <label for="contact">Contact Details:</label>
                <input type="tel" id="contact" name="contact" required>

                <input type="submit" value="Add Home">
            </form>
        </body>
        </html>
    `;

    res.send(addHomeForm);
});

// Route to handle form submission
hostRouter.post('/submit-home', (req, res) => {
    const { homeName, address, contact } = req.body;

    console.log('Home Details Submitted:');
    console.log('Home Name:', homeName);
    console.log('Address:', address);
    console.log('Contact:', contact);

    // You can save the data to a database or perform other actions here

    res.send('Home details submitted successfully!');
});

module.exports = hostRouter;