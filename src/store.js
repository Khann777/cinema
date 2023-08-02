import { configureStore } from "@reduxjs/toolkit";
import TopFilmsReducer from "./features/topFilms/topFilmsSlice";
import PremiereFilmsReducer from "./features/PremiereFilms/PremiereFilmsSlice";
import AllFilmsReducer from "./features/AllFilms/AllFilmsSlice";
import FilmsBySearchReducer from "./components/Header/HeaderSlice";

const store = configureStore({
  reducer: {
    topFilms: TopFilmsReducer,
    premiereFilms: PremiereFilmsReducer,
    allFilms: AllFilmsReducer,
    filmsBySearch: FilmsBySearchReducer,
  },
});

export default store;
