import {call, put, take} from 'redux-saga/effects';
import {fetchTopBoxOfficeMoviesApi} from '../api/moviesApi';
import {
  getTopBoxOfficeMoviesFailure,
  getTopBoxOfficeMoviesSuccess,
} from '../features/movies/topBoxOfficeSlice';

function* fetchSaga() {
  try {
    const data: ApiResponse = yield call(fetchTopBoxOfficeMoviesApi);
    yield put(getTopBoxOfficeMoviesSuccess(data.results));
  } catch (error) {
    yield put(getTopBoxOfficeMoviesFailure());
  }
}

export default function* watchTopBoxOfficeFetch() {
  yield take('topBoxOffice/getTopBoxOfficeMovies');
  yield call(fetchSaga);
}
