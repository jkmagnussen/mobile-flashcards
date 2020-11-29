import { combineReducers } from 'redux';
import decks from './decks';
import newDeckId from './newDeckId';
import selectedDeck from './selectDeckId'

export default combineReducers({
    decks,
    newDeckId,
    selectedDeck
});