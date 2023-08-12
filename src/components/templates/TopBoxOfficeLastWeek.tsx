import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import {Props} from './MovieSlider';
import ImageCard from '../ImageCard';
import StyledNumber from '../StyledNumber';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function TopBoxOfficeLastWeek({movies}: Props) {
  const renderItem = ({item, index}: {item: Movies; index: number}) => {
    return (
      <View style={{position: 'relative', marginTop: 10, marginHorizontal: 10}}>
        <ImageCard primaryImage={item.primaryImage} />
        <StyledNumber number={index} />
      </View>
    );
  };
  return (
    <SafeAreaView style={{height: 200}}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
