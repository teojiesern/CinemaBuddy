import topBoxOfficeSaga from './topBoxOfficeSaga';
import topBoxOfficeLastWeekSaga from './topBoxOfficeLastWeekSaga';
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([topBoxOfficeSaga(), topBoxOfficeLastWeekSaga()]);
}
