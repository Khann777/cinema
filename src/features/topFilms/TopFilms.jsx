import { CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import FilmCard from "../../components/FilmCard/FilmCard";

const TopFilms = (props) => {
  const isLoading = useSelector((state) => state.topFilms.isLoading);
  const films = useSelector((state) => state.topFilms.films);

  const filmsBySearch = useSelector(
    (state) => state.filmsBySearch.filmsBySearch
  );

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
                filmLength={item.filmLength}
                rating={item.rating}
                ratingVoteCount={item.ratingVoteCount}
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
                filmLength={item.filmLength}
                rating={item.rating}
                ratingVoteCount={item.ratingVoteCount}
                year={item.year}
              />
            </>
          ))}
    </div>
  );
};

TopFilms.propTypes = {};

export default TopFilms;
