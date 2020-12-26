import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const startScreen = props =>{
    return (
        <View style = {styles.textContainer}>
            <Text>Welcome to Fooder!</Text>
            <Text>Type in your resturants, tap to remove, and we'll choose a place for you to eat!</Text>
            <View style = {styles.start}><Button title = "Find Food!" onPress = {props.setStart(true)}/></View>
        </View>
    );
};

const styles = StyleSheet.create({
    textContainer:{
        justifyContent: 'center',
        alignItems: 'center', 
        padding: 20
    },
    start:{
        padding: 20
    }
});

export default startScreen;

