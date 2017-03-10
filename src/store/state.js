import { prebuilts } from '../data/en.js'
import { destructureDeck } from '../helpers.js'
import data from '../data/index.js'

const state = {
  decks: prebuilts.map((x)=> destructureDeck(x, data.en)),
  selectedDeck: 0,
  locale: 'en'
}

export default state
