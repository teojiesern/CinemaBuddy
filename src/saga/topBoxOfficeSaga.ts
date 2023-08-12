import {call, put, take} from 'redux-saga/effects';
import {fetchTopBoxOfficeMovies} from '../api/moviesApi';
import {
  getPopularMoviesFailure,
  getPopularMoviesSuccess,
} from '../features/movies/topBoxOfficeSlice';

function* fetchSaga(): Generator {
  try {
    const data: ApiResponse = yield call(fetchTopBoxOfficeMovies);
    yield put(getPopularMoviesSuccess(data.results));
  } catch (error) {
    yield put(getPopularMoviesFailure());
  }
}

export default function* watchPopFetch() {
  yield take('topBoxOffice/getPopularMovies');
  yield call(fetchSaga);
}