import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetails from '../screens/MovieDetails';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
  Main: undefined;
  Details: {id: string};
  Home: undefined;
  WatchList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator(): JSX.Element {
  return (
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Details" component={MovieDetails} />
      </Stack.Navigator>
  );
}
