import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

interface types {
  topRatedMovies: Movies[];
  status: 'idle' | 'loading' | 'failed' | 'success';
}

const initialState: types = {
  topRatedMovies: [],
  status: 'idle',
};

const topRatedMoviesSlice = createSlice({
  name: 'topRatedMovies',
  initialState,
  reducers: {
    getTopRatedMovies: state => {
      state.status = 'loading';
    },
    getTopRatedMoviesSuccess: (state, action: PayloadAction<Movies[]>) => {
      const newTopRatedMovies = state.topRatedMovies.concat(action.payload);
      state.topRatedMovies = newTopRatedMovies;
      state.status = 'success';
    },
    getTopRatedMoviesFailure: state => {
      state.status = 'failed';
    },
  },
});

export const {
  getTopRatedMovies,
  getTopRatedMoviesSuccess,
  getTopRatedMoviesFailure,
} = topRatedMoviesSlice.actions;

export const selectTopRatedMovies = (state: RootState) =>
  state.topRatedMovies.topRatedMovies;

export default topRatedMoviesSlice.reducer;
