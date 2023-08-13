import {call, put, take} from 'redux-saga/effects';
import {
  getTopRatedMoviesFailure,
  getTopRatedMoviesSuccess,
} from '../features/movies/topRatedMoviesSlice';
import {fetchTopRatedMoviesApi} from '../api/moviesApi';

function* fetchTopRatedMovies() {
  try {
    const data: ApiResponse = yield call(fetchTopRatedMoviesApi);
    yield put(getTopRatedMoviesSuccess(data.results));
  } catch (error) {
    yield put(getTopRatedMoviesFailure());
  }
}

export default function* watchTopRatedMoviesFetch() {
  yield take('topRatedMovies/getTopRatedMovies');
  yield call(fetchTopRatedMovies);
}
