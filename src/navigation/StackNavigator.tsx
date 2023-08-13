import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieDetails from '../screens/MovieDetails';
import TabNavigator from './TabNavigator';
import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export type RootStackParamList = {
  Main: undefined;
  Details: {movie: Movies};
  Home: undefined;
  WatchList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const saveButton = () => {
  return (
    <View>
      <Pressable>
        <Icon name="bookmark" color="white" size={22} />
      </Pressable>
    </View>
  );
};

export default function StackNavigator(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {backgroundColor: '#242A32'},
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerRight: saveButton,
      }}>
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Details" component={MovieDetails} />
    </Stack.Navigator>
  );
}
