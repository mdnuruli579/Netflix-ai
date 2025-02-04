import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    trandingMovies:null,
    upcomingMovies:null,
    horrorMovies:null,
    comedyMovies:null,
    movieByName:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTrandingMovies: (state, action) => {
      state.trandingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addHorrorMovies: (state, action) => {
      state.horrorMovies = action.payload;
    },
    addComedyMovies: (state, action) => {
      state.comedyMovies = action.payload;
    },
    addMoviesByName: (state, action) => {
      state.movieByName = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo,
   addPopularMovies ,addTrandingMovies,addUpcomingMovies,
   addHorrorMovies, addComedyMovies,addMoviesByName
  } =
  moviesSlice.actions;

export default moviesSlice.reducer;
