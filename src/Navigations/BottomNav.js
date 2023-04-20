
import { Box } from 'native-base';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../Screens/HomeScreen';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator backBehavior = "main" initialRouteName="Main" screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {...style.tab},
        headerShown: false,
        tabBarHideOnKeyboard: true,
    }} >
      <Tab.Screen name="Main" component={HomeScreen} />

    </Tab.Navigator>
  )
}
const style = StyleSheet.create({
    tab: {

    },
})


export default BottomNav