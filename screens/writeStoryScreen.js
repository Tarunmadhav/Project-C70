import React from 'react';
import {Header} from "react-native-elements";
import { StyleSheet, Text, View,Image,TextInput,Modal,KeyboardAvoidingView } from 'react-native';

export default class writeStoryScreen extends React.Component{
    render(){
        return(
          <View  style={{flex:1}}>
              <View>
                 <View>
                  <TextInput
        style={styles.inputBox}
        placeholder="Name"
        multiline={true}
        onChangeText={(text)=>{this.setState({address:text})}}/>
        <TextInput
        style={styles.inputBox}
        placeholder="AuthorName"
        multiline={true}
        onChangeText={(text)=>{this.setState({address:text})}}/>
        <TextInput
        style={styles.inputBox}
        placeholder="Story"
        multiline={true}
        onChangeText={(text)=>{this.setState({address:text})}}/> 
              </View>
              <View>
                 <TouchableOpacity style={styles.Button}
        onPress={()=>this.setState({"isModalVisible":true})}>
            <Text>
                SUBMIT
            </Text>  
              </View>
          
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