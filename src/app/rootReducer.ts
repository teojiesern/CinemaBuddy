import topBoxOfficeReducer from '../features/movies/topBoxOfficeSlice';
import topBoxOfficeLastWeekReducer from '../features/movies/topBoxOfficeLastWeekSlice';

const rootReducer = {
  topBoxOffice: topBoxOfficeReducer,
  topBoxOfficeLastWeek: topBoxOfficeLastWeekReducer,
};

export default rootReducer;
