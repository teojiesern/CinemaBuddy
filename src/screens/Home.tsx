import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../navigation/StackNavigator';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  return (
    <View>
      <Text>Home</Text>
      <Pressable
        onPress={() => navigation.navigate('Details', {id: 'something'})}>
        <Text>Press me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
