'use strict'
const config = require('../config.js')
const store = require('../store.js')

const createGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify
  })
}

const getGame = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify
  })
}

const updateGame = function (id, value, over) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/games/${store.game}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify({
      'game': {
        'cell': {
          'index': id,
          'value': value
        },
        'over': over
      }
    }
    )
  })
}
module.exports = {
  createGame,
  getGame,
  updateGame
}
