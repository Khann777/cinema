import axios from "axios";

export const API_KEY = "28a318b1-b283-4c79-a7d2-8164aa8a9855";
export const API_URL_POPULAR = "top?type=TOP_100_POPULAR_FILMS&page=1";
export const API_URL_PREMIERES = "premieres?year=2022&month=FEBRUARY";
export const API_URL_ALL =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1";
export const API_URL_SEARCH = (search) =>
  `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${search}`;
export const BASE_URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films/";
export const OLD_BASE_URL =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/";

export const OLD_API = axios.create({
  baseURL: OLD_BASE_URL,
});

export const ALL_FILMS_API = axios.create({
  baseURL: API_URL_ALL,
});

const API = axios.create({
  baseURL: BASE_URL,
});

OLD_API.defaults.headers["X-API-KEY"] = API_KEY;
API.defaults.headers["X-API-KEY"] = API_KEY;
ALL_FILMS_API.defaults.headers["X-API-KEY"] = API_KEY;

export default API;
