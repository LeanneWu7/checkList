import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const header = props =>{
    return (
        <View style = {styles.header}>
            <Text style = {styles.text}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text:{
        fontSize: 60,
        color: 'white'
    },
    header:{
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2, 
        backgroundColor: 'red'
    }
});

export default header;