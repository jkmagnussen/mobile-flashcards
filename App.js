
import React, { useEffect} from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { setLocalNotification } from './src/utils/helper'

import { store } from './src/store';
import { Provider } from 'react-redux';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import Deck from './src/pages/Deck'
import Home from './src/pages/Home'
import AddCard from './src/pages/AddCard'
import AddDeck from './src/pages/AddDeck'
import QuizPage from './src/pages/QuizPage'
import { AppLoading } from 'expo'

const Stack = createStackNavigator()

export default function App(){
 useEffect(() => {
    const loadFont = async()=>{
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
    }
   loadFont()
   let tomorrow = new Date();
    console.log(tomorrow)
            // tomorrow.setDate(tomorrow.getDate() + 1);
            // tomorrow.setHours(11);
            // tomorrow.setMinutes(0);
            tomorrow.setSeconds(10)
            console.log(tomorrow)
   setLocalNotification()
 }, [])
  
  return (
    <Provider store={store}>

    <NavigationContainer>
      <Stack.Navigator style={styles.container}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Deck" component={Deck} />
          <Stack.Screen name="AddCard" component={AddCard} />
          <Stack.Screen name="AddDeck" component={AddDeck} />
          <Stack.Screen name="QuizPage" component={QuizPage} />
      </Stack.Navigator>
      </NavigationContainer>

      </Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
