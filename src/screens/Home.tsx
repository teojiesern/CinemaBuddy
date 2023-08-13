import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import MovieSlider from '../components/templates/MovieSlider';
import TopBoxOfficeLastWeek from '../components/templates/TopBoxOfficeLastWeek';
import {
  getTopBoxOfficeLastWeekMovies,
  selectTopBoxOfficeLastWeekMovie,
} from '../features/movies/topBoxOfficeLastWeekSlice';
import {
  getTopBoxOfficeMovies,
  selectTopBoxOfficeMovies,
} from '../features/movies/topBoxOfficeSlice';
import {RootStackParamList} from '../navigation/StackNavigator';
import {
  getMostPopMovies,
  selectMostPopMovies,
} from '../features/movies/mostPopMoviesSlice';
import {
  getMostPopSeries,
  selectMostPopSeries,
} from '../features/movies/mostPopSeriesSlice';
import {
  getTopRatedMovies,
  selectTopRatedMovies,
} from '../features/movies/topRatedMoviesSlice';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type movieLists =
  | 'TOP_BOX_OFFICE'
  | 'TOP_RATED'
  | 'POPULAR_MOVIES'
  | 'POPULAR_SERIES';

export default function Home({navigation}: HomeProps) {
  const [movieList, setMovieList] = useState<movieLists>('TOP_BOX_OFFICE');
  const dispatch = useAppDispatch();

  const topBoxOfficeMovies = useAppSelector(selectTopBoxOfficeMovies);
  const topBoxOfficeMoviesLastWeek = useAppSelector(
    selectTopBoxOfficeLastWeekMovie,
  );
  const topPopularMovies = useAppSelector(selectMostPopMovies);
  const topPopularSeries = useAppSelector(selectMostPopSeries);
  const topRatedMovies = useAppSelector(selectTopRatedMovies);

  const moviePressHandler = (movie: Movies) => {
    navigation.navigate('Details', {movie});
  };

  useEffect(() => {
    dispatch(getTopBoxOfficeLastWeekMovies());
    dispatch(getTopBoxOfficeMovies());
    dispatch(getMostPopMovies());
    dispatch(getMostPopSeries());
    dispatch(getTopRatedMovies());
  }, []);

  let MoviesToDisplay = null;
  switch (movieList) {
    case 'TOP_BOX_OFFICE':
      MoviesToDisplay = (
        <MovieSlider
          movies={topBoxOfficeMovies}
          pressHandler={moviePressHandler}
        />
      );
      break;
    case 'POPULAR_MOVIES':
      MoviesToDisplay = (
        <MovieSlider
          movies={topPopularMovies}
          pressHandler={moviePressHandler}
        />
      );
      break;
    case 'POPULAR_SERIES':
      MoviesToDisplay = (
        <MovieSlider
          movies={topPopularSeries}
          pressHandler={moviePressHandler}
        />
      );
      break;
    case 'TOP_RATED':
      MoviesToDisplay = (
        <MovieSlider movies={topRatedMovies} pressHandler={moviePressHandler} />
      );
      break;
    default:
      break;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 10,
      }}>
      <Text style={styles.HeadingText}>What do you want to watch?</Text>
      <TopBoxOfficeLastWeek
        movies={topBoxOfficeMoviesLastWeek}
        pressHandler={moviePressHandler}
      />
      <ScrollView
        style={styles.ScrollContainer}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
          alignItems: 'center',
          paddingHorizontal: 10,
          gap: 20,
        }}>
        <Pressable
          style={[
            movieList === 'TOP_BOX_OFFICE' && styles.Selected,
            {paddingBottom: 10},
          ]}
          onPress={() => setMovieList('TOP_BOX_OFFICE')}>
          <Text style={styles.NavigateText}>Top Box Office</Text>
        </Pressable>
        <Pressable
          style={[
            movieList === 'POPULAR_MOVIES' && styles.Selected,
            {paddingBottom: 10},
          ]}
          onPress={() => setMovieList('POPULAR_MOVIES')}>
          <Text style={styles.NavigateText}>Popular Movies</Text>
        </Pressable>
        <Pressable
          style={[
            movieList === 'POPULAR_SERIES' && styles.Selected,
            {paddingBottom: 10},
          ]}
          onPress={() => setMovieList('POPULAR_SERIES')}>
          <Text style={styles.NavigateText}>Popular Series</Text>
        </Pressable>
        <Pressable
          style={[
            movieList === 'TOP_RATED' && styles.Selected,
            {paddingBottom: 10},
          ]}
          onPress={() => setMovieList('TOP_RATED')}>
          <Text style={styles.NavigateText}>Top Rated</Text>
        </Pressable>
      </ScrollView>

      {MoviesToDisplay}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  HeadingText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  ScrollContainer: {
    flex: 1,
  },
  NavigateText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
  Selected: {
    borderBottomWidth: 3,
    borderBottomColor: 'grey',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
});
