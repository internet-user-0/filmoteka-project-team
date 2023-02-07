import {createFilmCardMarkap} from '../film-card/film-card-markup';

// это удалить
import filmLocalStorage from './localStorageFilmQueue.json'
localStorage.setItem("filmLocal", JSON.stringify(filmLocalStorage));
const listLibraryEl = document.querySelector('ul[render="libraryCard"]')
const filmLocal = localStorage.getItem("filmLocal");
// это удалить

// это заменить на нормальное локальное хранилище
const filmParse = JSON.parse(filmLocal);
// это заменить на нормальное локальное хранилище 


const btnQueue = document.querySelector('button[data-btn="queue"]');
const btnWatched = document.querySelector('button[data-btn="watched"]');

listLibraryEl.insertAdjacentHTML('beforeend', createFilmCardMarkap(filmParse))

btnQueue.addEventListener('click', (e) => showQueue(filmParse, e));
btnWatched.addEventListener('click', (e) => showQueue(filmParse, e));

function showQueue(data, e) {
   btnWatched.classList.remove("current")
   btnQueue.classList.remove("current")
   listLibraryEl.innerHTML = '';

   e.target.classList.add("current")
   listLibraryEl.insertAdjacentHTML('beforeend', createFilmCardMarkap(data))
};





