import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WatchList from '../screens/WatchList';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
  Main: undefined;
  Details: {id: string};
  Home: undefined;
  WatchList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Details" component={WatchList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
