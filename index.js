const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Import route files
const indexRoutes = require('./routes/index');
const aboutRoutes = require('./routes/about');
const greetRoutes = require('./routes/greet');

// Middleware setup
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

// Set view engine to EJS
app.set('view engine', 'ejs');

// Static middleware for serving images and other static files
app.use(express.static('public'));

// Use the routes from the 'routes' folder
app.use('/', indexRoutes); // Home route
app.use('/', aboutRoutes); // About route
app.use('/', greetRoutes); // Greet route

// Handle POST form submission 
app.post('/submit-form', (req, res) => {
    console.log(req.body);
    const message = req.body.message;
    console.log(message);
    res.render('index', { title: 'Home Page', feedback: 'Form submitted successfully!', message });
});

// 404 error handler 
app.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
