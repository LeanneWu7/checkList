import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal} from 'react-native';

const GoalInput = props =>{
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }
      
    return (
      //<Modal visible = {props.visible} animationType="slide"> 
        <View style ={styles.layout}>
          <TextInput placeholder = "course goal" style = {styles.input} onChangeText = {goalInputHandler} value = {enteredGoal}>

          </TextInput>
          <Button title = "Add Me" onPress = {props.onAddGoal.bind(this, enteredGoal)}/>
        </View>
      //</Modal>
    );
};

const styles = StyleSheet.create({
  layout: {
      flexDirection: 'row',
      alignContent: 'space-between',
      justifyContent: 'space-between'
      //flex: 1
    },
    input:{
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      width: '80%'
    }
  });

export default GoalInput;