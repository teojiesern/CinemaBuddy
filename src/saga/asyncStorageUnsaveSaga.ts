import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, select, takeEvery} from 'redux-saga/effects';
import {setMovieToAsyncStorage} from '../api/moviesApi';
import {selectSavedMovies, setMovie} from '../features/movies/savedMoviesSlice';

function* unSaveMovieSaga(action: PayloadAction<Movies>) {
  const savedMovies: Movies[] = yield select(selectSavedMovies);
  const newMovies =
    savedMovies.length === 0
      ? []
      : savedMovies.filter(movie => {
          return movie.id !== action.payload.id;
        });
  yield call(setMovieToAsyncStorage, newMovies);
  yield put(setMovie(newMovies));
}

export default function* watchunSaveCall() {
  yield takeEvery('savedMovies/callUnsaveMovie', unSaveMovieSaga);
}
