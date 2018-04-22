'use strict'

module.exports = {
    signUp: async (req, res, next) => {
        console.log(req.value.body);
        console.log('User con sign up');
    },
    signIn: async (req, res, next) => {
        console.log('User con sign in');
    },
    secret: async (req, res, next) => {
        console.log('User con sec');
    }
}