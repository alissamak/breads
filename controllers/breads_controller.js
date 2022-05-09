const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread.js')

breads.get('/', (req, res) => {
    // res.send('This is the index at /bread');
    res.render('Index', 
        {
            breads: Bread,
            title: 'Index Page',
        }
    );
})

//show
breads.get('/:arrayIndex', (req, res) => {
    // res.render('Show', {
    //     bread: Bread[req.params.arrayIndex]
    // });
    if(Bread[req.params.arrayIndex]){
        res.render('Show', {
            bread: Bread[req.params.arrayIndex]
        })
    }
    else{
        res.send('404')
    }
})

module.exports = breads;