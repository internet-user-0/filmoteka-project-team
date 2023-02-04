import API from '../../api';

let page = 1;

showMovie();

function showMovie() {
  API.fetchPopularMovie(page)
    .then()
    .catch(error => console.log(error));
}

export default { showMovie };
