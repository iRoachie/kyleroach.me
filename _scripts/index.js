$(document).ready(() => {
  new KyleRoach();
});

class KyleRoach {
  constructor() {
    this.grid = '';
    this.osProjects = $('.os__projects');
    this.selectCategory();
    this.initGrid();
    this.loadIonicons();
    this.fetchRepos();
  }

  selectCategory() {
    $('.folio__titles').on('click', '.folio__title', e => {
      const title = $(e.currentTarget);
      const filter = title.attr('data-filter');
      this.grid.isotope({ filter });

      $('.folio__title--active').removeClass('folio__title--active');
      title.addClass('folio__title--active');
    });
  }

  initGrid() {
    this.grid = $('.folio__content').isotope({
      itemSelector: '.folio-square',
      getSortData: {
        category: '[data-category]'
      },
      layoutMode: 'masonry',
      masonry: {
        isFitWidth: true
      }
    });
  }

  fetchRepos() {
    const projects = [
      'react-native-training/react-native-elements',
      'iRoachie/react-native-material-tabs',
      'DefinitelyTyped/DefinitelyTyped',
      'oblador/react-native-collapsible',
      'xotahal/react-native-material-ui',
      'aksonov/react-native-tableview',
      'hectahertz/react-native-material-dialog',
      'umhan35/react-native-search-bar'
    ];
    projects.map(repo => this.fetchRepo(repo));
  }

  loadIonicons() {
    const src =
      'https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css';

    if (document.createStyleSheet) {
      document.createStyleSheet(src);
    } else {
      $('head').append(
        $(
          "<link rel='stylesheet' href='" +
            src +
            "' type='text/css' media='screen' />"
        )
      );
    }
  }

  fetchRepo(projectName) {
    fetch(`https://api.github.com/repos/${projectName}`)
      .then(res => res.json())
      .then(data => {
        this.osProjects.append(`
          <div class="col-sm-6 col-md-4">
            <article class="os-project">
              <div>
                <a href="${
                  data.html_url
                }" target="_blank" class="os-project__title" rel="noopener">${
          data.name
        }</a>
                <p class="os-project__desc">${data.description}</p>
              </div>
              <div class="os-project__stats">
                <span class="os-project__language ${data.language.toLowerCase()}">${
          data.language
        }</span>
                <span class="os-project__stars"><i class="ion-android-star"></i> ${data.stargazers_count
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
              </div>
            </article>
          </div>
        `);
      })
      .catch(console.error);
  }
}
