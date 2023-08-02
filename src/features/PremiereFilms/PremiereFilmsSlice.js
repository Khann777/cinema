import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import API, { API_URL_PREMIERES } from "../../requester";

const initialState = {
  films: [],
  isLoading: false,
};

export const getPremiereFilms = createAsyncThunk("films/premiere", async () => {
  const response = await API.get(API_URL_PREMIERES);
  return response.data;
});

export const PremiereFilmsSlice = createSlice({
  name: "premiereFilms",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getPremiereFilms.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPremiereFilms.fulfilled, (state, action) => {
      state.isLoading = false;
      state.films = action.payload.items;
    });
  },
});

export default PremiereFilmsSlice.reducer;
