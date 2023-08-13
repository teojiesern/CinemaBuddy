import {call, put, take} from 'redux-saga/effects';
import {
  getTopBoxOfficeLastWeekMoviesFailure,
  getTopBoxOfficeLastWeekMoviesSuccess,
} from '../features/movies/topBoxOfficeLastWeekSlice';
import {fetchTopBoxOfficeLastWeekMoviesApi} from '../api/moviesApi';

function* fetchSaga() {
  try {
    const data: ApiResponse = yield call(fetchTopBoxOfficeLastWeekMoviesApi);
    yield put(getTopBoxOfficeLastWeekMoviesSuccess(data.results));
  } catch (error) {
    yield put(getTopBoxOfficeLastWeekMoviesFailure());
  }
}

export default function* watchTopBoxOfficeLastWeekFetch() {
  yield take('topBoxOfficeLastWeek/getTopBoxOfficeLastWeekMovies');
  yield call(fetchSaga);
}
