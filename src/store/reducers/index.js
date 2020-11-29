import { combineReducers } from 'redux';
import decks from './decks';
import newDeckId from './newDeckId';
import selectedDeck from './selectDeckId'
import selectedQuestion from './questionTrack';

export default combineReducers({
    selectedQuestion,
    decks,
    newDeckId,
    selectedDeck
});