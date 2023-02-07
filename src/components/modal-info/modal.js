import { fetchModalInfo } from './fetch-info';
import { transformGenresOnModal } from '../film-card/fetchGenres';

const URL_IMG = 'https://image.tmdb.org/t/p/w500';

const refs = {
  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal-wrap'),
  filmList: document.querySelector('.hero__list'),
  btnClose: document.querySelector('.modal__cross-btn'),
  body: document.querySelector('body')
}
// --виніс id в окрему змінну
let filmId

const { backdrop, modal, filmList, btnClose, body } = refs;

filmList.addEventListener('click', OnOpenModal);

// обработчик событий
function OnOpenModal(e) {
  e.preventDefault();

  const card = e.target.closest('li');
  // --виніс id в окрему змінну
  filmId = card.dataset.action;

  if (!card) {
    return;
  }

  fetchModalInfo(filmId)
    .then(data => {
      createModalsMarkup(data);
    })
    .catch(error => console.log(error));

  backdrop.classList.toggle('is-hidden');

  document.addEventListener('keydown', onCloseEsc)
    
  function onCloseEsc(e) {
    if (e.code === 'Escape') {
      modal.innerHTML = '';
      backdrop.classList.add('is-hidden');
      body.classList.remove('scroll-hidden');
      document.removeEventListener('keydown', onCloseEsc)
    }
  }

  btnClose.addEventListener('click', e => {
    modal.innerHTML = '';
    backdrop.classList.add('is-hidden');
    body.classList.remove('scroll-hidden');
  })

  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) {
      modal.innerHTML = '';
      backdrop.classList.add('is-hidden');
      body.classList.remove('scroll-hidden');
    }
  });

  if (!backdrop.classList.contains('is-hidden')) {
    body.classList.add('scroll-hidden');
  }
}

// создание разметки
function createModalsMarkup({ popularity, poster_path, genres, overview, original_title, vote_average, vote_count}) {
  const markup = `
            <img class="modal__img" src="${URL_IMG}${poster_path}" alt="poster" />
            <div class="modal__major-container">
                <h3 class="modal__title">${original_title}</h3>
                <div class="modal__sheet">
                        <ul class="modal__list">
                        <li class="modal__item">Vote / Votes</li>
                        <li class="modal__item">Popularity</li>
                        <li class="modal__item">Original Title</li>
                        <li class="modal__item">Genre</li>
                    </ul>
                <ul class="modal__list">
                    <li class="modal__item modal__item--flex modal__item--bold">
                        <span class="modal__item--vote">${vote_average.toFixed(1)}</span> /
                        <span class="modal__item--votes">${vote_count}</span>
                    </li>
                    <li class="modal__item modal__item--bold">${popularity.toFixed(1)}</li>
                    <li class="modal__item modal__item--bold">${original_title}</li>
                    <li class="modal__item modal__item--bold">${transformGenresOnModal(genres)}</li>
                </ul>
                </div>
                <div class="modal__about">
                <p class="modal__about-title">ABOUT</p>
                <p class="modal__about-descr">${overview}</p>
                </div>
                <ul class="modal__btn-container">
                  <li>
                    <button type="button" class="modal__btn modal__btn--watched">Add to Watched</button>
                  </li>
                  <li>
                    <button type="button" class="modal__btn modal__btn--queue">Add to queue</button>
                  </li>
                </ul>
            </div>
        </div>
    `;
  return modal.insertAdjacentHTML('beforeend', markup);
}

export { filmId };