import { prebuilts } from '../data/en.js'
import { destructureDeck } from '../helpers.js'
import data from '../data/index.js'

const state = {
  decks: prebuilts.map((x)=> destructureDeck(x, data.en)),
  matchups: [
    { deck1: 0, deck2: 1, num: 100 },
    { deck1: 2, deck2: 1, num: 100 },
    { deck1: 3, deck2: 1, num: 100 },
    { deck1: 2, deck2: 4, num: 100 },
  ],
  selectedDeck: 0,
  locale: 'en',
  deckID: 0
}

export default state
