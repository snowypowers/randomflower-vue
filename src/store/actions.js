import * as types from './mutation-types.js'

const actions = {
  newDeck: ({ commit }) => {
    commit(types.ADD_DECKCARD, null)
  },
  removeDeck: ({ commit }, deckNum) => {
    commit(types.REMOVE_DECKCARD, deckNum)
  }
}

export default actions
