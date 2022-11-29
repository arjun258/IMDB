
import { StyleSheet, Text, View } from "react-native";
import FirstScreen from './screens/firstScreen';
import popular from './screens/popular';
import recommended from './screens/recommended';
import {createAppContainer} from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

const AppTopNavigator = createMaterialTopTabNavigator({
  recommendedMovies:{
    screen:recommended,
    navigationOptions:{
      tabBarLabel:'Recommended',
      tabBarOptions:{
        tabStyle:{backgroundColor:'white'},
        labelStyle:{color:'black'}
      }
    }
  },


 popularMovies:{
    screen:popular,
    navigationOptions:{
      tabBarLabel:'popular',
      tabBarOptions:{
        tabStyle:{backgroundColor:'white'},
        labelStyle:{color:'black'}
      }
    }
  }

})
const AppStackNavigator = createStackNavigator({
  home:{screen:FirstScreen, 
  navigationOptions:{headerShown:false}},
  AppTop:{screen:AppTopNavigator}
} ,{
  initialRouteName:'home'
})
const AppContainer=createAppContainer(AppStackNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
