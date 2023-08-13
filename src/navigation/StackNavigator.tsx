import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieDetails from '../screens/MovieDetails';
import TabNavigator from './TabNavigator';
import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {
  callSaveMovie,
  callUnsaveMovie,
  selectSavedMovies,
} from '../features/movies/savedMoviesSlice';

export type RootStackParamList = {
  Main: undefined;
  Details: {movie: Movies};
  Home: undefined;
  WatchList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const saveButton = (movie: Movies) => {
  const savedMovies = useAppSelector(selectSavedMovies);
  const dispatch = useAppDispatch();
  const isMovieSaved = savedMovies.some(
    savedMovie => savedMovie.id === movie.id,
  );

  const iconName = isMovieSaved ? 'bookmark' : 'bookmark-o';

  return (
    <View>
      <Pressable
        onPress={() =>
          isMovieSaved
            ? dispatch(callUnsaveMovie(movie))
            : dispatch(callSaveMovie(movie))
        }>
        <Icon name={iconName} color="white" size={22} />
      </Pressable>
    </View>
  );
};

export default function StackNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {backgroundColor: '#242A32'},
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={MovieDetails}
        options={({route}) => ({
          headerRight: () => saveButton(route.params.movie),
        })}
      />
    </Stack.Navigator>
  );
}
