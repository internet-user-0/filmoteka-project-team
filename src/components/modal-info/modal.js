import { fetchModalInfo } from "./fetch-info";
import { transformGenresOnModal } from "../film-card/fetchGenres";

const URL_IMG = 'https://image.tmdb.org/t/p/w500';

const backdrop = document.querySelector('.backdrop');

fetchModalInfo(11)
    .then(data => {
        createModalsMarkup(data);
    })


function createModalsMarkup({ popularity, poster_path, genres, overview, original_title, vote_average, vote_count }) {
    const markup = `
          <div class="modal-info">
            <button type="button" class="modal__cross-btn">
                <svg class="modal__cross-btn-icon" width="14" height="14">
                    <use href="/src/symbol-defs.svg#cross"></use>
                </svg>
            </button>
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
                    <li class="modal__item modal__item--bold">
                        <span class="modal__item--vote">${vote_average}</span> /
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
                <li class="modal__btn modal__btn--watched">Add to Watched</li>
                <li class="modal__btn modal__btn--queue">Add to queue</li>
                </ul>
            </div>
        </div>
    `
    return backdrop.innerHTML = markup;
}
