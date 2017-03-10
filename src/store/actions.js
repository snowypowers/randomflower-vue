import * as types from './mutation-types.js'
import data from '../data/index.js'
import { toTitleCase, destructureDeck } from '../helpers.js'

const actions = {
  newDeck: ({ state, commit }, list) => {
    if (!list) {
      let d = data[state.locale]
      let adjList = d.heroAdjs
      let heroAdj = adjList[Math.floor(Math.random() * adjList.length)]
      let heroClass = Object.keys(d['heroClasses'])[Math.floor(Math.random() * Object.keys(d['heroClasses']).length)]
      heroClass = toTitleCase(heroClass)
      let deckName = heroAdj + " " + heroClass
      let deckClass = heroClass
      if (state.locale != 'en') {
        deckClass = data['en']['heroNumLookup'][d['heroClasses'][heroClass]]
      }
      list = heroClass + ": " + deckName
    }
    commit(types.ADD_DECK, destructureDeck(list, data[state.locale]))
  },
  removeDeck: ({ commit }, deckNum) => {
    commit(types.REMOVE_DECK, deckNum)
  },
  saveDecks: ({ commit }) => {
    commit(types.SAVE_TO_LOCAL)
  },
  restoreDefaults: ({ state, commit }) => {
      commit(types.CLEAR_DECKS)
    let prebuilts = data[state.locale]['prebuilts']
    let defaultDecks = prebuilts.map((x)=> destructureDeck(x, data[state.locale]))
    for (let deck of defaultDecks) {
      commit(types.ADD_DECK, deck)
    }
    commit(types.SAVE_TO_LOCAL)
  }
}

export default actions
