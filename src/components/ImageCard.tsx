import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

type Props = {
  primaryImage: primaryImage;
};

export default function ImageCard({primaryImage: {height, width, url}}: Props) {
  return (
    <View>
      <Image
        source={{uri: url}}
        width={width}
        height={height}
        style={styles.Image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {
    width: 120,
    height: 170,
    borderRadius: 10,
  },
});
