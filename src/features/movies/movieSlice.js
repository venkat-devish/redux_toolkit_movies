import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const searchTerm = "Harry";
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${searchTerm}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const searchTerm = "Harry";
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${searchTerm}&type=series`
    );
    return response.data;
  }
);

const initialState = {
  isLoading: "false",
  movies: [],
  shows: [],
  error: null,
};
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        state.isLoading = "true";
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        state.isLoading = "false";
        state.movies = payload;
      })
      .addCase(fetchAsyncMovies.rejected, (state, action) => {
        state.isLoading = "false";
        state.movies = [];
        state.error = action.error.message;
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        state.shows = payload;
      });
  },
});

export const { addMovies } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const isFetching = (state) => state.movies.isLoading;
export default moviesSlice.reducer;
