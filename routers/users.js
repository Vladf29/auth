'use strict'

const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const {
    validaterBody,
    schemas
} = require('../helpers/router_helpers');
const UserControllers = require('../controllers/users');

router.route('/signup')
    .post(validaterBody(schemas.authSchema), UserControllers.signUp);

router.route('/signin')
    .post(UserControllers.signIn);

router.route('/secret')
    .get(passport.authenticate('jwt', {
        session: false
    }), UserControllers.secret);


module.exports = router;