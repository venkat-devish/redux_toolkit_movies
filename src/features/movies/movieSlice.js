import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (searchTerm) => {
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${searchTerm}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (searchTerm) => {
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${searchTerm}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncShowsOrMovies = createAsyncThunk(
  "movies/fetchAsyncShowsOrMovies",
  async (id) => {
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  isLoading: "false",
  movies: [],
  shows: [],
  selectedMovieOrShow: {},
  error: null,
};
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = [];
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
      })
      .addCase(fetchAsyncShowsOrMovies.pending, (state, { payload }) => {
        return { ...state, isLoading: "true" };
      })
      .addCase(fetchAsyncShowsOrMovies.fulfilled, (state, { payload }) => {
        return { ...state, selectedMovieOrShow: payload, isLoading: "false" };
      });
  },
});

export const { removeSelectedMovieOrShow } = moviesSlice.actions;
export const isFetching = (state) => state.movies.isLoading;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getError = (state) => state.movies.error;
export const getSelectedMovieOrShow = (state) => {
  return state.movies.selectedMovieOrShow;
};
export default moviesSlice.reducer;
