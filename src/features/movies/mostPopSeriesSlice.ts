import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

interface type {
  mostPopSeries: Movies[];
  status: 'idle' | 'loading' | 'failed' | 'success';
}

const initialState: type = {
  mostPopSeries: [],
  status: 'idle',
};

const mostPopSeriesSlice = createSlice({
  name: 'mostPopSeries',
  initialState,
  reducers: {
    getMostPopSeries: state => {
      state.status = 'loading';
    },
    getMostPopSeriesSuccess: (state, action: PayloadAction<Movies[]>) => {
      const newSeries = state.mostPopSeries.concat(action.payload);
      state.mostPopSeries = newSeries;
      state.status = 'success';
    },
    getMostPopSeriesFailure: state => {
      state.status = 'failed';
    },
  },
});

export const {
  getMostPopSeries,
  getMostPopSeriesSuccess,
  getMostPopSeriesFailure,
} = mostPopSeriesSlice.actions;

export const selectMostPopSeries = (state: RootState) =>
  state.mostPopSeries.mostPopSeries;

export default mostPopSeriesSlice.reducer;
