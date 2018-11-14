'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const cells = require('../app.js')
const currentPlayer = require('../app.js')

const onSignUp = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  api.signUp(userData)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
  $(event.target).trigger('reset')
}
const onSignIn = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  api.signIn(userData)
    .then(ui.signInSuccess)
    .catch(ui.failure)
  $(event.target).trigger('reset')
}
const onChangePassword = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.changePassword(userData)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}
const onSignOut = function () {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}
const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGamefailure)
}

const onMakeMove = function (event) {
  cells[event.target.id] = currentPlayer
}
$('.box').on('click', function (event) {
  $(event.target).append(currentPlayer)
})
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onMakeMove,
  onNewGame
}
