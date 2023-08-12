import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import StackNavigator from '../navigation/StackNavigator';
import store from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#242A32',
  },
};

StatusBar.setBackgroundColor('#242A32');

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <SafeAreaProvider>
          <StackNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
