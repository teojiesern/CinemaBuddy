import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ImageCard from '../ImageCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export type Props = {
  movies: Movies[];
};

export default function TopBoxOffice({movies}: Props) {
  const insets = useSafeAreaInsets();

  const renderItem = ({item}: {item: Movies}) => {
    return (
      <View style={{margin: 6}}>
        <ImageCard primaryImage={item.primaryImage} />
      </View>
    );
  };
  return (
    <View style={{paddingBottom: insets.bottom}}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        // horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({});
