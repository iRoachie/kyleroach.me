$(document).ready(() => {
  new KyleRoach()
})

class KyleRoach {
  constructor() {
    this.grid = ''
    this.selectCategory()
    this.initGrid()
  }

  selectCategory() {
    $('.folio__titles').on('click', '.folio__title', e => {
      const title = $(e.currentTarget)
      const filter = title.attr('data-filter')
      this.grid.isotope({ filter })

      $('.folio__title--active').removeClass('folio__title--active')
      title.addClass('folio__title--active')
    })
  }

  initGrid() {
    this.grid = $('.folio__content').isotope({
      itemSelector: '.folio-square',
      getSortData: {
        category: '[data-category]',
      },
      layoutMode: 'masonry',
      masonry: {
        isFitWidth: true,
      },
    })
  }
}
