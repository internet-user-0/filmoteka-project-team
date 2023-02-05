// Импорт функции преобразования жанров
import { transformGenres } from './fetchGenres';

// const filmCardList = document.querySelector('.hero__list');

// Переменная базового URL к картинке постера
const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';

// Функция рендера карточки фильма

export function createFilmCardMarkap(dataArrey) {
  const markap = dataArrey
    .map(
      ({
        title,
        id,
        release_date,
        genre_ids,
        poster_path,
        vote_average,
      }) => `<li class="film-card" data-action="${id}">
        <div class="film-card__img-thumb">
          <a class="film-card__link" href="#"
            ><img
              class="film-card__img"
              src="${POSTER_PATH}${poster_path}"
              alt="movie poster"
          /></a>
        </div>
        <h2 class="film-card__title">${title}</h2>
        <div class="film-card__thumb-info">
        <p class="film-card__genre">${transformGenres(
          genre_ids.slice(0, 2)
        )} | ${release_date.slice(0, 4)}</p>
          <span class="film-card__rating">${vote_average.toFixed(1)}</span>
          
        </div>
      </li>`
    )
    .join('');
  return markap;
  // filmCardList.insertAdjacentHTML('beforeend', markap);
}
