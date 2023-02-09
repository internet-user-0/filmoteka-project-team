import { createFilmCardMarkap } from '../film-card/film-card-markup';
import { getFromStorage } from '../storage/storage';


const listLibraryEl = document.querySelector('ul[render="libraryCard"]')


const btnQueue = document.querySelector('button[data-btn="queue"]');
const btnWatched = document.querySelector('button[data-btn="watched"]');
const add = document.querySelector('.modal-wrap');
// const btnRemove = document.querySelector('.modal-wrap');
// console.log(btnRemove)

btnQueue.addEventListener('click', (e) => showStorage(e.target.dataset.btn));
btnWatched.addEventListener('click', (e) => showStorage(e.target.dataset.btn));
// btnRemove.addEventListener('click', showStorage('watched'));


function showStorage(name) {
   if (name === 'queue') {
      btnWatched.classList.remove("current");
      btnQueue.classList.add("current");
   } else {
      btnWatched.classList.add("current");
      btnQueue.classList.remove("current");
   }

   const data = Object.values(getFromStorage(name));
   if (data.length === 0) {
      listLibraryEl.innerHTML = '<li class="defalt"></li>';
   }else{
      listLibraryEl.innerHTML = createFilmCardMarkap(data);
   }



   add.addEventListener('click', (e) => {
      console.log(e.target.classList.contains(".modal__btn--remove"))
      
      if(e.target.classList.contains('.modal__btn--remove')){
         console.log(e.target.classList.contains(".modal__btn--remove"))
         const queue = JSON.parse(localStorage.getItem('queue'));

         listLibraryEl.innerHTML = createFilmCardMarkap(queue)
      }
   });
};


showStorage('watched');



