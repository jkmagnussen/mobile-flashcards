import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { store } from './src/store';
import { Provider } from 'react-redux';

import Deck from './src/pages/Deck'
import Home from './src/pages/Home'
import AddCard from './src/pages/AddCard'

const Stack = createStackNavigator()

export default function App()
{
  console.log(store)
  return (
    <Provider store={store}>

    <NavigationContainer>
      <Stack.Navigator style={styles.container}>
            <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Deck" component={Deck} />
          <Stack.Screen name="AddCard" component={AddCard} />
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
