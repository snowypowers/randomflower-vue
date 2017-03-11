
const getters = {
  decknames: state => {
    return state.decks.map(x => x.deckName)
  },
  matchupTable: state => {
    return state.matchups.map((m) => {
      let deck1 = state.decks.filter(d=> d.id == m.deck1)
      if (deck1.length != 1) {
        return null
      }
      let deck2 = state.decks.filter(d=> d.id == m.deck2)
      if (deck2.length != 1) {
        return null
      }
      return {deck1: deck1[0].deckName, deck2: deck2[0].deckName, num: m.num, del: 0}
    })
  }
}

export default getters
