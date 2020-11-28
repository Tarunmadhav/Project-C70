import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class readStoryScreen extends React.Component{
    render(){
        return(
            <View style={StyleSheet.container}>
                <Text>
                    Read Story
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        textAlign:"center",
     textSize:25
    
    }
})