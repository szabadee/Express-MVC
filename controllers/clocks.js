const express = require('express');
const clocks = express();
const models = require('../models');

// index
clocks.get('/', (req, res) => {
  models.Clock.findAll().then(clocks => {
    res.locals.clocks = clocks;
    res.render('clocks/index.handlebars');
  });
});

// new
clocks.get('/new', (req, res) => {
    res.render('clocks/new.handlebars');
});

// show
clocks.get('/:id', (req, res) => {
  models.Clock.findById(req.params.id).then(clock => {
    res.locals.clock = clock;
    res.render('clocks/show.handlebars');
  });
});

// edit
clocks.get('/:id/edit', (req, res) => {
  models.Clock.findById(req.params.id).then(clock => {
    res.locals.clock = clock;
    res.render('clocks/edit.handlebars');
  });
});

// create
clocks.post('/', (req, res) => {
  models.Clock.create({
    manufacturer: req.body.manufacturer,
    model: req.body.model,
    type: req.body.type,
    price: req.body.price})
    .then(clock => {
      res.redirect(`/clocks`);
  });
});


// update
clocks.put('/:id', (req, res) => {
  models.Clock.update(req.body,
    { where: { id: req.params.id} })
    .then(res.redirect(`/clocks/${req.params.id}`));
});

// delete
clocks.delete('/:id', (req, res) => {
  models.Clock.destroy(
    { where: { id: req.params.id} })
    .then(res.redirect(`/clocks`));
});

module.exports = clocks;
