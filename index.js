const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Static middleware for serving images and other static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

// Route with a parameter
app.get('/greet/:name', (req, res) => {
    const { name } = req.params;
    res.render('greet', { title: 'Greeting', name });
});

app.post('/submit-form', (req, res) => {
    console.log(req.body);
    res.send('Form submitted successfully');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
