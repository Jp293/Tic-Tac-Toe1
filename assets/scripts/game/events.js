'use strict'

const api = require('./api.js')
const store = require('../store.js')
const logic = require('./logic.js')
const ui = require('./ui.js')

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.failure)
}
const onGetGame = function (event) {
  event.preventDefault()
  api.getGame()
    .then(ui.onGetGameSuccess)
    .catch(ui.failure)
}
const onUpdateGame = function (event) {
  event.preventDefault()
  const data = $(event.target).data().cellIndex
  const player = store.player
  const over = store.over
  api.updateGame(data, player)
    .then(ui.newMove(data))
    .catch(ui.failure)
  logic.gameRoot(data, player, over)
  logic.switchPlayer(player)
  logic.gameWin(store.cells)
}

module.exports = {
  onCreateGame,
  onGetGame,
  onUpdateGame
}
