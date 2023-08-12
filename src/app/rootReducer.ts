import topBoxOfficeReducer from '../features/movies/topBoxOfficeSlice';
import topBoxOfficeLastWeekReducer from '../features/movies/topBoxOfficeLastWeekSlice';
import mostPopMoviesReducer from '../features/movies/mostPopMoviesSlice';

const rootReducer = {
  topBoxOffice: topBoxOfficeReducer,
  topBoxOfficeLastWeek: topBoxOfficeLastWeekReducer,
  mostPop: mostPopMoviesReducer,
};

export default rootReducer;
