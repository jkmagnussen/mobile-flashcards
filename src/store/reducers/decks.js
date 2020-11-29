import {
  GET_ALL_DECKS,
  ADD_DECK,
  ADD_CARD_TO_DECK,
  DELETE_DECK,
  SELECT_DECK
} from "../actions/decks";

export default function decks(state = [], action) {
  switch (action.type) {
    case GET_ALL_DECKS:
      const array = []
      for (const deck in action.decks){
        array.push(action.decks[deck])
      }
      return array
    
    case ADD_DECK:
      const { deck } = action;
      return {
        ...state,
        [deck.id]: deck
      };
    case ADD_CARD_TO_DECK:
      const { deckId, card } = action;
      const newDeck = state.filter(deck => deck.id === deckId)[0]
      const questions = newDeck.questions.concat([card])
      newDeck.questions = questions
      state.filter(deck => deck.id !== deckId)
      return [...state.filter(deck => deck.id !== deckId), newDeck ]
      
    case DELETE_DECK:
      const decks = state.filter(deck => deck.id !== action.deckId)
      return [...decks]
      
    case SELECT_DECK: 
    default:
      return state;
  }
}
