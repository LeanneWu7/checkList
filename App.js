import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import AddScreen from './screens/addScreen';
import StartScreen from './screens/startScreen';
import Header from './components/header';

export default function App() {

  const [start, setStart] = useState(false);
  const startGame = val => {
    setStart(val);
  };
  let screen = <StartScreen setStart = {startGame}/>
  // if(start){
  //   screen = <AddScreen />
  // }
  return (
    
    <View>
      <Header title = "FOODER"></Header>
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({

});
