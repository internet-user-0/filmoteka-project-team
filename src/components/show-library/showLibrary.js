import { createFilmCardMarkap } from '../film-card/film-card-markup';
import { getFromStorage } from '../storage/storage';
import { makeLibraryPagination, makePagination } from '../pagination/pagination';
import { paginationEl } from '../pagination/pagination';
import { makeLibraryPagination } from '../pagination/pagination';
import { ITEM_PER_PAGE } from '../pagination/pagination';


const listLibraryEl = document.querySelector('ul[render="libraryCard"]')


const btnQueue = document.querySelector('button[data-btn="queue"]');
const btnWatched = document.querySelector('button[data-btn="watched"]');
const add = document.querySelector('.modal-wrap');
const containerClear = document.querySelector('.clear');
// console.log(btnRemove)

btnQueue.addEventListener('click', (e) => showStorage(e.target.dataset.btn));
btnWatched.addEventListener('click', (e) => showStorage(e.target.dataset.btn));
// btnRemove.addEventListener('click', showStorage('watched'));


let page = 1

function showStorage(name) {
   paginationEl.style.display = 'none';
   if (name === 'queue') {
      btnWatched.classList.remove("current");
      btnQueue.classList.add("current");
   } else {
      btnWatched.classList.add("current");
      btnQueue.classList.remove("current");
   }

   const data = Object.values(getFromStorage(name));

   if (data.length === 0) {
      containerClear.classList.remove('is-hidden');
   } else {
      containerClear.classList.add('is-hidden');
   }


   listLibraryEl.innerHTML = '';
   listLibraryEl.innerHTML = createFilmCardMarkap(data.slice(0, ITEM_PER_PAGE));

   const totalResult = data.length;
   makeLibraryPagination(totalResult).on(
      'afterMove',
      ({ page }) => {
         console.log(page)
         listLibraryEl.innerHTML = createFilmCardMarkap(data.slice(page === 1 ? 0 : (page - 1) * ITEM_PER_PAGE, page * ITEM_PER_PAGE));
      });
};









showStorage('watched');



