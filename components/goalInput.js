import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal} from 'react-native';

const GoalInput = props =>{
   //const [enteredGoal, setEnteredGoal] = useState('');
      
    return (
        <View style ={styles.layout}>
          <TextInput>

          </TextInput>
          <View style = {styles.buttons}> 
        
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