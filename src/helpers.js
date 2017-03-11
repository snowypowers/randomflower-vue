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
