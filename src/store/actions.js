import * as types from './mutation-types.js'
import data from '../data/index.js'
import { toTitleCase, destructureDeck, keySort, basicSort, reverseSort, verifyDeck } from '../helpers.js'

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
    commit(types.SAVE_TO_LOCAL)
  },
  removeDeck: ({ state, commit }, deckNum) => {
    commit(types.REMOVE_DECK, deckNum)
    if (state.selectedDeck == deckNum) {
      commit(types.SELECT_DECK, -1)
    }
  },
  saveDeck: ({ state, commit }, list) => {
    let deck = destructureDeck(list, data[state.locale])
    if (deck != null) {
      commit(types.SAVE_DECK, deck)
      commit(types.SAVE_TO_LOCAL)

    }
  },
  saveDecks: ({ commit }) => {
    commit(types.SAVE_TO_LOCAL)
    commit(types.INFO_MSG, "Decks saved")
  },
  restoreDefaults: ({ state, commit }) => {
    commit(types.CLEAR_DECKS)
    commit(types.CLEAR_MATCHUPS)
    let prebuilts = data[state.locale]['prebuilts']
    let defaultDecks = prebuilts.map((x) => destructureDeck(x, data[state.locale]))
    for (let deck of defaultDecks) {
      commit(types.ADD_DECK, deck)
    }
    commit(types.SAVE_TO_LOCAL)
    commit(types.INFO_MSG, "Default Decks Restored")
  },
  addMatchup: ({ commit }, matchup) => {
    if (matchup.deck1 == null || matchup.deck2 == null || matchup.num < 0) {
      commit(types.ERROR_MSG, "Incomplete Matchup details")
      return
    }
    commit(types.ADD_MATCHUP, matchup)
  },
  removeMatchup: ({ commit }, row) => {
    commit(types.REMOVE_MATCHUP, row)
  },
  sortMatchups: ({ commit }, params) => {
    let sortFunc = keySort(params.name, params.type == 'asc' ? basicSort : reverseSort)
    commit(types.SORT_MATCHUP, sortFunc)
  },
  submitReq: ({state, commit}, email) => {
    // Verify email
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRegex.test(email)) {
      commit(types.ERROR_MSG, "Invalid Email")
      return
    }
    // Verify matchups
    if (state.matchups.length == 0) {
      commit(types.ERROR_MSG, "No Matchups submitted")
      return
    }
    // Total of 1000 games
    let totalGames = state.matchups.reduce((acc, m) => acc + m.num, 0)
    if (totalGames > 1000) {
      commit(types.ERROR_MSG, "Too many games submitted")
      return
    }
    // Verify Decks
    let decksNums = state.matchups.reduce((acc, m) => {
      if (!acc.includes(m.deck1)) acc.push(m.deck1)
      if (!acc.includes(m.deck2)) acc.push(m.deck2)
      return acc
    }, [])
    let decks = decksNums.map(function(x) {
      return state.decks.filter((d) => d.id == x)[0]
    })
    for (let deck of decks) {
      let err = verifyDeck(deck.deckList, data[state.locale])
      if (err) {
        commit(types.ERROR_MSG,deck.deckName + " - " + err)
        return
      }
    }
    commit(types.INFO_MSG, "Submit successful!")

  }
}

export default actions
