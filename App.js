import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';

export default function App() {
  
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }
  const addGoalHandler = () => {
    //setCourseGoals([...courseGoals, enteredGoal]);
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]);
  }
  return (
    <View style={styles.container}>
      <View style ={styles.layout}>
        <TextInput placeholder = "course goal" style = {styles.input} onChangeText = {goalInputHandler} value = {enteredGoal}>

        </TextInput>
        <Button title = "Add Me" onPress = {addGoalHandler}/>
      </View>
      <FlatList data={courseGoals} renderItem = {itemData =>(
        <View style = {styles.list}>
          <Text>{itemData.item.value}</Text>
        </View>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60
  },
  input:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%'
  },
  layout: {
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between'
  },
  list:{
    padding:10,
    backgroundColor: 'gray',
    borderBottomColor: 'black',
    borderWidth: 1
  }
});
