// здесь будут храниться функции для получения значений из бек-енда

const axios = require('axios').default;

const API_KEY = '7b4917c1c89b56950d6ac1f3ef5382d2';
const BASE_URL = 'https://api.themoviedb.org/3';

// ПОПУЛЯРНЫЕ ФИЛЬМЫ НА ГЛАВНОЙ СТРАНИЦЕ

async function fetchPopularMovie(page) {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );
    page += 1;
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(`${error}`);
  }
}


export default { fetchPopularMovie };