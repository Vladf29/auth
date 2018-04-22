'use strict'

const express = require('express');
const router = require('express-promise-router')();

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
    .get(UserControllers.secret);


module.exports = router;