import { CircularProgress } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import FilmCard from "../../components/FilmCard/FilmCard";
import { getPremiereFilms } from "./PremiereFilmsSlice";

const PremiereFilms = (props) => {
  const isLoading = useSelector((state) => state.premiereFilms.isLoading);
  const films = useSelector((state) => state.premiereFilms.films);

  const filmsBySearch = useSelector(
    (state) => state.filmsBySearch.filmsBySearch
  );

  const dispatch = useDispatch();

  const handlePremiereFilms = useCallback(async () => {
    await dispatch(getPremiereFilms());
  }, []);

  useEffect(() => {
    handlePremiereFilms();
  }, [handlePremiereFilms]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "80px",
        padding: "40px",
        flexWrap: "wrap",
        background: "#AF4425",
      }}
    >
      {filmsBySearch.length === 0
        ? films.map((item) => (
            <>
              <FilmCard
                key={item.filmId}
                posterUrl={item.posterUrl}
                nameEn={item.nameEn}
                nameRu={item.nameRu}
                filmLength={item.duration}
                rating={"Not rated"}
                ratingVoteCount={"Not rated"}
                year={item.year}
              />
            </>
          ))
        : filmsBySearch.map((item) => (
            <>
              <FilmCard
                key={item.filmId}
                posterUrl={item.posterUrl}
                nameEn={item.nameEn}
                nameRu={item.nameRu}
                filmLength={item.duration}
                rating={"Not rated"}
                ratingVoteCount={"Not rated"}
                year={item.year}
              />
            </>
          ))}
    </div>
  );
};

PremiereFilms.propTypes = {};

export default PremiereFilms;
