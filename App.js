import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import writeStoryScreen from './screens/writeStoryScreen';
import readStoryScreen from './screens/readStoryScreen';
import { render } from 'react-dom';

export default class App extends React.Component {
render(){
  return (
    <AppContainer />
  )
}

}
  const AppContainer=createAppContainer(TabNavigator);
const TabNavigator = createBottomTabNavigator({
  readStory: {screen: readStoryScreen},
  writeStory: {screen: writeStoryScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "readStory"){
        return(
          <Image
          source={require("./images/read.png")}
          style={{width:40, height:40}}
        />
        )

      }
      else if(routeName === "writeStory"){
        return(
          <Image
          source={require("./images/write.png")}
          style={{width:40, height:40}}
        />)

      }
    }
  })
}
);
