import API from '../../api';
import { createFilmCardMarkap } from '../film-card/film-card-markup';

const axios = require('axios').default;

const API_KEY = '7b4917c1c89b56950d6ac1f3ef5382d2';
const BASE_URL = 'https://api.themoviedb.org/3';
let page = 1;

showMovie(page);

const filmCardList = document.querySelector('.hero__list');

function showMovie(page) {
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

export default {showMovie, fetchPopularMovie};