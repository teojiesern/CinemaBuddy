import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/StackNavigator';
import ImageCard from '../components/ImageCard';
import GenreButton from '../components/GenreButton';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;
const MovieDetails = ({
  route: {
    params: {movie},
  },
}: DetailsProps) => {
  const runTime = movie.runtime.seconds / 60;

  const renderItem = ({item: {text}}: {item: genre}) => (
    <GenreButton genre={text} />
  );
  return (
    <View style={{flex: 1, paddingHorizontal: 30, gap: 10}}>
      <View style={styles.infoContainer}>
        <ImageCard primaryImage={movie.primaryImage} height={220} width={140} />
        <View style={{width: 200, gap: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titleText}>{movie.titleText.text}</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.indicatorText}>Runtime: </Text>
            <Text style={styles.valueText}>{runTime} Minutes</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.indicatorText}>Language: </Text>
            <Text style={styles.valueText}>{movie.plot.language.id}</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.indicatorText}>Rating ⭐: </Text>
            <Text style={styles.valueText}>
              {movie.ratingsSummary.aggregateRating}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.subInfoContainer}>
        <View>
          <Text style={styles.subInfoTitle}>Release Date</Text>
          <Text style={styles.releaseDate}>
            {movie.releaseDate.day} - {movie.releaseDate.month} -{' '}
            {movie.releaseDate.year}
          </Text>
        </View>

        <View>
          <Text style={styles.subInfoTitle}>Genre</Text>
          <View style={{flexDirection: 'row', width: 220}}>
            <FlatList
              data={movie.genres.genres}
              renderItem={renderItem}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          </View>
        </View>
      </View>

      <View style={styles.synopsis}>
        <Text style={styles.synopsisText}>Synopsis</Text>
        <Text style={styles.synopsisContent}>
          {movie.plot.plotText.plainText}
        </Text>
      </View>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  infoContainer: {
    // flex: 3,
    flexDirection: 'row',
    paddingTop: 10,
    gap: 20,
  },
  subInfoContainer: {
    // flex: 5,
    paddingVertical: 10,
    borderColor: 'grey',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    gap: 20,
  },
  titleText: {
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  indicatorText: {
    color: 'grey',
    fontSize: 20,
    fontWeight: '600',
  },
  valueText: {
    color: 'white',
    opacity: 0.6,
    fontSize: 20,
    fontWeight: '300',
  },
  subInfoTitle: {
    color: 'white',
    fontSize: 20,
  },
  releaseDate: {
    color: '#BCBCBC',
    fontSize: 17,
  },
  synopsis: {
    alignItems: 'center',
  },
  synopsisText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  synopsisContent: {
    fontSize: 18,
    color: 'white',
    opacity: 0.6,
  },
});
