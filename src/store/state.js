import { prebuilts } from '../data/en.js'
import { destructureDeck } from '../helpers.js'
import data from '../data/index.js'

const state = {
  decks: prebuilts.map((v, i)=> Object.assign({}, destructureDeck(v, data.en), {id: i})),
  matchups: [],
  selectedDeck: -1,
  locale: 'en',
  deckID: prebuilts.length
}

export default state
