import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface MoviesState {
  sortedMovies: Movies[];
  status: 'idle' | 'loading' | 'failed' | 'success';
}

// the state in reducers will already be correctly typed due to this initial state
const initialState: MoviesState = {
  sortedMovies: [],
  status: 'idle',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getPopularMovies: state => {
      state.status = 'loading';
    },
    getPopularMoviesSuccess: (state, action: PayloadAction<Movies[]>) => {
      state.sortedMovies = action.payload;
      state.status = 'success';
    },
    getPopularMoviesFailure: state => {
      state.status = 'failed';
    },
  },
});

export const {getPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
