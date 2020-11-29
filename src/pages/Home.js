
import React, { useEffect }  from 'react';
import { StyleSheet, View , ScrollView, SafeAreaView} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux';
import * as actions from '../store/actions/decks'
import { Container, Header, Content, Button, Text, CardItem } from 'native-base';



function Home(props){
  const { navigation, handleGetAllDecks, selectDeck, decks } = props
  useEffect(() => { handleGetAllDecks() }, [])

  const openDeck = (id) => {
    selectDeck(id)
    navigation.navigate('Deck')
  }

  return (
    <SafeAreaView style={styles.container}>

            <Button rounded light style={ styles.newDeckButton} onPress={() => navigation.navigate('AddDeck')} ><Text>+</Text></Button>


      <ScrollView >
<View style={{height: '100%'}}>
      {decks.map(deck => {
        return (
          <Button block light style={styles.buttons} key={deck.id} onPress={() => openDeck(deck.id)} >
            <Text style={styles.titles}>{deck.title}</Text>
            <Text>{deck.questions.length}</Text>
          </Button>
        )
      })}

      
</View>
      </ScrollView>
      </SafeAreaView>
  );
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch)

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
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
  newDeckButton: {
    bottom:50,
    right: 20,
    position: 'absolute',
    zIndex:1,
    backgroundColor: 'green',
    fontWeight: '600',
    fontSize: 120,
}
});

