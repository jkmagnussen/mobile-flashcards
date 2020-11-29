
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, Button, View, TextInput  } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux';
import * as actions from '../store/actions/decks'



const AddCard = ({ handleAddCardToDeck, selectedDeck, navigation })=> {
    const [question, onChangeQuestion] = useState('Question')
    const [answer, onChangeAnswer] = useState('Answer')

    const handleAddCard = () => {
        handleAddCardToDeck(selectedDeck, {question, answer})
        navigation.navigate('Deck')
    }
  
  return (
      <View style={styles.container}>
          <TextInput title='What is the title of your card?' onChangeText={text => onChangeQuestion(text)}
              value={question} />
          <TextInput title='What is the answerof your card?' onChangeText={text => onChangeAnswer(text)}
      value={answer}/>
          <Button title='Add New Card' onPress={handleAddCard} />
    </View>
  );
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch)

export default compose(connect(mapStateToProps, mapDispatchToProps))(AddCard)

const styles = StyleSheet.create({
        container: {
        color: 'red',
  
  },
});
