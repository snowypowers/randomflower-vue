export function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

export function destructureDeck(deckList, locale) {
  let firstLine = deckList.split('\n')[0]
  let deckClass, deckName
  [deckClass, deckName] = firstLine.split(locale.col, 2)
  deckClass = locale.heroClasses[deckClass.toLowerCase()]
  return {deckClass, deckName, deckList}
}

export function keySort(key, sortF) {
  return function(a,b) {
    return sortF(a[key], b[key])
  }
}

export function basicSort(a,b) {
  if (a == b) return 0
  return a > b ? 1 : -1
}

export function reverseSort(a,b) {
  if (a == b) return 0
  return a < b ? 1 : -1
}

export function verifyEmail(email) {
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return emailRegex.test(email)
}

export function verifyDeck(list, locale) {
  let cards = list.split('\n')
  let heroClass = 0
  let numCards = 0
  for (let i = 0; i < cards.length; i++) {
      if (i == 0) {
          //Extract class of hero
          heroClass = cards[i].split(locale['col'])[0].toLowerCase()
          if (!Object.keys(locale['heroClasses']).includes(heroClass)) {
              return "Invalid Hero Class: " + heroClass
          }
      } else {
          let heroClassEnum = locale['heroClasses'][heroClass]
          //Comment
          if (cards[i][0] == '#' || cards[i] == '') continue

          //Check if starts with '1' or '2'
          if (!(cards[i][0] == '1' || cards[i][0] == '2')) {
              return "Invalid Row: Start with 1 or 2!"
          }

          numCards += parseInt(cards[i][0])
          //Check if card exists
          let cardName = cards[i].slice(1).trim();
          if (!locale['cardnames'][heroClassEnum].includes(cardName) && !locale['cardnames']['12'].includes(cardName)) {
              return "Invalid Card: " + cardName
          }

          //Check if legendary
          if (locale['legendaries'].includes(cardName) && cards[i][0] != '1') {
              return "Legendary Count Error: " + cardName
          }
      }
  }
  if (numCards != 30) {
      return "Invalid Decksize: " + numCards.toString()
  }
  return false
}
