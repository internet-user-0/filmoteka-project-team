import {createFilmCardMarkap} from '../film-card/film-card-markup';
import {getMoviesByName} from "../../api.js";


const searchForm = document.forms[0];
const searchInput = searchForm[1]
const searchButton = searchForm[2]
const filmCardList = document.querySelector('.hero__list');

const errorMessage = document.querySelector('.header_main__form__error')
errorMessage.style.opacity = "0"
errorMessage.style.transition = "opacity 0.5s"

searchButton.addEventListener('click', (e) => {
  e.preventDefault()
  if (!searchInput.value.trim()) {
    errorMessage.style.opacity = "1"
    setTimeout(errorInfoHidden, 3000)

    return
  }

  getMovie()

  searchForm.reset()
})
searchInput.addEventListener('input', (e) => {
  e.preventDefault()
  getMoviesByName(searchInput.value.trim(), 1)
    .then((data) => {
      data.map(({title}) => {
        console.log(title)
      })
    })

    .catch(error => console.log(error))
})

function getMovie() {
  getMoviesByName(searchInput.value.trim(), 1)
    .then(data => {
      if (!data.length) {
        errorMessage.style.opacity = "1"
        setTimeout(errorInfoHidden, 3000)
        return
      }
      filmCardList.innerHTML = ''

      filmCardList.insertAdjacentHTML('beforeend', createFilmCardMarkap(data))
    })
    .catch(error => console.log(error));
}

function errorInfoHidden() {
  errorMessage.style.opacity = "0"
}

