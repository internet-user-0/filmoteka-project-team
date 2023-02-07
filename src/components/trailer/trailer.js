import { fetchTrailer } from './fetch-trailer';
import { filmId } from '../modal-info/modal';

const openBtn = document.querySelector('.trailer-btn');
const content = document.querySelector('.trailer-wrap');
const backdrop = document.querySelector('.trailer-backdrop');
const closeBtn = document.querySelector('.js-modal-close');

openBtn.addEventListener('click', onTrailerOpen);
closeBtn.addEventListener('click', onTrailerClose);
backdrop.addEventListener('click', onBackdropClose);
document.addEventListener('keydown', onEscapePress);

function onTrailerOpen() {
  backdrop.classList.remove('is-hidden');
  fetchTrailer(filmId)
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
      frameborder="0"
     
      allow="autoplay; encrypted-media"
    ></iframe>`;

  return content.insertAdjacentHTML('beforeend', markup);
}
