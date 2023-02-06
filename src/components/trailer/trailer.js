import { fetchTrailer } from './fetch-trailer';

const openBtn = document.querySelector('.trailer-btn');
const content = document.querySelector('.trailer-wrap');
const backdrop = document.querySelector('.trailer-backdrop');
const closeBtn = document.querySelector('.js-modal-close');
// let movieId = '8';

openBtn.addEventListener('click', onTrailerOpen);
closeBtn.addEventListener('click', onTrailerClose);
backdrop.addEventListener('click', onBackdropClose);
document.addEventListener('keydown', onEscapePress);

function onTrailerOpen() {
  backdrop.classList.remove('is-hidden');
  const card = document.querySelector('.film-card');
  const movieId = card.getAttribute('data-action');

  fetchTrailer(movieId)
    .then(data => {
      let key = data.results[0].key;
      let name = data.results[0].name;

      createMarkup(key, name);
    })
    .catch(err => console.log(err));
}

function onTrailerClose() {
  content.innerHTML = '';
  backdrop.classList.add('is-hidden');
}

function onBackdropClose(evt) {
  if (evt.target === backdrop) {
    content.innerHTML = '';
    backdrop.classList.add('is-hidden');
  }
}

function onEscapePress(evt) {
  if (evt.code === 'Escape') {
    content.innerHTML = '';
    backdrop.classList.add('is-hidden');
    document.removeEventListener('keydown', onEscapePress);
  }
}

function createMarkup(key, name) {
  const markup = `<h2 class="trailer-modal-title">${name}</h2>
      <iframe
        class="js-iframe"
      src="https://www.youtube.com/embed/${key}"
      width="640"
      height="360"
      frameborder="0"
     
      allow="autoplay; encrypted-media"
    ></iframe>`;

  return content.insertAdjacentElement('beforeend', markup);
}
