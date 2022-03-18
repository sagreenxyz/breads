const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread.js');

// INDEX
breads.get('/', (req, res) => {
    res.render('index', {
        breads: Bread,
        title: 'Index Page'
    });
});

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
        res.render('show', {
            bread: Bread[req.params.arrayIndex]
        });
    } else {
        res.render('err404');
    };
});

// CREATE
breads.post('/', (req, res) => {
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = 'true';
    } else {
        req.body.hasGluten = 'false';
    };
    Bread.push(req.body);
    res.redirect('/breads');
});

module.exports = breads;