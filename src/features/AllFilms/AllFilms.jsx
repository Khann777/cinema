import { CircularProgress } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import FilmCard from "../../components/FilmCard/FilmCard";
import { getAllFilms } from "./AllFilmsSlice";

const AllFilms = (props) => {
  const isLoading = useSelector((state) => state.allFilms.isLoading);
  const films = useSelector((state) => state.allFilms.films);
  console.log("films: ", films);

  const dispatch = useDispatch();

  const handleAllFilms = useCallback(async () => {
    await dispatch(getAllFilms());
  }, []);

  useEffect(() => {
    handleAllFilms();
  }, [handleAllFilms]);

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
      {films.map((item) => (
        <>
          <FilmCard
            key={item.kinopoiskId}
            posterUrl={item.posterUrl}
            nameEn={item.nameEn}
            nameRu={item.nameRu}
            filmLength={`${item.duration} minutes`}
            rating={"Not rated"}
            ratingVoteCount={"Not rated"}
            year={item.year}
          />
        </>
      ))}
    </div>
  );
};

AllFilms.propTypes = {};

export default AllFilms;
