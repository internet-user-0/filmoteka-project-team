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
        genres,
        poster_path,
        vote_average,
      }) => {
        let poster = ``;
        if (poster_path) {
          poster = `${POSTER_PATH}${poster_path}`;
        } else {
          poster = 'https://live.staticflickr.com/65535/52673964597_7ac974f3b4_k.jpg';
        }
        let genreNames;
        if (genres) {
          genreNames = genres.slice(0, 2).map(({ name }) => name).join(', ');
        } else {
          genreNames = transformGenres(genre_ids.slice(0, 2));
        }
        return `<li class="film-card" data-action="${id}">
        <div class="film-card__img-thumb">
          <a class="film-card__link" href="#"
            ><img
              class="film-card__img"
              src="${poster}"
              alt="movie poster"
          /></a>
        </div>
        <h2 class="film-card__title">${title}</h2>
        <div class="film-card__thumb-info">
        <p class="film-card__genre">${genreNames} | ${release_date.slice(0, 4)}</p>
          <span class="film-card__rating">${vote_average.toFixed(1)}</span>
          
        </div>
        </li>`
      }
    )
    .join('');
  return markap;
  // filmCardList.insertAdjacentHTML('beforeend', markap);
}
