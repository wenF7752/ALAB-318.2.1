const express = require('express');
const router = express.Router();

// About page route
router.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

module.exports = router;
