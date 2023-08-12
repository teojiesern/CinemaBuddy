import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface types {
  topBoxOfficeLastWeekMovies: Movies[];
  status: 'idle' | 'loading' | 'failed' | 'success';
}

const initialState: types = {
  topBoxOfficeLastWeekMovies: [],
  status: 'idle',
};

const topBoxOfficeLastWeekSlice = createSlice({
  name: 'topBoxOfficeLastWeek',
  initialState,
  reducers: {
    getTopBoxOfficeLastWeekMovies: state => {
      state.status = 'loading';
    },
    getTopBoxOfficeLastWeekMoviesSuccess: (
      state,
      action: PayloadAction<Movies[]>,
    ) => {
      const newMovies = state.topBoxOfficeLastWeekMovies.concat(action.payload);
      state.topBoxOfficeLastWeekMovies = newMovies;
      state.status = 'success';
    },
    getTopBoxOfficeLastWeekMoviesFailure: state => {
      state.status = 'failed';
    },
  },
});

export const {
  getTopBoxOfficeLastWeekMovies,
  getTopBoxOfficeLastWeekMoviesSuccess,
  getTopBoxOfficeLastWeekMoviesFailure,
} = topBoxOfficeLastWeekSlice.actions;

export const selectTopBoxOfficeLastWeekMovie = (state: RootState) =>
  state.topBoxOfficeLastWeek.topBoxOfficeLastWeekMovies;

export default topBoxOfficeLastWeekSlice.reducer;
