'use strict'

const JWT = require('jsonwebtoken');
const User = require('../modules/user');
const {
    JWT_SECRET
} = require('../configuration/index');

const signToken = (user) => {
    return JWT.sign({
        iss: 'CodeWorker',
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, JWT_SECRET);
}

module.exports = {
    signUp: async (req, res, next) => {
        const {
            email,
            password
        } = req.value.body;

        const foundUser = await User.findOne({
            email
        });
        if (foundUser) {
            return res.status(403).json({
                error: 'Email is already in use'
            });
        }

        const newUser = new User({
            email,
            password
        });
        await newUser.save();

        const token = signToken(newUser);
        res.json({
            token
        });
    },
    signIn: async (req, res, next) => {},
    secret: async (req, res, next) => {
        res.json({
            secret: "resource"
        })
    }
}