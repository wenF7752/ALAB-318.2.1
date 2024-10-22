const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Middleware setup
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

// Set view engine to EJS
app.set('view engine', 'ejs');

// Static middleware for serving images and other static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', feedback: null, message: '' });  // Pass empty message by default
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

// Route with a parameter
app.get('/greet/:name', (req, res) => {
    const { name } = req.params;
    res.render('greet', { title: 'Greeting', name });
});

// Handle POST form submission
app.post('/submit-form', (req, res) => {
    const message = req.body.message;  // Get message from the form
    console.log(message);  // Log the message to the console
    res.render('index', { title: 'Home Page', feedback: 'Form submitted successfully!', message });  // Pass message and feedback
});


// 404 error handler 
app.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
