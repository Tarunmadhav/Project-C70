import React from 'react';
import {Header} from "react-native-elements";
import { StyleSheet, Text, View,Image,TextInput,Modal,KeyboardAvoidingView,TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';

export default class writeStoryScreen extends React.Component{
  constructor(){
    super();
    this.state={
TitleOfTheStory:"",
AuthorOfTheStory:"",
WriteStory:""
    }
  }
    render(){
        return(
<View style={{flex:1}}>
<TextInput
        style={styles.inputBox}
        placeholder="Title Of The Story"
        onChangeText={(text)=>{this.setState({TitleOfTheStory:text})}}/>
        <TextInput
        style={styles.inputBox}
        placeholder="Author Of The Story"
        maxLength={8}
        onChangeText={(text)=>{this.setState({AuthorOfTheStory:text})}}/>
        <TextInput
        style={styles.inputBox}
        placeholder="Write Story"
        maxLength={8}
        onChangeText={(text)=>{this.setState({WriteStory:text})}}/>
        <View>
          <TouchableOpacity onPress={()=>Alert.alert("Story Submitted")}>
            <Text>
            Submit
          </Text> 
          </TouchableOpacity>
         
        </View>
</View>   
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:20
    },
    Button:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    text:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    })