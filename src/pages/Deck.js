
import React, {useEffect} from 'react';
import { StyleSheet, Text, Button, View,  SectionList } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux';
import { removeDeck } from '../utils/api';
import * as actions from '../store/actions/decks'

// Add a handle delete deck through from actions 

const Deck = props => {
  const { handleGetAllDecks, decks, selectedDeck, deleteDeck, navigation, selectDeck } = props;
  const deck = decks.filter(deck => deck.id === selectedDeck)[0]
  useEffect(() => { handleGetAllDecks() }, [])

  const handleDeleteDeck = () => {
    deleteDeck(selectedDeck)
    removeDeck(selectedDeck)
    selectDeck('')
    navigation.navigate('Home')
  } 
  console.log(deck)
  if (deck === undefined) return null;
  
  return (
    <View style={styles.container}>
      <Text>{deck.title}</Text>
        <Text>{deck.questions.length} cards</Text>
            <Button title='Start Quiz' />
      <Button title='Add new Card' onPress={() => navigation.navigate('AddCard')}/>
      <Button title='Delete Deck' onPress={handleDeleteDeck}/>
    </View>
  );
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch)

export default compose(connect(mapStateToProps, mapDispatchToProps))(Deck)

const styles = StyleSheet.create({
        container: {
        color: 'red',
  
  },
});
