import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

interface SavedMoviesState {
  movies: Movies[];
}

const initialState: SavedMoviesState = {
  movies: [],
};

const savedMoviesSlice = createSlice({
  name: 'savedMovies',
  initialState,
  reducers: {
    getMovies: state => {},
    updateInitialMovies: (state, action: PayloadAction<Movies[]>) => {
      state.movies = action.payload;
    },
    callSaveMovie: (state, action: PayloadAction<Movies>) => {},
    callUnsaveMovie: (state, action: PayloadAction<Movies>) => {},
    setMovie: (state, action: PayloadAction<Movies[]>) => {
      state.movies = action.payload;
    },
  },
});

export const {
  setMovie,
  callSaveMovie,
  callUnsaveMovie,
  updateInitialMovies,
  getMovies,
} = savedMoviesSlice.actions;

export const selectSavedMovies = (state: RootState) => state.savedMovies.movies;

export default savedMoviesSlice.reducer;
