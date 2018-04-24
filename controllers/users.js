'use strict'

const User = require('../modules/user');

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
        
        res.json({
            user: 'create'
        });
    },
    signIn: async (req, res, next) => {
        console.log('User con sign in');
    },
    secret: async (req, res, next) => {
        console.log('User con sec');
    }
}