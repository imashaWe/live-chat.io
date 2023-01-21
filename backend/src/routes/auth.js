const express = require('express');
const router = express.Router();
const User = require('../modules/user');

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
    user.save()
        .then(() => {
            res.status(200).json({ message: 'User successfully registered' });
        })
        .catch(err => {
            res.status(200).json({ message: err.message });
        });
});

module.exports = router;
