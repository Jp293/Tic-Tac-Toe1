'use strict'

const store = require('../store.js')

const onCreateGameSuccess = function (createGame) {
  store.over = createGame.game.over
  store.game = createGame.game.id
  store.cells = createGame.game.cells
  store.player = createGame.game.player
  $('#message').html('nEw TiC')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
}

const failure = function () {
  $('#message').html('Something went wrong, try again.')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

const newMove = function (event) {
  console.log('test', store.player === 'X' && store.over === false && store.cells[store.id] === '')
  console.log(store)
  console.log('I think this is an id', store.id)
  console.log('test for player', store.player === 'X')
  console.log('test for over', store.over === false)
  console.log('test for id', store.cells[store.id] === '')
  console.log('test for cells & id', store.cells[store.id])
  console.log('test for event', event.target)
  // const box = $('.box').find(`[data-cell-index='${store.id}']`).prevObject[0]
  const box = $(`.box[data-cell-index='${store.id}']`)
  console.log('looking for box', box)
  console.log('my html', box.html())
  if (store.player === 'X' && store.over === false && box.html() === '') {
    (box).html('X')
  } else if (store.player === 'O' && store.over === false && box.html() === '') {
    (box).html('O')
    $('#id').html('something')
    const idSelector = $('#id')
    idSelector.html('something')
  }
}

module.exports = {
  onCreateGameSuccess,
  failure,
  newMove

}
