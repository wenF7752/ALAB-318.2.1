const express = require('express');
const router = express.Router();
const path = require('path');
// Image page route
router.get('/image', (req, res) => {
    res.render('image', { title: 'Image Page' });
});


// Route to handle the image download
router.post('/download-image', (req, res) => {
    const { image } = req.body;


    // Specify the path to the image

    const filePath = path.join(__dirname, '../public/', image);

    // Download the image file from the specified path
    res.download(filePath, (err) => {
        console.log(image);
        if (err) {
            console.error('Error downloading the file:', err);

            res.status(500).send('Error downloading the image.');
        }
    });
});
module.exports = router;