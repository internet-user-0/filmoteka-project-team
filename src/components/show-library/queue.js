import filmLocalStorage from './localStorageFilmQueue.json'
import {createFilmCardMarkap} from '../film-card/film-card-markup';


localStorage.setItem("filmLocal", JSON.stringify(filmLocalStorage));

const listLibraryEl = document.querySelector('ul[render="libraryCard"]')
const filmLocal = localStorage.getItem("filmLocal");
const filmParse = JSON.parse(filmLocal);




const btn = document.querySelector('button[data-btn="queue"]');
btn.addEventListener('click', () => showQueue(filmParse));




function showQueue(data) {
   console.log('результат', data);
   // markap(data);
   // const result = createFilmCardMarkap(data)
   listLibraryEl.insertAdjacentHTML('beforeend', createFilmCardMarkap(data))
};





