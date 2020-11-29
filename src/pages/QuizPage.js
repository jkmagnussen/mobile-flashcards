
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux';
import * as actions from '../store/actions/decks'
import { Container, Header, Content, Button, Text, Card, Icon, CardItem} from 'native-base';
import { preventAutoHide } from 'expo-splash-screen';

function QuizPage(props) {
  const { navigation, selectedDeck, decks } = props
    const deck = decks.filter(deck => deck.id === selectedDeck)[0]
    const questions = deck.questions

    const [isQuestion, showAnswer] = useState(true)
    const [correctAnswers, updateCorrectAnswers] = useState(0)
    const [incorrectAnswers, updateIncorrectAnswers] = useState(0)
    const [selectedQuestion, updateSelectedQuestion] = useState(0)

    const displayAnswer = () => showAnswer(!isQuestion)

    const rightAnswers = () => {
        updateSelectedQuestion(selectedQuestion + 1)
        updateCorrectAnswers(correctAnswers + 1)
        showAnswer(true)
    }

     const wrongAnswers = () => {
        
        updateSelectedQuestion(selectedQuestion + 1)
        updateIncorrectAnswers(incorrectAnswers + 1) 
        showAnswer(true)
     }

    const restartQuiz = () => {
        updateSelectedQuestion(0)
        updateIncorrectAnswers(0)
        updateCorrectAnswers(0)
    }
    console.log(isQuestion, correctAnswers, incorrectAnswers, selectedQuestion)
    
    if (selectedQuestion === questions.length )
    {
        return (
            <View style={styles.quizComplete}>
                <Text style={styles.quizCompleteText}> Quiz Completed</Text>
                <Text style={styles.quizCompleteResults}> You have answered {(correctAnswers/questions.length) * 100 }%</Text>
                <Button block ligh onPress={restartQuiz} style={styles.buttons}>
                    <Text >RESTART QUIZ</Text>
                </Button>
                <Button block ligh onPress={() => { navigation.navigate('Deck') }} style={styles.buttons}>
                    <Text>BACK TO DECK</Text>
                </Button>
            </View>
        )
    }
    
  return (
      <View style={styles.container}>
          <Card style={styles.card} >
              <CardItem button style={{ height: '100%' }} onPress={displayAnswer}>
                  
                  {isQuestion
                      ? <Text style={styles.text}>{questions[selectedQuestion].question}</Text>
                      : <Text style={styles.text}>{questions[selectedQuestion].answer}</Text>}
              </CardItem>
          
          </Card>
          {questions.length === selectedQuestion + 1
              ? <Text style={styles.questionsLeft}> Final question! </Text> 
              : 
              <Text style={styles.questionsLeft}>{questions.length - selectedQuestion - 1} questions remaining</Text> 
        }
          
          <View style={styles.actionButtons}>
              <View style={styles.buttonSection}>
                  <Button transparent rounded large style={{ width: 90, height: 90 }} onPress={rightAnswers } >
              <Icon style={{ fontSize: 60, color: 'green' }} name='md-thumbs-up' />
                  </Button>
              </View>

              <View style={styles.buttonSection}>
          <Button transparent rounded large style={{width: 90, height: 90, marginTop: -40}} onPress={displayAnswer}>
              <Icon style={{ fontSize: 40, color: 'rgb(64,64,64)' }} name='refresh' />
                  </Button>
              </View>
              <View style={styles.buttonSection}>
                  <Button transparent rounded large style={{ width: 90, height: 90 }}
                      onPress={wrongAnswers}>
              <Icon style={{ fontSize: 60, color: 'red' }} name='md-thumbs-down' />
                  </Button>
             </View>
          </View>
</View>
  );
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch)

export default compose(connect(mapStateToProps, mapDispatchToProps))(QuizPage)

const styles = StyleSheet.create({
    container: {
      display: 'flex',
        flex: 1,
        justifyContent: 'flex-start',
    },
    card: {
        display: 'flex',
        height: '70%',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    text: {
        fontSize: 30,
        fontWeight: '400',
        textAlign: 'center',
        color: 'rgb(64,64,64)',
    },
    actionButtons: {
        
        flexDirection: 'row',
         display: 'flex',
         flexWrap: 'nowrap',
        height: 100,
         width: '100%',
        justifyContent: 'center',
    },
    questionsLeft: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 30,
    },
    buttonSection: {
        padding: 20,
        paddingTop: 60,
    },
    quizComplete: {
        marginTop: 120,
        justifyContent: 'center',
    },
    quizCompleteText: {
        fontSize: 30,
        fontWeight: '400',
        textAlign: 'center',
        color: 'rgb(64,64,64)',
    },
    quizCompleteResults: {
        fontSize: 30,
        fontWeight: '400',
        textAlign: 'center',
        color: 'rgb(64,64,64)',

    }, 
    buttons: {
    margin: 15,
    fontSize: 92,
    height: 100,
    fontWeight: '600',
    textAlign: 'center',
    }
}
);

