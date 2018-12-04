const express = require('express');
const videogames = express();
const models = require('../models');

// index
videogames.get('/', (req, res) => {
  models.Videogame.findAll().then(videogames => {
    res.locals.videogames = videogames;
    res.render('videogames/index.handlebars');
  });
});

// show
videogames.get('/:id', (req, res) => {
  models.Videogame.findById(req.params.id)
    .then(videogame => {
      if (videogame) {
        res.locals.videogame = videogame;
        res.render('videogames/show.handlebars');
      } else {
        res.status(400).send('Invalid ID');
      }
    });
});

// edit
videogames.get('/:id/edit', (req, res) => {
  models.Videogame.findById(req.params.id).then(videogame => {
    res.locals.videogame = videogame;
    res.render('videogames/edit.handlebars');
  });
});

// create
videogames.post('/', (req, res) => {
  models.Videogame.create({
    distributor: req.body.distributor,
    name: req.body.name,
    type: req.body.type
  })
  .then(videogames => {
    res.json(videogames);
  });
});

// update
videogames.put('/:id', (req, res) => {
  if (models.Videogame.findById(req.params.id)) {
    models.Videogame.update(req.body,
      { where: { id: req.params.id } })
      .then(videogame => {
        (videogame ? res.json(videogame) : res.status(400).send('This ID already exist'));
      });
  } else {
    res.status(400).send('This ID not exist');
  }
});

// delete 400 nincs ilyen ID
videogames.delete('/:id', (req, res) => {
  models.Videogame.destroy(
    { where: { id: req.params.id } })
    .then(videogames => {
      res.json(videogames);
    });
});

module.exports = videogames;
