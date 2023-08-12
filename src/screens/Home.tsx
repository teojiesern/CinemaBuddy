import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View, ScrollView} from 'react-native';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import TopBoxOffice from '../components/templates/TopBoxOffice';
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

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type movieLists = 'TOP_BOX_OFFICE' | 'TOP_RATED' | 'POPULAR';

export default function Home({navigation}: HomeProps) {
  const [movieList, setMovieList] = useState<movieLists>('TOP_BOX_OFFICE');
  const dispatch = useAppDispatch();

  const topBoxOfficeMovies = useAppSelector(selectTopBoxOfficeMovies);
  const topBoxOfficeMoviesLastWeek = useAppSelector(
    selectTopBoxOfficeLastWeekMovie,
  );

  useEffect(() => {
    dispatch(getTopBoxOfficeLastWeekMovies());
  }, []);

  return (
    <View style={{padding: 10}}>
      <Text style={styles.HeadingText}>What do you want to watch?</Text>
      <TopBoxOfficeLastWeek movies={topBoxOfficeMoviesLastWeek} />
      {/* <Pressable
        onPress={() => navigation.navigate('Details', {id: 'something'})}>
        <Text>Press me</Text>
      </Pressable> */}
      <Pressable onPress={() => dispatch(getPopularMovies())}>
        <Text>me</Text>
      </Pressable>

      {/* <ScrollView horizontal>
        <Text>HEllo</Text>
      </ScrollView> */}

      <TopBoxOffice movies={topBoxOfficeMovies} />
    </View>
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
