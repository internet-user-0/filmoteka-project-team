import { createFilmCardMarkap } from '../film-card/film-card-markup';
import { getFromStorage } from '../storage/storage';

// это удалить
const listLibraryEl = document.querySelector('ul[render="libraryCard"]')
const btnQueue = document.querySelector('button[data-btn="queue"]');
const btnWatched = document.querySelector('button[data-btn="watched"]');

showStorage('watched')

btnQueue.addEventListener('click', (e) => showStorage(e.target.dataset.btn));
btnWatched.addEventListener('click', (e) => showStorage(e.target.dataset.btn));

function showStorage(name) {
   btnWatched.classList.remove("current");
   btnQueue.classList.remove("current");

   const data = Object.values(getFromStorage(name));

   // e.target.classList.add("current")
   listLibraryEl.insertAdjacentHTML('beforeend', createFilmCardMarkap(data));
};
