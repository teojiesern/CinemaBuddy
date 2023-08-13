import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/StackNavigator';
import ImageCard from '../components/ImageCard';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

// rating, title, runtime, language, genres, releaseDate, plot

const MovieDetails = ({
  route: {
    params: {movie},
  },
}: DetailsProps) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.infoContainer}>
        <ImageCard primaryImage={movie.primaryImage} height={220} width={140} />
        <View>
          <Text style={styles.titleText}>{movie.titleText.text}</Text>
          <Text style={styles.titleText}>Runtime: {movie.runtime.seconds}</Text>
          <Text style={styles.titleText}>
            Language: {movie.plot.language.id}
          </Text>
          <Text style={styles.titleText}>
            Rating: {movie.ratingsSummary.aggregateRating}
          </Text>
        </View>
      </View>
      {/* <Text>MovieDetailed {movie.id}</Text> */}
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  PreviewImage: {
    width: '100%',
    height: 300,
  },
  infoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingTop: 10,
    gap: 20,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});
