import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/StackNavigator';
import {useAppSelector} from '../app/hooks';
import {selectSavedMovies} from '../features/movies/savedMoviesSlice';
import ImageCard from '../components/ImageCard';
import EmptySvg from '../assets/empty.svg';

type WatchListProps = NativeStackScreenProps<RootStackParamList, 'WatchList'>;

export default function WatchList({navigation}: WatchListProps) {
  const savedMovies = useAppSelector(selectSavedMovies);
  const renderItem = ({item}: {item: Movies}) => {
    const runTime = item.runtime.seconds / 60;
    return (
      <Pressable onPress={() => navigation.navigate('Details', {movie: item})}>
        <View style={styles.savedMovieContainer}>
          <ImageCard primaryImage={item.primaryImage} />
          <View style={{width: 200, gap: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.titleText}>{item.titleText.text}</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.indicatorText}>Runtime: </Text>
              <Text style={styles.valueText}>{runTime} Minutes</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.indicatorText}>Language: </Text>
              <Text style={styles.valueText}>{item.plot.language.id}</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.indicatorText}>Rating ⭐: </Text>
              <Text style={styles.valueText}>
                {item.ratingsSummary.aggregateRating}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  const displaySavedMovies =
    savedMovies.length === 0 ? (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <EmptySvg width={100} height={100} />
        <Text style={{color: "white", fontSize: 15}}>You have not saved any Movies</Text>
      </View>
    ) : (
      <View>
        <FlatList
          data={savedMovies}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  return (
    <View style={styles.watchListContainer}>
      <Text style={styles.headingText}>Your Saved Movies</Text>
      {displaySavedMovies}
    </View>
  );
}

const styles = StyleSheet.create({
  watchListContainer: {
    paddingHorizontal: 30,
    paddingTop: 10,
    flex: 1,
  },
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  savedMovieContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    gap: 20,
  },
  titleText: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  indicatorText: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '600',
  },
  valueText: {
    color: 'white',
    opacity: 0.6,
    fontSize: 15,
    fontWeight: '300',
  },
});
