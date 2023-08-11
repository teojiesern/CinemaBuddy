import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/StackNavigator';

type WatchListProps = NativeStackScreenProps<RootStackParamList, 'WatchList'>;

export default function WatchList({}: WatchListProps) {
  return (
    <View>
      <Text>WatchList</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
