import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const GoalItem = props =>{

    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style = {styles.list} >
            <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    list:{
      padding:10,
      backgroundColor: '#ccc',
      borderBottomColor: 'black',
      borderWidth: 1
    }
  });

export default GoalItem;