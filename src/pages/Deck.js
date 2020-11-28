
import React, {useEffect} from 'react';
import { StyleSheet, Text, Button, View,  SectionList } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux';

import * as actions from '../store/actions/decks'

// Add a handle delete deck through from actions 

const Deck = props => {
  const { handleGetAllDecks, decks } = props;
  useEffect(() => { handleGetAllDecks() }, [])

  console.log(decks)
  
  return (
    <View style={styles.container}>

      {Object.keys(decks).map(info => {
        < SectionList>{decks.title}</ SectionList>
      })}
            <Text> //decks question length </Text>
            <Button title='Start Quiz' />
            <Button title='Add new Card' />
            <Button title='Delete Deck' />
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
