import {call, put, take} from 'redux-saga/effects';
import {
  getMostPopSeriesFailure,
  getMostPopSeriesSuccess,
} from '../features/movies/mostPopSeriesSlice';
import {fetchMostPopSeriesApi} from '../api/moviesApi';

function* fetchPopSeries() {
  try {
    const data: ApiResponse = yield call(fetchMostPopSeriesApi);
    yield put(getMostPopSeriesSuccess(data.results));
  } catch (error) {
    yield put(getMostPopSeriesFailure());
  }
}

export default function* watchPopSeriesFetch() {
  yield take('mostPopSeries/getMostPopSeries');
  yield call(fetchPopSeries);
}
