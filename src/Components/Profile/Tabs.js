import { View, Text } from 'native-base'
import { SceneMap, TabBar, TabView} from "react-native-tab-view";
import { useState } from 'react';
import Profile from './Profile';
import Orders from './Orders';
import Colors from '../../Colors/colors';
import { useWindowDimensions, StyleSheet } from 'react-native';


const renderScene = SceneMap({
 first: Profile,
 second: Orders,
})

export default Tabs=()=> {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first", title: "PROFILE"
    },
    {
      key: "second", title: "ORDERS"
    }
  ]);

  const renderTabBar = (props)=>(
    <TabBar {...props} tabStyle={styles.tabStyle} indicatorStyle={{backgroundColor: Colors.black}} 
    activeColor={Colors.primary} inactiveColor={Colors.primaryLight}
      renderLabel={({route, color})=>(
        <Text style={{color, ...styles.text}}>{route.title}</Text>
      )}
    />
  )

  return (
      <TabView 
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
      />
  )
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: Colors.secondary,
  },
  text:{
    fontWeight: 'bold',
    fontSize: 14,
  },
})