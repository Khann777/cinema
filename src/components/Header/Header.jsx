import React, { useCallback, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  TextField,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

import { getTopFilms } from "../../features/topFilms/topFilmsSlice";
import Navigation from "../Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import { getFilmsBySearch } from "./HeaderSlice";

export default function Header() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const isLoading = useSelector((state) => state.topFilms.isLoading);

  const dispatch = useDispatch();

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = async () => {
    await dispatch(getFilmsBySearch(search));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getFilms = useCallback(async () => {
    await dispatch(getTopFilms());
  }, [dispatch]);

  useEffect(() => {
    getFilms();
  }, [getFilms]);

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            color="buttons"
            size="large"
            sx={{ fontSize: "27px" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Thunder Cinema
          </Button>

          <TextField
            value={search}
            onChange={handleChangeSearch}
            color="text"
            InputProps={{
              endAdornment: (
                <>
                  {isLoading ? (
                    <CircularProgress color="secondary" />
                  ) : (
                    <IconButton sx={{ color: "#fff" }} onClick={handleSearch}>
                      <Search />
                    </IconButton>
                  )}
                </>
              ),
            }}
          />

          <Button variant="contained" color="buttons">
            Log in
          </Button>
        </Toolbar>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "80px" }}>
          <Navigation />
        </Box>
      </AppBar>
    </>
  );
}
