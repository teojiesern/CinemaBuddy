import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

interface mostPopMoviesState {
  mostPopMovies: Movies[];
  status: 'idle' | 'loading' | 'failed' | 'success';
}

const initialState: mostPopMoviesState = {
  mostPopMovies: [],
  status: 'idle',
};

const mostPopMoviesSlice = createSlice({
  name: 'mostPopMovies',
  initialState,
  reducers: {
    getMostPopMovies: state => {
      state.status = 'loading';
    },
    getMostPopMoviesSuccess: (state, action: PayloadAction<Movies[]>) => {
      const newMovies = state.mostPopMovies.concat(action.payload);
      state.mostPopMovies = newMovies;
      state.status = 'success';
    },
    getMostPopMoviesFailure: state => {
      state.status = 'failed';
    },
  },
});

export const {
  getMostPopMovies,
  getMostPopMoviesSuccess,
  getMostPopMoviesFailure,
} = mostPopMoviesSlice.actions;

export const selectMostPopMovies = (state: RootState) =>
  state.mostPopMovies.mostPopMovies;

export default mostPopMoviesSlice.reducer;
