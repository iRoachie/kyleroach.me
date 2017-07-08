$(document).ready(() => {
  new KyleRoach()
})

class KyleRoach {
  constructor() {
    this.grid = ''
    this.osProjects = $('.os__projects')
    this.selectCategory()
    this.initGrid()
    this.fetchRepos()
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

  fetchRepos() {
    const projects = [
      'iRoachie/react-native-material-tabs',
      'cooperka/react-native-snackbar',
      'DefinitelyTyped/DefinitelyTyped',
      'xotahal/react-native-material-ui',
      'xinthink/react-native-material-kit',
      '24ark/react-native-step-indicator',
      'hectahertz/react-native-material-dialog',
      'maxs15/react-native-modalbox'
    ]
    projects.map(repo => this.fetchRepo(repo))
  }

  fetchRepo(projectName) {
    fetch(`https://api.github.com/repos/${projectName}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.osProjects.append(`
        <div class="col-sm-6 col-md-4">
          <article class="os-project">
            <div>
              <a href="${data.html_url}" target="_blank" class="os-project__title">${data.name}</a>
              <p class="os-project__desc">${data.description}</p>
            </div>
            <div class="os-project__stats">
              <span class="os-project__language ${data.language.toLowerCase()}">${data.language}</span>
              <span class="os-project__stars"><i class="ion-android-star"></i> ${data.stargazers_count}</span>
            </div>
          </article>
        </div>
      `)
    })
  }
}
