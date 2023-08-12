import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../navigation/StackNavigator';
import {useAppDispatch} from '../app/hooks';
import {getPopularMovies} from '../features/movies/moviesSlice';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>Home</Text>
      <Pressable
        onPress={() => navigation.navigate('Details', {id: 'something'})}>
        <Text>Press me</Text>
      </Pressable>
      <Pressable onPress={() => dispatch(getPopularMovies())}>
        <Text>me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
