async function fetchTrailer(id) {
  const KEY = '7113ba9605fd4f5593de8c8922948eb6';
  const BASE = 'https://api.themoviedb.org/3/movie';
  const response = await fetch(`${BASE}/${id}/videos?api_key=${KEY}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export { fetchTrailer };
