import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";

export default function App(): JSX.Element {
  const Tab = createBottomTabNavigator();
  return <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
    </Tab.Navigator>
  </NavigationContainer>;
}

