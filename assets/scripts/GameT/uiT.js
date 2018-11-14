'use strict'

const store = require('../store.js')

const onCreateGameSuccess = function (createGame) {
  store.over = createGame.game.over
  store.game = createGame.game.id
  store.cells = createGame.game.cells
  $('#message').html('nEw TiC')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')

}

const failure = function () {

}
