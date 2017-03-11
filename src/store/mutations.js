import Vue from 'vue'
import {
  ADD_DECK,
  REMOVE_DECK,
  SAVE_DECK,
  POPULATE_DECKS,
  SAVE_TO_LOCAL,
  CLEAR_DECKS,
  SELECT_DECK,
  ADD_MATCHUP,
  REMOVE_MATCHUP,
  SORT_MATCHUP,
  CLEAR_MATCHUPS
 } from './mutation-types.js'


Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function (key) {
  return JSON.parse(this.getItem(key));
}

const mutations = {
  [ADD_DECK](state, deck) {
    state.decks.push(Object.assign({}, deck, {'id': state.deckID}))
    state.deckID += 1
  },
  [REMOVE_DECK](state, deckNum) {
    for (let i=0;i<state.decks.length;i++) {
      if (state.decks[i].id == deckNum) {
        state.decks.splice(i, 1)
        break
      }
    }
  },
  [SELECT_DECK](state, deckNum) {
    state.selectedDeck = deckNum
  },
  [SAVE_DECK](state, list) {
    for (let i=0;i<state.decks.length;i++) {
      if (state.decks[i].id == state.selectedDeck) {
        let updatedVal = Object.assign({}, state.decks[i], list)
        Vue.set(state.decks, i, updatedVal)
        break
      }
    }
  },
  [POPULATE_DECKS](state) {
    let decks = localStorage.getObject('RF.decklists')
    if (decks) {
      for (let deck of decks) {
        deck.id = state.deckID
        state.deckID += 1
      }
      state.decks = decks
    }
  },
  [SAVE_TO_LOCAL](state) {
    localStorage.setObject('RF.decklists', state.decks)
  },
  [CLEAR_DECKS](state) {
    state.decks = []
    state.deckID = 1
  },
  [ADD_MATCHUP](state, matchup) {
    state.matchups.push(matchup)
  },
  [REMOVE_MATCHUP](state, row) {
    state.matchups.splice(row, 1)
  },
  [SORT_MATCHUP](state, func) {
    state.matchups.sort(func)
  },
  [CLEAR_MATCHUPS](state) {
    state.matchups = []
  }

}

export default mutations
