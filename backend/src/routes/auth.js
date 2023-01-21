const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../modules/user');

router.post('/register', (req, res) => {
    const {username, password} = req.body;
    const user = new User({username, password});
    user.save()
        .then((newUser) => {
            const accessToken = jwt.sign({
                uid: newUser.id,
                username: newUser.username
            }, process.env.ACCESS_TOKEN_SECRET);
            res.status(200).json({message: 'User successfully registered', token: accessToken});
        })
        .catch(err => {
            res.status(200).json({message: err.message});
        });
});

router.post('/login', (req, res) => {
    const {username, password} = req.body;
    User.findOne({'username': username}).then(user => {
        if (!user) {
            res.status(200).json({message: 'User not found'});
            return;
        }
        if (user.password !== password) {
            res.status(200).json({message: 'Invalid password'});
            return;
        }
        const accessToken = jwt.sign({uid: user.id, username: user.username}, process.env.ACCESS_TOKEN_SECRET);
        res.status(200).json({message: 'User successfully logged in', token: accessToken});
    });
});

module.exports = router;
