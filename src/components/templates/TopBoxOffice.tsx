import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ImageCard from '../ImageCard';

export type Props = {
  movies: Movies[];
};

export default function TopBoxOffice({movies}: Props) {
  const renderItem = ({item}: {item: Movies}) => {
    return (
      <View style={{margin: 6}}>
        <ImageCard primaryImage={item.primaryImage} />
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={movies}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
