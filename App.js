import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from './components/goalItem';
import GoalInput from './components/goalInput';
export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    
  }
  const removeGoalHandler = (goalID) =>{
    
  };

  return (
    
    <View style={styles.container}>
      <FlatList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60
  }
});
