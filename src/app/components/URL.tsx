export const API_KEY = "400eeb38275ce610c985a6cb3f3134c9";
export const API_URL = (page: number) =>
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;
export const API_GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
export const API_IMG = 'https://image.tmdb.org/t/p/w500'
// const API_FILTER = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=`;