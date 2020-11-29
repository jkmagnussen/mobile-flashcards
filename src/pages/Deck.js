
import React, {useEffect} from 'react';
import { StyleSheet,  View,  SectionList } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux';
import { removeDeck } from '../utils/api';
import * as actions from '../store/actions/decks'
import { Container, Header, Content, Button, Text, Card } from 'native-base';

// Add a handle delete deck through from actions 

const Deck = props => {
  const { handleGetAllDecks, decks, selectedDeck, deleteDeck, navigation, selectDeck } = props;
  const deck = decks.filter(deck => deck.id === selectedDeck)[0]

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
      <Card style={{ elevation: 3, height: '100%' }}>
      <Text style={styles.header}>{deck.title}</Text>
        <Text style={styles.subtitle}>{deck.questions.length} cards</Text>
        <Button style={styles.buttons} block ligh title='Start Quiz' onPress={() => navigation.navigate('QuizPage')}>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </Button>
        <Button style={styles.buttons} block ligh title='Add new Card' onPress={() => navigation.navigate('AddCard')}>
          <Text style={styles.buttonText}>Add Card</Text>
        </Button>
        <Button style={styles.buttons} block ligh title='Delete Deck' onPress={handleDeleteDeck}>
          <Text style={styles.buttonText} >Delete Deck</Text>
        </Button>
        </Card>
    </View>
  );
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch)

export default compose(connect(mapStateToProps, mapDispatchToProps))(Deck)

const styles = StyleSheet.create({
        container: {
    

          height: '90%'
  
  },
  header: {
    fontSize: 42,
    fontWeight: '600',
    textAlign: 'center',
    margin: 30,
    marginTop: 80,
    color: '	rgb(64,64,64)',
  },
  buttons: {
    margin: 15,
    height: "10%",
    fontSize: 62,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 23,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 32,
    textAlign: 'center',
    margin: 20,
    color: '#CC3300'
  }
});
