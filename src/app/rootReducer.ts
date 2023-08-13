import topBoxOfficeReducer from '../features/movies/topBoxOfficeSlice';
import topBoxOfficeLastWeekReducer from '../features/movies/topBoxOfficeLastWeekSlice';
import mostPopMoviesReducer from '../features/movies/mostPopMoviesSlice';
import mostPopSeriesReducer from '../features/movies/mostPopSeriesSlice';
import topRatedMoviesReducer from '../features/movies/topRatedMoviesSlice';
import savedMoviesReducer from '../features/movies/savedMoviesSlice';

const rootReducer = {
  topBoxOffice: topBoxOfficeReducer,
  topBoxOfficeLastWeek: topBoxOfficeLastWeekReducer,
  mostPopMovies: mostPopMoviesReducer,
  mostPopSeries: mostPopSeriesReducer,
  topRatedMovies: topRatedMoviesReducer,
  savedMovies: savedMoviesReducer,
};

export default rootReducer;
