import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b972cd435eef10c3549386c0239d193f';

const fetchGenreList = async () => {
  const response = await axios.get(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
  );
  return response.data;
};

// console.log(fetchGenreList());

fetchGenreList()
  .then(data => {
    const genresList = data.genres;
    // console.log(genresList);
    localStorage.setItem('genresList', JSON.stringify(genresList));
  })
  .catch(err => {
    console.error(err);
  });

//  Трансформация жанров в строку

export function transformGenres(genreIds) {
  const genreArr = JSON.parse(localStorage.getItem('genresList'));
  const newArr = [];
  let genresString = '';

  if (genreArr) {
    genreIds.forEach(genreId => {
      genreArr.map(genre => {
        if (genre.id === genreId) {
          newArr.push(genre.name);
          genresString = newArr.join(', ');
        }
      });
    });
  }

  return genresString;
}

// console.log(transformGenres([28, 18]));
