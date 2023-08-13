import {call, put, take} from 'redux-saga/effects';
import {
  getMostPopMoviesFailure,
  getMostPopMoviesSuccess,
} from '../features/movies/mostPopMoviesSlice';
import {fetchMostPopMoviesApi} from '../api/moviesApi';

function* fetchPopMovies() {
  try {
    const data: ApiResponse = yield call(fetchMostPopMoviesApi);
    yield put(getMostPopMoviesSuccess(data.results));
  } catch (error) {
    yield put(getMostPopMoviesFailure());
  }
}

export default function* watchPopMoviesFetch() {
  yield take('mostPopMovies/getMostPopMovies');
  yield call(fetchPopMovies);
}
