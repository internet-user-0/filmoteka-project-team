const btn = document.querySelector(".btn");
const body = document.querySelector('body')
btn.addEventListener("click", onBtnClick);
let movieId = "62d5aea104b596005413b551";

function onBtnClick() {
    body.classList.add('backdrop')
    fetchTrailer(movieId).then((data) => {
        let key = data.results[0].key;
        body.insertAdjacentHTML("beforeend", `<iframe
        class="js-trailer modal-window"
      src="https://www.youtube.com/embed/${key}"
      width="640"
      height="360"
      frameborder="0"
     
      allow="autoplay; encrypted-media"
    ></iframe>`);
    });
};

async function fetchTrailer(id) {
  const KEY = "7113ba9605fd4f5593de8c8922948eb6";
  const BASE = "https://api.themoviedb.org/3/movie";
  const response = await fetch(`${BASE}/${id}/videos?api_key=${KEY}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
