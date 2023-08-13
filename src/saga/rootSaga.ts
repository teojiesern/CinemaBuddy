import topBoxOfficeSaga from './topBoxOfficeSaga';
import topBoxOfficeLastWeekSaga from './topBoxOfficeLastWeekSaga';
import mostPopMoviesSaga from './mostPopMoviesSaga';
import {all} from 'redux-saga/effects';
import mostPopSeriesSaga from './mostPopSeriesSaga';
import TopRatedMoviesSaga from './topRatedMoviesSaga';

export default function* rootSaga() {
  yield all([
    topBoxOfficeSaga(),
    topBoxOfficeLastWeekSaga(),
    mostPopMoviesSaga(),
    mostPopSeriesSaga(),
    TopRatedMoviesSaga(),
  ]);
}
