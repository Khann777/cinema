import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { API_URL_SEARCH, OLD_API } from "../../requester";

const initialState = {
  isLoading: false,
  filmsBySearch: [],
};

export const getFilmsBySearch = createAsyncThunk(
  "films/search",
  async (search) => {
    const response = await OLD_API.get(API_URL_SEARCH(search));
    return response.data;
  }
);

export const headerSlice = createSlice({
  name: "filmsBySearch",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getFilmsBySearch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFilmsBySearch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.filmsBySearch = action.payload.films;
    });
  },
});

export default headerSlice.reducer;
