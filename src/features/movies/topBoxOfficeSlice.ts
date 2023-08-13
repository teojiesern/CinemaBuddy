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
    getTopBoxOfficeMovies: state => {
      state.status = 'loading';
    },
    getTopBoxOfficeMoviesSuccess: (state, action: PayloadAction<Movies[]>) => {
      const newMovies = state.TopBoxOfficeMovies.concat(action.payload);
      state.TopBoxOfficeMovies = newMovies;
      state.status = 'success';
    },
    getTopBoxOfficeMoviesFailure: state => {
      state.status = 'failed';
    },
  },
});

export const {
  getTopBoxOfficeMovies,
  getTopBoxOfficeMoviesSuccess,
  getTopBoxOfficeMoviesFailure,
} = topBoxOfficeSlice.actions;

export const selectTopBoxOfficeMovies = (state: RootState) =>
  state.topBoxOffice.TopBoxOfficeMovies;

export default topBoxOfficeSlice.reducer;
