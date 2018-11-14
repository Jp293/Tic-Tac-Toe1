'use strict'

const store = require('../store.js')

const gameRoot = function (id, value, over) {
  if (over === true) {
    return
  }
  if (store.cells[id] === '') {
    store.cells[id] = value
    store.invalid = false
  } else if (store.cells[id] === 'X' || 'O') {
    store.invalid = true
  }
}

const switchPlayer = function (playerTurn) {
  if (store.invalid === true) {
    return
  }
  if (store.invalid === false) {
    const player = playerTurn === 'X' ? 'O' : 'X'
    store.player = player
    //  add message indicating who's turn it is.
    $('#message').html(`It's Player: ${store.player}'s' Turn`)
    return player
  }
}
const gameWin = function (boardcell) {
  if ((boardcell[0] === 'X' && boardcell[1] === 'X' && boardcell[2] === 'X') ||
    (boardcell[3] === 'X' && boardcell[4] === 'X' && boardcell[5] === 'X') ||
    (boardcell[6] === 'X' && boardcell[7] === 'X' && boardcell[8] === 'X') ||
    (boardcell[0] === 'X' && boardcell[3] === 'X' && boardcell[6] === 'X') ||
    (boardcell[1] === 'X' && boardcell[4] === 'X' && boardcell[7] === 'X') ||
    (boardcell[2] === 'X' && boardcell[5] === 'X' && boardcell[8] === 'X') ||
    (boardcell[0] === 'X' && boardcell[4] === 'X' && boardcell[8] === 'X') ||
    (boardcell[2] === 'X' && boardcell[4] === 'X' && boardcell[6] === 'X')) {
    store.over = true
    store.player = 'X'
    store.winner = 'X'
    // message player X won!
    $('#board-message').html('Player X wInS!')
  } else if ((boardcell[0] === 'O' && boardcell[1] === 'O' && boardcell[2] === 'O') ||
    (boardcell[3] === 'O' && boardcell[4] === 'O' && boardcell[5] === 'O') ||
    (boardcell[6] === 'O' && boardcell[7] === 'O' && boardcell[8] === 'O') ||
    (boardcell[0] === 'O' && boardcell[3] === 'O' && boardcell[6] === 'O') ||
    (boardcell[1] === 'O' && boardcell[4] === 'O' && boardcell[7] === 'O') ||
    (boardcell[2] === 'O' && boardcell[5] === 'O' && boardcell[8] === 'O') ||
    (boardcell[0] === 'O' && boardcell[4] === 'O' && boardcell[8] === 'O') ||
    (boardcell[2] === 'O' && boardcell[4] === 'O' && boardcell[6] === 'O')) {
    store.over = true
    store.player = 'X'
    store.winner = 'O'
    // message player O won!
    $('#board-message').html('Player O wInS!')
  } else if (boardcell[0] !== '' && boardcell[1] !== '' && boardcell[2] !== '' &&
    boardcell[3] !== '' && boardcell[4] !== '' && boardcell[5] !== '' &&
    boardcell[6] !== '' && boardcell[7] !== '' && boardcell[8] !== '') {
    store.over = true
    store.player = 'X'
    store.winner = 'Tie'
    // message player with a tied game.
    $('#board-message').html('tIe')
  }
}

module.exports = {
  gameRoot,
  switchPlayer,
  gameWin
}
