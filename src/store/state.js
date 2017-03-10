import { prebuilts } from '../data/en.js'

const state = {
  decks: [
    { deckName: "Aggro Dragon Warrior", deckClass: "Warrior", deckList: prebuilts[0] },
    { deckName: "Aggro Shaman 0", deckClass: "Shaman", deckList: prebuilts[1] },
    { deckName: "Pirate Warrior", deckClass: "Warrior", deckList: prebuilts[2] },
  ],
  selectedDeck: 0,
  locale: 'en'
}

export default state
