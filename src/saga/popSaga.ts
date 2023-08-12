import {call, take} from 'redux-saga/effects';
import {fetchNext, fetchPopularMovies} from '../api/moviesApi';

function* fetchSaga(): Generator {
  let allPopMovies: Movies[] = [];
  const data: ApiResponse = yield call(fetchPopularMovies);
  allPopMovies.concat(data.results);
  while (data.next) {
    const nextData: ApiResponse = yield call(fetchNext, data.next);
    allPopMovies.concat(nextData.results);
  }
  console.log(allPopMovies);
}

export default function* watchPopFetch() {
  yield take('movies/getPopularMovies');
  yield call(fetchSaga);
}
