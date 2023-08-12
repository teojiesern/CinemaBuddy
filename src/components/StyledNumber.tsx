import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function StyledNumber({number}: {number: number}) {
  return <Text style={styles.number}>{number + 1}</Text>;
}

const styles = StyleSheet.create({
  number: {
    position: 'absolute',
    bottom: -10,
    left: -15,
    fontSize: 70,
    fontWeight: 'bold',
    zIndex: 999,
    color: '#242A32',
    textShadowColor: '#0296E5',
    textShadowRadius: 30,
  },
});
