const btn = document.querySelector('.trailer-btn');
const body = document.querySelector('body');
const content = document.querySelector('.modal-trailer');
const backdrop = document.querySelector('.backdrop');
let movieId = '62d5aea104b596005413b551';

btn.addEventListener('click', onBtnClick);

function onBtnClick() {
  // body.classList.add('backdrop');
  // backdrop.classList.remove('is-hidden');
  fetchTrailer(movieId).then(data => {
    console.log(data);
    let key = data.results[0].key;
    createMarkup(key);
  });
}

function createMarkup(key) {
  body.insertAdjacentHTML(
    'beforeend',

    `
      <iframe
        class="js-trailer modal-window"
      src="https://www.youtube.com/embed/${key}"
      width="640"
      height="360"
      frameborder="0"
     
      allow="autoplay; encrypted-media"
    ></iframe>`
  );
}

async function fetchTrailer(id) {
  const KEY = '7113ba9605fd4f5593de8c8922948eb6';
  const BASE = 'https://api.themoviedb.org/3/movie';
  const response = await fetch(`${BASE}/${id}/videos?api_key=${KEY}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
