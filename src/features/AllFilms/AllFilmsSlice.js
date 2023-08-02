import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import API, { API_URL_ALL } from "../../requester";

const initialState = {
  films: [],
  isLoading: false,
};

export const getAllFilms = createAsyncThunk("films/all", async () => {
  const response = await API.get(API_URL_ALL);
  return response.data;
});

export const AllFilmsSlice = createSlice({
  name: "allFilms",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getAllFilms.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllFilms.fulfilled, (state, action) => {
      state.isLoading = false;
      state.films = action.payload.items;
    });
  },
});

export default AllFilmsSlice.reducer;
