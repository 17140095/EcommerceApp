
import { Box, Center, Text, Pressable } from 'native-base';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from 'react-native';
import { Entypo, AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../Colors/colors';
import ProfileScreen from '../Screens/ProfileScreen';
import CartScreen from '../Screens/CartScreen';
import StackNav from './StackNav';

const Tab = createBottomTabNavigator();
const CustomTab = ({children, onPress})=> (
  <Pressable w={70} h={70} bg={Colors.primary} rounded="full" top={-30} shadow={2} onPress={onPress}>{children}</Pressable>
);

const BottomNav = () => {
  return (
    <Tab.Navigator backBehavior = "Main" initialRouteName="Main" screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {...styles.tab},
        headerShown: false,
        tabBarHideOnKeyboard: true,
    }} >
      <Tab.Screen name="Main" component={StackNav} options={{
        tabBarIcon: ({focused})=>(
          <Center>
            { focused ? <Entypo name="home" size={24} color={Colors.primary}/>
              : <AntDesign name="home" size={24} color={Colors.black} />
            }
          </Center>
        )
      }} />
      <Tab.Screen name="Cart" component={CartScreen} options={{
        tabBarButton: (props)=> <CustomTab {...props} />,
        tabBarIcon: ({focused})=>(
          <Center>
            { focused ? <FontAwesome5 name="shopping-basket" size={24} color={Colors.secondary}/>
              : <MaterialCommunityIcons name="shopping-outline" size={24} color={Colors.secondary} />
            }
          </Center>
        )
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({focused})=>(
          <Center>
            { focused ? <FontAwesome name="user" size={24} color={Colors.primary}/>
              : <AntDesign name="user" size={24} color={Colors.black} />
            }
          </Center>
        )
      }} />

    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({
    tab: {
      elevation: 0,
      backgroundColor: Colors.white,
      height: 60,

    },
})


export default BottomNav