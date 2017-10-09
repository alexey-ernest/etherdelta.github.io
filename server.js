const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

app.use(express.static(__dirname));

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;
