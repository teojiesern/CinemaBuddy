import topBoxOfficeReducer from '../features/movies/topBoxOfficeSlice';
import topBoxOfficeLastWeekReducer from '../features/movies/topBoxOfficeLastWeekSlice';
import mostPopMoviesReducer from '../features/movies/mostPopMoviesSlice';
import mostPopSeriesReducer from '../features/movies/mostPopSeriesSlice';
import topRatedMoviesReducer from '../features/movies/topRatedMoviesSlice';

const rootReducer = {
  topBoxOffice: topBoxOfficeReducer,
  topBoxOfficeLastWeek: topBoxOfficeLastWeekReducer,
  mostPopMovies: mostPopMoviesReducer,
  mostPopSeries: mostPopSeriesReducer,
  topRatedMovies: topRatedMoviesReducer,
};

export default rootReducer;
