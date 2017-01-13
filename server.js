'use strict';

global.requireModule = function (modulePath) {
    modulePath = path.resolve(path.dirname(caller()), modulePath);
    let mod = require(modulePath);
    delete require.cache[require.resolve(modulePath)];
    return mod;
}

const express = require('express');
const caller  = require('caller');
const morgan  = require('morgan');
const path    = require('path');
const cors    = require('cors');

let app = express();

app.use(cors({
    origin: 'http://127.0.0.1:3000',
    credentials: true
}));
app.use(morgan('dev'));
app.disable('x-powered-by');

app.all('*', function(req, res) {
    let mock = requireModule('./mock_data');
    let method = req.method;
    let pathName = req.path;

    if(mock && mock[pathName] && mock[pathName][method]) {
        res.send(mock[pathName][method]);
    } else {
        res.status(404).end();
    }
});

module.exports = app;
