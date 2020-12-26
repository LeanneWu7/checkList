import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal} from 'react-native';

const GoalInput = props =>{
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }
    const addGoalHandler = () =>{
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    };
    const cancelGoalHandler = () =>{
      setEnteredGoal('');
    };
      
    return (
        <View style ={styles.layout}>
          <TextInput placeholder = "course goal" style = {styles.input} onChangeText = {goalInputHandler} value = {enteredGoal}>

          </TextInput>
          <View style = {styles.buttons}> 
            <View style = {styles.button}> <Button title = "Add Me" onPress = {addGoalHandler}/> </View>
            <View style = {styles.button}> <Button color = "red" title = "Cancel" onPress = {cancelGoalHandler}/> </View>
          </View>
          
        </View>
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
    },
    buttons:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '15%',
      alignContent: 'space-between'
    },
    button:{
      width: '40%'
    }
  });

export default GoalInput;