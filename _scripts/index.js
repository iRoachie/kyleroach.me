import $ from 'jquery'

$(document).ready(() => {
  console.log('Ready')

  $('.folio__title').click(e => {
    $('.folio__title--active').removeClass('folio__title--active')
    $(e.currentTarget).addClass('folio__title--active')
  })
})
