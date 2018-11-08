'use strict'
const store = require('../store.js')

const signUpSuccess = function (signUpResponse) {
  $('#message').html('You signed up successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  console.log('Signed up success')
}
const failure = function (failureResponse) {
  $('#message').html('Something went wrong.')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
  console.log('Something went wrong')
}
const signInSuccess = function (signInResponse) {
  store.user = signInResponse.user
  console.log('store object before adding user', store)
  $('#message').html('You signed up successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#sign-in').addClass('hidden')
  console.log('You signed in sucessfully')
}
const changePasswordSuccess = function (changePasswordResponse) {
  $('#message').html('You changed your password successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  console.log('change password success')
}
const signOutSuccess = function (signOutResponse) {
  $('#message').html('You signed out successfully.')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
}
module.exports = {
  signUpSuccess,
  signInSuccess,
  failure,
  changePasswordSuccess,
  signOutSuccess
}
