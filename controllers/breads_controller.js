const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread.js')

//get index of breads
breads.get('/', (req, res) => {
    // res.send('This is the index at /bread');
    res.render('Index', 
        {
            breads: Bread,
            title: 'Index Page',
        }
    );
})

//create new page
breads.get('/new', (req, res) => {
    res.render('new')
})
//post new bread
breads.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
      }
    if(req.body.hasGluten === 'on'){
        req.body.hasGluten === 'true'
    }
    else{
        req.body.hasGluten === 'false'
    }
    Bread.push(req.body);
    res.redirect('/breads');
})

//edit index of breads
breads.get('/:indexArray/edit', (req,res) => {
    res.render('edit', {
        bread: Bread[req.params.indexArray],
        index: req.params.indexArray,
    })
})

//show index of breads
breads.get('/:arrayIndex', (req, res) => {
    // res.render('Show', {
    //     bread: Bread[req.params.arrayIndex]
    // });
    if(Bread[req.params.arrayIndex]){
        res.render('Show', {
            bread: Bread[req.params.arrayIndex],
            index: req.params.arrayIndex,
        })
    }
    else{
        res.render('404')
    }
})

//delete breads
breads.delete('/:arrayIndex', (req, res) => {
    Bread.splice(req.params.arrayIndex, 1);
    res.status(303).redirect('/breads')
})

//update breads
breads.put('/:arrayIndex', (req, res) => {
    if(req.body.hasGluten === 'on'){
        req.body.hasGluten = true;
    }
    else{
        req.body.hasGluten = false;
    }
    Bread[req.params.arrayIndex] = req.body;
    res.redirect(`/breads/${req.params.arrayIndex}`)
})

module.exports = breads;