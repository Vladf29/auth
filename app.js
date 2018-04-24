'use strict'

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/auth');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/users', require('./routers/users'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(PORT));