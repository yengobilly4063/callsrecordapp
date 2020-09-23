const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Home Page!!!!');
});

router.post('/', (req, res) => {
    res.send('Put Request');
});

module.exports = router;
