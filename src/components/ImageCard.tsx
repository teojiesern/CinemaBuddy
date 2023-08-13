import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

type Props = {
  primaryImage: primaryImage;
  height?: number;
  width?: number;
};

export default function ImageCard({primaryImage, width, height}: Props) {
  return (
    <View>
      {primaryImage ? (
        <Image
          source={{uri: primaryImage.url}}
          width={primaryImage.width}
          height={primaryImage.height}
          style={[
            styles.Image,
            {width: width ? width : 120, height: height ? height : 170},
          ]}
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
    borderRadius: 10,
  },
});
