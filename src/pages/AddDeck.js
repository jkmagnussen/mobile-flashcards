
import React, {useEffect, useState} from 'react';
import { StyleSheet, View, TextInput  } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux';
import * as actions from '../store/actions/decks'
import { Button, Text } from 'native-base';


const AddDeck = ({ handleAddDecks, navigation }) => {
    const [title, onChangeTitle] = useState('Title of Deck? ')


    const handleAddDeck = () => {
        handleAddDecks(title)
        navigation.navigate('Home')
    }
  
  return (
      <View style={styles.container}>
          <TextInput style={styles.input} title='What is the title of your Deck?' onChangeText={text => onChangeTitle(text)}
              value={title} />

          <Button block light style={styles.buttons} title='Create New Deck' onPress={handleAddDeck} >
              <Text style={styles.titles}>Create New Deck</Text>
          </Button>
    </View>
  );
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch)

export default compose(connect(mapStateToProps, mapDispatchToProps))(AddDeck)

const styles = StyleSheet.create({
        container: {
        marginTop: 140,
  
    },
          buttons: {
    margin: 15,
    fontSize: 92,
    height: 100,
    fontWeight: '600',
    textAlign: 'center',
    },
            titles: {
    fontWeight: '600',
    fontSize: 28,
                margin: 10,
    color: 'rgb(64,64,64)'
    },
    input: {
        alignContent: 'center',
        fontSize: 28,
        textAlign: 'center',
        borderBottomColor: 'rgb(64,64,64)',
    borderBottomWidth: 1.5,
        marginBottom: 30,
    color: 'rgb(64,64,64)'
        
            }
});
