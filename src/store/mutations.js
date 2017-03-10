import {ADD_DECKCARD, REMOVE_DECKCARD, POPULATE_DECKS, SAVE_TO_LOCAL} from './mutation-types.js'

Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function (key) {
  return JSON.parse(this.getItem(key));
}

const mutations = {
  [ADD_DECKCARD](state, list) {
    if (!list) {
      list = "Class: New Deck\n"
    }
    state.decks.push({ deckName: "New Deck", deckClass: "Neutral", deckList: list })
  },
  [REMOVE_DECKCARD](state, deckNum) {
    state.decks.splice(deckNum, 1)
  },
  [POPULATE_DECKS](state) {
    let decks = localStorage.getObject('RF.decklists')
    if (decks) {
      state.decks = decks
    }
  },
  [SAVE_TO_LOCAL](state) {
    localStorage.setObject('RF.decklists', state.decks)
  }
}

export default mutations
