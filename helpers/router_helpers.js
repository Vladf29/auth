'use strict'

const Joi = require('joi');

module.exports = {
    validaterBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);
            if (result.error) return res.status(400).send(result.error.message);

            if (!req.value) req.value = {};
            req.value['body'] = result.value;
            next();
        }
    },
    schemas: {
        authSchema: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
    }
}