import debounce from 'lodash.debounce';
import { createFilmCardMarkap } from '../film-card/film-card-markup';
import { getMoviesByName } from '../../api.js';
import { showSpinner, hideSpinner } from '../spiner/spiner';
import { refs } from '../spiner/refs';

const searchForm = document.forms[0];
const searchInput = searchForm[1];
const searchButton = searchForm[2];
const filmCardList = document.querySelector('.hero__list');

const errorMessage = document.querySelector('.header_main__form__error');
errorMessage.style.opacity = '0';
errorMessage.style.transition = 'opacity 0.5s';

const ul = document.createElement('ul');
ul.setAttribute('class', 'search-helper');
searchForm.appendChild(ul);

searchInput.addEventListener('input', debounce(renderListHelper, 500));
searchButton.addEventListener('click', renderSearchMovies);
ul.addEventListener('click', moveValueToSearch);

function renderSearchMovies(e) {
  e.preventDefault();
  ul.innerHTML = '';

  if (!searchInput.value.trim()) {
    errorMessage.style.opacity = '1';
    setTimeout(() => infoHidden(errorMessage), 2000);
  }
  getMovie();
  searchForm.reset();
}

function renderListHelper(e) {
  e.preventDefault();

  if (!searchInput.value.trim()) {
    infoHidden(ul);
    return;
  }

  getMoviesByName(searchInput.value.trim(), 1)
    .then(data => {
      ul.innerHTML = data
        .map(({ title, vote_average }) => {
          return `<li class="search-helper__item">${title}
        <span class="search-helper__vote">${String(vote_average)
          .padEnd(2, '.')
          .padEnd(3, '0')}</span></li>`;
        })
        .join('');

      ul.style.opacity = '1';
      ul.style.transition = 'opacity 0.5s';
    })
    .catch(error => console.log(error));
}

function getMovie() {
  showSpinner(refs.spinnerGallery, refs.iconSearch);
  getMoviesByName(searchInput.value.trim().toLowerCase(), 1)
    .then(data => {
      if (!data.length) {
        errorMessage.style.opacity = '1';
        setTimeout(() => infoHidden(), 3000);
        setTimeout(() => {
          hideSpinner(refs.spinnerGallery, refs.iconSearch);
        }, 400);
        return;
      }
      setTimeout(() => {
        hideSpinner(refs.spinnerGallery, refs.iconSearch);
      }, 400);
      filmCardList.innerHTML = '';

      filmCardList.insertAdjacentHTML('beforeend', createFilmCardMarkap(data));
    })
    .catch(error => console.log(error));
  setTimeout(() => {
    hideSpinner(refs.spinnerGallery, refs.iconSearch);
  }, 400);
}

function moveValueToSearch(e) {
  let setValue = e.target.textContent.slice(0, -4).trim();
  searchInput.value = setValue;
  getMovie();
  infoHidden(ul);
  searchForm.reset();
}

function infoHidden(el) {
  el.style.opacity = '0';
  el.style.transition = 'opacity 0.5s';
}
