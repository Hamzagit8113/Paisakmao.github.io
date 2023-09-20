const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Configure middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define API routes (for example, user registration)
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Handle user registration logic here (e.g., store user data in a database)

    // For demonstration purposes, let's respond with a success message
    res.json({ message: 'User registered successfully' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); /* This snippet doesn't have javascript */