
import React, { useEffect }  from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux';
import * as actions from '../store/actions/decks'


function Home(props){
  const { navigation, handleGetAllDecks, selectDeck, decks } = props
  useEffect(() => { handleGetAllDecks() }, [])

  const openDeck = (id) => {
    selectDeck(id)
    navigation.navigate('Deck')
  }

  return (
    <View>
      {decks.map(deck => {
        return(
          <Button key={deck.id} title={deck.title} onPress={() => openDeck(deck.id)}/>
        )
      })}
      <Button title='Deck' onPress={() => navigation.navigate('Deck')} />
    </View>
  );
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch)

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
