import React from 'react';
import {Header} from "react-native-elements";
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';

export default class writeStoryScreen extends React.Component(){
    render(){
        return(
          <View>
              <Header style={styles.Header}>
              Bobby the Bear and His Missing Dinner
              </Header>
              <Text>
              Bobby the Bear is sitting down to enjoy his dinner when his friend, Fred the Fox, stops by to say hello. When Bobby the Bear returns to eat his meal, he discovers it is missing. Bobby the Bear, with the help of his friends, searches for his dinner. The story takes an unexpected twist, and Bobby the Bear helps a friend learn the importance of not stealing and being honest.
              </Text>
          </View>  
        )
    }
}


const styles = StyleSheet.create({
    Header:{
        textAlign:"center",
     textSize:40
    
    },
    text:{
        textSize:20,
        textAlign:"justify",
        flex:1
    }
})