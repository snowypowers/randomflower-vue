import { ADD_DECK, REMOVE_DECK, SAVE_DECK, POPULATE_DECKS, SAVE_TO_LOCAL, CLEAR_DECKS, SELECT_DECK } from './mutation-types.js'

Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function (key) {
  return JSON.parse(this.getItem(key));
}

const mutations = {
  [ADD_DECK](state, deck) {
    state.decks.push(deck)
  },
  [REMOVE_DECK](state, deckNum) {
    if (state.decks.length == 0 && deckNum == 0) {
      state.decks = []
      return
    }
    state.decks.splice(deckNum, 1)
  },
  [SELECT_DECK](state, deckNum) {
    state.selectedDeck = deckNum
  },
  [SAVE_DECK](state, list) {
    state.decks[state.selectedDeck] = list
  },
  [POPULATE_DECKS](state) {
    let decks = localStorage.getObject('RF.decklists')
    if (decks) {
      state.decks = decks
    }
  },
  [SAVE_TO_LOCAL](state) {
    localStorage.setObject('RF.decklists', state.decks)
  },
  [CLEAR_DECKS](state) {
    state.decks = []
  }
}

export default mutations
