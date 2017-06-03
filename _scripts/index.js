import $ from 'jquery'

$(document).ready(() => {
  new KyleRoach()
})

class KyleRoach {
  constructor() {
    this.category = 'all'
    this.initCategory()
    this.selectCategory()
  }

  initCategory() {
    $(`.folio__title[data-category=${this.category}]`).addClass('folio__title--active')
    this.growSquares()
  }

  selectCategory() {
    $('.folio__title').click(e => {
      $('.folio__title--active').removeClass('folio__title--active')
      $(e.currentTarget).addClass('folio__title--active')
      this.category = $(e.currentTarget).attr('data-category')
      this.growSquares()
    })
  }

  growSquares() {
    if (this.category === 'all') {
      $('.folio-square').addClass('folio-square--visible')
    } else {
      $(`.folio-square:not([data-category=${this.category}])`).removeClass('folio-square--visible')
      $(`.folio-square[data-category=${this.category}]`).addClass('folio-square--visible')
    }
  }
}
