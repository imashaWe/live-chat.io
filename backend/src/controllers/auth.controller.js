const User = require("../modules/user");
const jwt = require("jsonwebtoken");

const getToken = (data) => jwt.sign(data, process.env.ACCESS_TOKEN_SECRET);

const register = (req, res) => {
    const {username, password} = req.body;
    const user = new User({username, password});
    user.save()
        .then((newUser) => {
            res.status(200).json({
                message: 'User successfully registered',
                token: getToken({uid: newUser.id, username: newUser.username})
            });
        })
        .catch(err => {
            res.status(200).json({message: err.message});
        });
}

const login = (req, res) => {
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
        res.status(200).json({
            message: 'User successfully logged in',
            token: getToken({uid: user.id, username: user.username})
        });
    });
}

module.exports = {
    register,
    login
}
