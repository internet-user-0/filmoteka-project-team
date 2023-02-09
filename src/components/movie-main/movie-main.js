import API from '../../api';
import { createFilmCardMarkap } from '../film-card/film-card-markup';
import { refs } from '../spiner/refs';
import { showSpinner, hideSpinner } from '../spiner/spiner';
import { makePagination } from '../pagination/pagination';

const axios = require('axios').default;

const API_KEY = '7b4917c1c89b56950d6ac1f3ef5382d2';
const BASE_URL = 'https://api.themoviedb.org/3';
let page = 1;

showMovie(page);

const filmCardList = document.querySelector('.hero__list');
// пагинация
async function showMovie(page = 1) {
  try {
    const data = await fetchPopularMovie(page);


    filmCardList.insertAdjacentHTML('beforeend', createFilmCardMarkap(data.results));

    makePagination(data.total_results, data.total_pages).on(
      'afterMove',
      ({ page }) => {
        fetchPopularMovie(page).then(data => {
          filmCardList.innerHTML = '';
          filmCardList.insertAdjacentHTML('beforeend', createFilmCardMarkap(data.results));
        });
      }
    );
  } catch (err) {
    console.error(err);
  }
}
showMovie().then();

// ПОПУЛЯРНЫЕ ФИЛЬМЫ НА ГЛАВНОЙ СТРАНИЦЕ

async function fetchPopularMovie(page) {
  showSpinner(refs.spinnerGallery, refs.iconSearch);
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );

    page += 1;


    return response.data;
  } catch (error) {
    console.log(`${error}`);
  } finally {
    setTimeout(() => {
      hideSpinner(refs.spinnerGallery, refs.iconSearch);
    }, 300);
  }
}

export default { showMovie, fetchPopularMovie };
