'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// Start with Pseudocode
// Let player1 = x or o
// If player1 = x then player2 must be o.
// If player1 = o then player2 must be x.
//
const authEvents = require('./auth/events.js')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
})

const gameBoard = function () {
}
const cells = ['', '', '', '', '', '', '', '', '']

let currentPlayer = 'x'

const switchPlayer = function () {
  const newPlayer = (currentPlayer === 'x') ? 'o' : 'x'
  currentPlayer = newPlayer
  return newPlayer
}
const gameLogic = function () {
  if (cells.length < 9) {
    if (cells[0] === 'x' && cells[1] === 'x' && cells[2] === 'x' ||
      cells[3] === 'x' && cells[4] === 'x' && cells[5] === 'x' ||
      cells[6] === 'x' && cells[7] === 'x' && cells[8] === 'x' ||
      cells[0] === 'x' && cells[3] === 'x' && cells[6] === 'x' ||
      cells[1] === 'x' && cells[4] === 'x' && cells[7] === 'x' ||
      cells[2] === 'x' && cells[5] === 'x' && cells[8] === 'x' ||
      cells[0] === 'x' && cells[4] === 'x' && cells[8] === 'x' ||
      cells[2] === 'x' && cells[4] === 'x' && cells[6] === 'x') { //alert player X won!
    } else if (cells[0] === 'o' && cells[1] === 'o' && cells[2] === 'o' ||
      cells[3] === 'o' && cells[4] === 'o' && cells[5] === 'o' ||
      cells[6] === 'o' && cells[7] === 'o' && cells[8] === 'o' ||
      cells[0] === 'o' && cells[3] === 'o' && cells[6] === 'o' ||
      cells[1] === 'o' && cells[4] === 'o' && cells[7] === 'o' ||
      cells[2] === 'o' && cells[5] === 'o' && cells[8] === 'o' ||
      cells[0] === 'o' && cells[4] === 'o' && cells[8] === 'o' ||
      cells[2] === 'o' && cells[4] === 'o' && cells[6] === 'o') { //alert player o won!}
    } else {
      // alert player of a draw
    }
  }
}
module.exports = {
  gameBoard,
  switchPlayer,
  gameLogic,
  currentPlayer,
  cells
}
