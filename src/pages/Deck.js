
import React, {useEffect} from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux';

import * as actions from '../store/actions/decks'


// Add a handle delete deck through from actions 

const Deck = props => {
  const { handleGetAllDecks, decks } = props;
  useEffect(() => { props.handleGetAllDecks() }, [])

  console.log(decks)
  


  return (
    <View style={styles.container}>
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
