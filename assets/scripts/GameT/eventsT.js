'use strict'

const store = require('../store.js')
const logicT = require('./logicT.js')
const apiT = require('./apiT.js')
const uiT = require('./uiT.js')

const onCreateGame = function (event) {
  event.preventDefault()
  apiT.createGame()
    .then(uiT.onCreateGameSuccess)
    .catch(uiT.failure)
}
const onGetGame = function (event) {
  event.preventDefault()
  apiT.getGame()
    .then(uiT.onGetGameSuccess)
    .catch(uiT.failure)
}
const onUpdateGame = function (event) {
  event.preventDefault()
  const id = $(event.target).data().cellIndex
  const player = store.player
  const over = store.over
  apiT.updateGame(id, player)
    .then(uiT.newMove(id))
    .catch(uiT.failure)
  logicT.gameRoot(id, player, over)
  logicT.switchPlayer(player)
  logicT.gameWin(store.cells)
}

module.exports = {
  onCreateGame,
  onGetGame,
  onUpdateGame
}
