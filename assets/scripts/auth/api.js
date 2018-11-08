'use strict'
const store = require('../store.js')

const signUp = function (inputData) {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}
const signIn = function (inputData) {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}
const changePassword = function (inputData) {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}
const signOut = function () {
  return $.ajax({
    url: 'https://tic-tac-toe-wdi.herokuapp.com/',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
