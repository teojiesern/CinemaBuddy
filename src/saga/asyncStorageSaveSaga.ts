import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { setMovieToAsyncStorage } from '../api/moviesApi';
import { selectSavedMovies, setMovie } from '../features/movies/savedMoviesSlice';

function* saveMovieSaga(action: PayloadAction<Movies>) {
  const savedMovies: Movies[] = yield select(selectSavedMovies);
  const newMovies = [...savedMovies, action.payload];
  yield call(setMovieToAsyncStorage, newMovies);
  yield put(setMovie(newMovies));
}

export default function* watchSaveCall() {
  yield takeEvery('savedMovies/callSaveMovie', saveMovieSaga);
}
