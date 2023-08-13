import topBoxOfficeSaga from './topBoxOfficeSaga';
import topBoxOfficeLastWeekSaga from './topBoxOfficeLastWeekSaga';
import mostPopMoviesSaga from './mostPopMoviesSaga';
import {all} from 'redux-saga/effects';
import mostPopSeriesSaga from './mostPopSeriesSaga';
import TopRatedMoviesSaga from './topRatedMoviesSaga';
import asyncStorageSaveSaga from './asyncStorageSaveSaga';
import asyncStorageUnsaveSaga from './asyncStorageUnsaveSaga';
import getMoviesSaga from './asyncStorageGetMoviesSaga';

export default function* rootSaga() {
  yield all([
    topBoxOfficeSaga(),
    topBoxOfficeLastWeekSaga(),
    mostPopMoviesSaga(),
    mostPopSeriesSaga(),
    TopRatedMoviesSaga(),
    asyncStorageSaveSaga(),
    asyncStorageUnsaveSaga(),
    getMoviesSaga(),
  ]);
}
