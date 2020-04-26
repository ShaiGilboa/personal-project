'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// require('dotenv').config(); // what is this?
// console.log('hi');

const {
  signInHandler,
  signOutHandler,
  startGameHandler,
  roundEndHandler,
  roundStartHandler,
  submitGuessPlayersCard,
  submitCardUnderTitle,
} = require('./handlers');

const PORT = process.env.PORT || 4000;

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('./client/build'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // .get('/users', getUser)
  .post('/sign-in', signInHandler)
  .put('/sign-out', signOutHandler)
  // .post('/start-game', startGameHandler)
  .get('/start-game', startGameHandler)
  .post('/round-end', roundEndHandler)
  .post('/round-start', roundStartHandler)
  .post('/guess-players-card', submitGuessPlayersCard)
  .post('/place-card', submitCardUnderTitle)

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
