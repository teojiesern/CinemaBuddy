import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import WatchList from '../screens/WatchList';
import Icon from 'react-native-vector-icons/Feather';
import {RootStackParamList} from './StackNavigator';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function TabNavigator(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: '#242A32'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={22} color={color} />,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {fontSize: 12},
        }}
      />
      <Tab.Screen
        name="WatchList"
        component={WatchList}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="bookmark" size={22} color={color} />
          ),
          tabBarLabelStyle: {fontSize: 12},
        }}
      />
    </Tab.Navigator>
  );
}
