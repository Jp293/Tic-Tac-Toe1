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
  store.id = $(event.target).data().cellIndex
  const player = store.player
  console.log('my store is', store)
  console.log('my player is ', player)
  const over = store.over
  api.updateGame(player)
    .then(ui.newMove)
    .catch(ui.failure)
  logic.gameRoot(player, over)
  logic.switchPlayer(player)
  logic.gameWin(store.cells)
}

module.exports = {
  onCreateGame,
  onGetGame,
  onUpdateGame
}
