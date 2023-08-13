import {call, put, take} from 'redux-saga/effects';
import {getMoviesFromAsyncStorage} from '../api/moviesApi';
import {updateInitialMovies} from '../features/movies/savedMoviesSlice';

function* getMoviesFromApi() {
  const data: Movies[] = yield call(getMoviesFromAsyncStorage);
  yield put(updateInitialMovies(data));
}

export default function* watchGetMovies() {
  yield take('savedMovies/getMovies');
  yield call(getMoviesFromApi);
}
