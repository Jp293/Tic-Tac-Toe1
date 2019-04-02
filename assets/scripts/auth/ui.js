'use strict'
const store = require('../store.js')

const signUpSuccess = function (signUpResponse) {
  $('#auth-message').html('You signed up successfully.')
  $('#auth-message').addClass('success-message')
  $('#auth-message').removeClass('error-message')
  // $('.auth-message').fadeOut(900)
}
const failure = function (failureResponse) {
  $('#auth-message').html('Something went wrong.')
  $('#auth-message').removeClass('success-message')
  $('#auth-message').addClass('error-message')
  // $('.auth-message').fadeOut(900)
}
const signInSuccess = function (signInResponse) {
  store.user = signInResponse.user
  $('#auth-message').html('You signed in successfully.')
  $('#auth-message').addClass('success-message')
  $('#auth-message').removeClass('error-message')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('.game-container').removeClass('hidden')
}
const changePasswordSuccess = function (changePasswordResponse) {
  $('#auth-message').html('You changed your password successfully.')
  $('#auth-message').addClass('success-message')
  $('#auth-message').removeClass('error-message')
  $('#sign-up-form').addClass('hidden')
}
const signOutSuccess = function (signOutResponse) {
  $('#auth-message').html('You signed out successfully.')
  $('#auth-message').addClass('success-message')
  $('#auth-message').removeClass('error-message')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('.game-container').addClass('hidden')
}
module.exports = {
  signUpSuccess,
  signInSuccess,
  failure,
  changePasswordSuccess,
  signOutSuccess
}
