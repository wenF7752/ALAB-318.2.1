const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', feedback: null, message: '' });
});

module.exports = router;
