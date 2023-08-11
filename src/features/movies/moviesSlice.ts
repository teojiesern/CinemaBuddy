import {createSlice} from '@reduxjs/toolkit';

const initialState = 1

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
});

export default moviesSlice.reducer;
