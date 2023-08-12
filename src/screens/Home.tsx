import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View, ScrollView} from 'react-native';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import MovieSlider from '../components/templates/MovieSlider';
import {
  getPopularMovies,
  selectTopBoxOfficeMovies,
} from '../features/movies/topBoxOfficeSlice';
import {RootStackParamList} from '../navigation/StackNavigator';
import {
  getTopBoxOfficeLastWeekMovies,
  selectTopBoxOfficeLastWeekMovie,
} from '../features/movies/topBoxOfficeLastWeekSlice';
import TopBoxOfficeLastWeek from '../components/templates/TopBoxOfficeLastWeek';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type movieLists = 'TOP_BOX_OFFICE' | 'TOP_RATED' | 'POPULAR';

export default function Home({navigation}: HomeProps) {
  const [movieList, setMovieList] = useState<movieLists>('TOP_BOX_OFFICE');
  const dispatch = useAppDispatch();
  const tabBarHeight = useBottomTabBarHeight();
  const insets = useSafeAreaInsets();

  const topBoxOfficeMovies = useAppSelector(selectTopBoxOfficeMovies);
  const topBoxOfficeMoviesLastWeek = useAppSelector(
    selectTopBoxOfficeLastWeekMovie,
  );

  useEffect(() => {
    dispatch(getTopBoxOfficeLastWeekMovies());
    dispatch(getPopularMovies());
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 10,
        marginBottom: tabBarHeight,
        paddingBottom: insets.bottom,
      }}>
      <Text style={styles.HeadingText}>What do you want to watch?</Text>
      <TopBoxOfficeLastWeek movies={topBoxOfficeMoviesLastWeek} />
      {/* <Pressable
        onPress={() => navigation.navigate('Details', {id: 'something'})}>
        <Text>Press me</Text>
      </Pressable> */}

      

      <MovieSlider movies={topBoxOfficeMovies} />
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
});
