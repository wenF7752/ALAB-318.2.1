const express = require('express');
const router = express.Router();

// Greet page route with parameter
router.get('/greet/:name', (req, res) => {
    const { name } = req.params;
    res.render('greet', { title: 'Greeting', name });
});


router.get('/greet', (req, res) => {
    res.render('greet', { title: 'Greeting', name: 'Stranger' });
});
module.exports = router;
