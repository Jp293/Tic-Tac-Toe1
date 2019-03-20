'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// Start with Pseudocode
// Let player = x
// If player = x then player must be able to switch to o.
// If player = o then player must be x.
//
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#create-new-game').on('click', gameEvents.onCreateGame)
  $('#total-games').on('click', gameEvents.onGetGame)
  $('.box').on('click', gameEvents.onUpdateGame)
})
