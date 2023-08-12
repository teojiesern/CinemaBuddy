import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import {Props} from './TopBoxOffice';
import ImageCard from '../ImageCard';

export default function TopBoxOfficeLastWeek({movies}: Props) {
  const renderItem = ({item, index}: {item: Movies, index: number}) => {
    return (
      <View>
        <ImageCard primaryImage={item.primaryImage} />
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
