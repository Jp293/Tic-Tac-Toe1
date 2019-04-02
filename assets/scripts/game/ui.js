'use strict'

const store = require('../store.js')

const onCreateGameSuccess = function (createGame) {
  store.over = createGame.game.over
  store.games = createGame
  store.game = createGame.game.id
  store.cells = createGame.game.cells
  store.player = 'X'
  $('.game-message').html('New Tic Game')
  $('.sub-message').html(`It's Player ${store.player}'s' Turn`)
  $('.game-message').addClass('success-message')
  $('.game-message').removeClass('error-message')
  $('.box').empty()
}

const onGetGameSuccess = (gameSuccess) => {
  $('.sub-message').html(`Total games played: ${gameSuccess.games.length}`)
  $('.sub-message').addClass('success-message')
  $('.sub-message').removeClass('error-message')
}

const failure = function () {
  $('.game-message').html('Something went wrong, try again.')
  $('.game-message').removeClass('success-message')
  $('.game-message').addClass('error-message')
}

const newMove = function (data) {
  // const box = $('.box').find(`[data-cell-index='${store.id}']`).prevObject[0]
  const box = $(`.box[data-cell-index='${data}']`)
  console.log('looking for box', box)
  console.log('my html', box.html())
  if (store.player === 'X' && store.over === false && store.cells[data] === '') {
    $(event.target).html('X')
  } else if (store.player === 'O' && store.over === false && store.cells[data] === '') {
    $(event.target).html('O')
    // $('#id').html('something')
    // const idSelector = $('#id')
    // idSelector.html('something')
  }
}

module.exports = {
  onCreateGameSuccess,
  onGetGameSuccess,
  failure,
  newMove

}
