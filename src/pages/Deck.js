
import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';


// Add a handle delete dek through from actions 


export default function Deck(props)
{
  return (
    <View>
      <View style={styles.container}>
            <Text style={styles.deckTitle}>{deck.title}</Text>
            <Paragraph style={styles.deckCardCount}>
              {deck.questions.length} cards
            </Paragraph>
            <Button
              mode="contained"
              disabled={deck.questions.length > 0 ? false : true}
              onPress={() => this.onStartQuizPress(deck.id)}
            >
              Start Quiz
            </Button>

            <Button
              mode="outlined"
              onPress={() => this.onAddCardPress(deck.id)}
            >
              Add New Card
            </Button>

            <Button
              style={styles.buttonDeleteDeck}
              labelStyle={styles.buttonDeleteDeckLabel}
              mode="text"
              onPress={() => this.onDeleteDeckPress(deck.id)}
            >
              Delete Deck
            </Button>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
});
