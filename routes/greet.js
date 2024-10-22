const express = require('express');
const router = express.Router();

// Greet page route with parameter
router.get('/greet/:name', (req, res) => {
    const { name } = req.params;
    res.render('greet', { title: 'Greeting', name });
});

module.exports = router;
