import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

type Props = {
  primaryImage: primaryImage;
};

export default function ImageCard({primaryImage}: Props) {
  return (
    <View>
      {primaryImage ? (
        <Image
          source={{uri: primaryImage.url}}
          width={primaryImage.width}
          height={primaryImage.height}
          style={styles.Image}
        />
      ) : (
        <Image
          source={require('../assets/noImg.jpg')}
          width={318}
          height={450}
          style={styles.Image}
        />
      )}
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
