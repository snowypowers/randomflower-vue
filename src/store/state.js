import { prebuilts } from '../data/en.js'
import { destructureDeck } from '../helpers.js'
import data from '../data/index.js'

const state = {
  decks: prebuilts.map((v, i)=> Object.assign({}, destructureDeck(v, data.en), {id: i})),
  matchups: [
    { deck1: 0, deck2: 1, num: 100 },
    { deck1: 2, deck2: 1, num: 200 },
    { deck1: 3, deck2: 1, num: 300 },
    { deck1: 2, deck2: 4, num: 400 },
  ],
  selectedDeck: -1,
  locale: 'en',
  deckID: prebuilts.length
}

export default state
