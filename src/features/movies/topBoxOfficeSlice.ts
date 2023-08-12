import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

interface MoviesState {
  TopBoxOfficeMovies: Movies[];
  status: 'idle' | 'loading' | 'failed' | 'success';
}

// the state in reducers will already be correctly typed due to this initial state
const initialState: MoviesState = {
  TopBoxOfficeMovies: [],
  status: 'idle',
};

const topBoxOfficeSlice = createSlice({
  name: 'topBoxOffice',
  initialState,
  reducers: {
    getPopularMovies: state => {
      state.status = 'loading';
    },
    getPopularMoviesSuccess: (state, action: PayloadAction<Movies[]>) => {
      const newMovies = state.TopBoxOfficeMovies.concat(action.payload);
      state.TopBoxOfficeMovies = newMovies;
      state.status = 'success';
    },
    getPopularMoviesFailure: state => {
      state.status = 'failed';
    },
  },
});

export const {
  getPopularMovies,
  getPopularMoviesSuccess,
  getPopularMoviesFailure,
} = topBoxOfficeSlice.actions;

export const selectTopBoxOfficeMovies = (state: RootState) =>
  state.topBoxOffice.TopBoxOfficeMovies;

export default topBoxOfficeSlice.reducer;
