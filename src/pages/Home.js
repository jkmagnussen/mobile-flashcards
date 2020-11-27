
import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';



export default function Home({navigation})
{

  return (
    <View>
      <Button title='text' onPress={() => navigation.navigate('Deck')}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
