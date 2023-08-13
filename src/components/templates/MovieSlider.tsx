import React from 'react';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import ImageCard from '../ImageCard';

export type Props = {
  movies: Movies[];
  pressHandler: (id: Movies) => void;
};

export default function MovieSlider({movies, pressHandler}: Props) {
  const renderItem = ({item}: {item: Movies}) => {
    return (
      <View style={{margin: 6}}>
        <Pressable onPress={() => pressHandler(item)}>
          <ImageCard primaryImage={item.primaryImage} />
        </Pressable>
      </View>
    );
  };
  return (
    <View style={{flex: 5}}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
