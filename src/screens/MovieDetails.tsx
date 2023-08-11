import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/StackNavigator';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const MovieDetails = ({
  navigation,
  route: {
    params: {id},
  },
}: DetailsProps) => {
  return (
    <View>
      <Text>MovieDetailed</Text>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({});
