import API from '../../api';
import { createFilmCardMarkap } from '../film-card/film-card-markup';

const axios = require('axios').default;

const API_KEY = '7b4917c1c89b56950d6ac1f3ef5382d2';
const BASE_URL = 'https://api.themoviedb.org/3';
let page = 1;

showMovie();

const filmCardList = document.querySelector('.hero__list');

function showMovie() {
  fetchPopularMovie(page)
    .then(dataArrey => {
      filmCardList.insertAdjacentHTML(
        'beforeend',
        createFilmCardMarkap(dataArrey)
      );
    })
    .catch(error => console.log(error));
}

// ПОПУЛЯРНЫЕ ФИЛЬМЫ НА ГЛАВНОЙ СТРАНИЦЕ

async function fetchPopularMovie(page) {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );

    page += 1;
    console.log(response.data);
    console.log(response.data.results);

    return response.data.results;
  } catch (error) {
    console.log(`${error}`);
  }
}

export default { showMovie, fetchPopularMovie };

//=======================================Пошук по ключовому слову===============================

import { getMoviesByName } from '../../api.js';

const searchForm = document.forms[0];
const searchInput = searchForm[1];
const searchButton = searchForm[2];

const errorMessage = document.querySelector('div[id="search_error"]');
errorMessage.style.opacity = '0';
errorMessage.style.transition = 'opacity 0.5s';

searchButton.addEventListener('click', e => {
  e.preventDefault();
  if (!searchInput.value.trim()) {
    errorMessage.style.opacity = '1';
    setTimeout(errorInfoHidden, 3000);

    return;
  }

  getMovie();

  searchForm.reset();
});
searchInput.addEventListener('input', e => {
  e.preventDefault();
  getMoviesByName(searchInput.value.trim(), 1)
    .then(data => {
      data.map(({ title }) => {
        console.log(title);
      });
    })

    .catch(error => console.log(error));
});

function getMovie() {
  getMoviesByName(searchInput.value.trim(), 1)
    .then(data => {
      if (!data.length) {
        errorMessage.style.opacity = '1';
        setTimeout(errorInfoHidden, 3000);
        return;
      }
      filmCardList.innerHTML = '';

      filmCardList.insertAdjacentHTML('beforeend', createFilmCardMarkap(data));
    })
    .catch(error => console.log(error));
}

function errorInfoHidden() {
  errorMessage.style.opacity = '0';
}
