import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function GenreButton({genre}: {genre: string}) {
  return (
    <View style={styles.genreButtonContainer}>
      <Text style={{color: 'grey'}}>{genre}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  genreButtonContainer: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#2b2b2b',
    marginHorizontal: 3,
    borderRadius: 20,
    borderColor: '#BCBCBC',
    borderWidth: 1,
  },
});
