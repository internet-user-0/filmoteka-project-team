// здесь будут храниться функции для получения значений из бек-енда

import axios from 'axios';


const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b972cd435eef10c3549386c0239d193f';
const SEARCH_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}`;


async function getMoviesByName(querySearch, page) {
  try {
    const response = await axios.get(SEARCH_URL, {
      params: {
        query: querySearch,
        page: page,
      },
    });

    return response.data

  } catch (e) {
    console.log(e)
  }
}

export {getMoviesByName}