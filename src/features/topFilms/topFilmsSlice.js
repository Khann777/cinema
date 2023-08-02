import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import API, { API_URL_POPULAR } from "../../requester";

const initialState = {
  films: [],
  isLoading: false,
};

export const getTopFilms = createAsyncThunk("films/top", async () => {
  const response = await API.get(API_URL_POPULAR);
  return response.data;
});

export const topFilmsSlice = createSlice({
  name: "topFilms",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getTopFilms.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTopFilms.fulfilled, (state, action) => {
      state.isLoading = false;
      state.films = action.payload.films;
    });
  },
});

export default topFilmsSlice.reducer;
