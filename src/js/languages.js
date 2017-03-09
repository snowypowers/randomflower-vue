import {heroClasses, cardnames} from '../data/en.js'

function getCompletionCode(heroClassEnum) {
  var output = []
  if (heroClassEnum) {
    var classCards = cardnames[heroClassEnum].map(makeCompletionCode);
    output = output.concat(classCards);
    var neutralCards = cardnames['12'].map(makeCompletionCode);
    output = output.concat(neutralCards);
  } else {
    Object.keys(cardnames).forEach(function (key) {
      var i = cardnames[key].map(makeCompletionCode);
      output = output.concat(i);
    })
  }

  return output
}

function makeCompletionCode(labelname) {
  return {
    label: labelname,
    kind: monaco.languages.CompletionItemKind.Text
  }
}
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

const languages = {

  'hs-0': {
    token: {
      classtypes: Object.keys(heroClasses).map(toTitleCase),
      priestcards: cardnames["6"],
      warlockcards: cardnames["9"],
      magecards: cardnames["4"],
      huntercards: cardnames["3"],
      paladincards: cardnames["5"],
      druidcards: cardnames["2"],
      warriorcards: cardnames["10"],
      shamancards: cardnames["8"],
      roguecards: cardnames["7"],
      neutralcards: cardnames["12"],

      tokenizer: {
        root: [
          [/^[A-za-z\u4E00-\u9FFF]+/, {
            cases: {
              '@classtypes': 'classtype',
              '@default': 'error'
            }
          }],
          [/[:：].+/, "deckname"],
          [/1 /, 'one'],
          [/2 /, 'two'],
          [/[A-Za-z\u4E00-\u9FFF].+/, {
            cases: {
              '@priestcards': 'priestcards',
              '@warlockcards': 'warlockcards',
              '@magecards': 'magecards',
              '@huntercards': 'huntercards',
              '@paladincards': 'paladincards',
              '@druidcards': 'druidcards',
              '@warriorcards': 'warriorcards',
              '@shamancards': 'shamancards',
              '@roguecards': 'roguecards',
              '@neutralcards': 'neutralcards',
              '@default': 'error'
            }
          }],
          [/[\d]+/, 'error'],
          [/^#.+/, 'comments']
        ]
      }
    },
    completion: {
      provideCompletionItems: () => {
        return getCompletionCode()
      }

    }
  },
  'hs-8': {
    token: {
      classtypes: Object.keys(heroClasses).map(toTitleCase),
      shamancards: cardnames["8"],
      neutralcards: cardnames["12"],
      tokenizer: {
        root: [
          [/^[A-za-z\u4E00-\u9FFF]+/, {
            cases: {
              '@classtypes': 'classtype',
              '@default': 'error'
            }
          }],
          [/[:：].+/, "deckname"],
          [/1 /, 'one'],
          [/2 /, 'two'],
          [/[A-Za-z\u4E00-\u9FFF].+/, {
            cases: {
              '@shamancards': 'shamancards',
              '@neutralcards': 'neutralcards',
              '@default': 'error'
            }
          }],
          [/[\d]+/, 'error'],
          [/^#.+/, 'comments']
        ]
      }
    },
    completion: {
      provideCompletionItems: () => {
        return getCompletionCode('8')
      }
    }
  },
  'hs-9': {
    token: {
      classtypes: Object.keys(heroClasses).map(toTitleCase),
      warlockcards: cardnames["9"],
      neutralcards: cardnames["12"],
      tokenizer: {
        root: [
          [/^[A-za-z\u4E00-\u9FFF]+/, {
            cases: {
              '@classtypes': 'classtype',
              '@default': 'error'
            }
          }],
          [/[:：].+/, "deckname"],
          [/1 /, 'one'],
          [/2 /, 'two'],
          [/[A-Za-z\u4E00-\u9FFF].+/, {
            cases: {
              '@warlockcards': 'warlockcards',
              '@neutralcards': 'neutralcards',
              '@default': 'error'
            }
          }],
          [/[\d]+/, 'error'],
          [/^#.+/, 'comments']
        ]
      }
    },
    completion: {
      provideCompletionItems: () => {
        return getCompletionCode('9')
      }
    }
  },
  'hs-7': {
    token: {
      classtypes: Object.keys(heroClasses).map(toTitleCase),
      roguecards: cardnames["7"],
      neutralcards: cardnames["12"],
      tokenizer: {
        root: [
          [/^[A-za-z\u4E00-\u9FFF]+/, {
            cases: {
              '@classtypes': 'classtype',
              '@default': 'error'
            }
          }],
          [/[:：].+/, "deckname"],
          [/1 /, 'one'],
          [/2 /, 'two'],
          [/[A-Za-z\u4E00-\u9FFF].+/, {
            cases: {
              '@roguecards': 'roguecards',
              '@neutralcards': 'neutralcards',
              '@default': 'error'
            }
          }],
          [/[\d]+/, 'error'],
          [/^#.+/, 'comments']
        ]
      }
    },
    completion: {
      provideCompletionItems: () => {
        return getCompletionCode('7')
      }
    }
  },
  'hs-4': {
    token: {
      classtypes: Object.keys(heroClasses).map(toTitleCase),
      magecards: cardnames["4"],
      neutralcards: cardnames["12"],
      tokenizer: {
        root: [
          [/^[A-za-z\u4E00-\u9FFF]+/, {
            cases: {
              '@classtypes': 'classtype',
              '@default': 'error'
            }
          }],
          [/[:：].+/, "deckname"],
          [/1 /, 'one'],
          [/2 /, 'two'],
          [/[A-Za-z\u4E00-\u9FFF].+/, {
            cases: {
              '@magecards': 'magecards',
              '@neutralcards': 'neutralcards',
              '@default': 'error'
            }
          }],
          [/[\d]+/, 'error'],
          [/^#.+/, 'comments']
        ]
      }
    },
    completion: {
      provideCompletionItems: () => {
        return getCompletionCode('8')
      }
    }
  },
  'hs-5': {
    token: {
      classtypes: Object.keys(heroClasses).map(toTitleCase),
      paladincards: cardnames["5"],
      neutralcards: cardnames["12"],
      tokenizer: {
        root: [
          [/^[A-za-z\u4E00-\u9FFF]+/, {
            cases: {
              '@classtypes': 'classtype',
              '@default': 'error'
            }
          }],
          [/[:：].+/, "deckname"],
          [/1 /, 'one'],
          [/2 /, 'two'],
          [/[A-Za-z\u4E00-\u9FFF].+/, {
            cases: {
              '@paladincards': 'paladincards',
              '@neutralcards': 'neutralcards',
              '@default': 'error'
            }
          }],
          [/[\d]+/, 'error'],
          [/^#.+/, 'comments']
        ]
      }
    },
    completion: {
      provideCompletionItems: () => {
        return getCompletionCode('5')
      }
    }
  },
  'hs-2': {
    token: {
      classtypes: Object.keys(heroClasses).map(toTitleCase),
      druidcards: cardnames["2"],
      neutralcards: cardnames["12"],
      tokenizer: {
        root: [
          [/^[A-za-z\u4E00-\u9FFF]+/, {
            cases: {
              '@classtypes': 'classtype',
              '@default': 'error'
            }
          }],
          [/[:：].+/, "deckname"],
          [/1 /, 'one'],
          [/2 /, 'two'],
          [/[A-Za-z\u4E00-\u9FFF].+/, {
            cases: {
              '@druidcards': 'druidcards',
              '@neutralcards': 'neutralcards',
              '@default': 'error'
            }
          }],
          [/[\d]+/, 'error'],
          [/^#.+/, 'comments']
        ]
      }
    },
    completion: {
      provideCompletionItems: () => {
        return getCompletionCode('2')
      }
    }
  },
  'hs-10': {
    token: {
      classtypes: Object.keys(heroClasses).map(toTitleCase),
      warriorcards: cardnames["10"],
      neutralcards: cardnames["12"],
      tokenizer: {
        root: [
          [/^[A-za-z\u4E00-\u9FFF]+/, {
            cases: {
              '@classtypes': 'classtype',
              '@default': 'error'
            }
          }],
          [/[:：].+/, "deckname"],
          [/1 /, 'one'],
          [/2 /, 'two'],
          [/[A-Za-z\u4E00-\u9FFF].+/, {
            cases: {
              '@warriorcards': 'warriorcards',
              '@neutralcards': 'neutralcards',
              '@default': 'error'
            }
          }],
          [/[\d]+/, 'error'],
          [/^#.+/, 'comments']
        ]
      }
    },
    completion: {
      provideCompletionItems: () => {
        return getCompletionCode('10')
      }
    }
  },
  'hs-6': {
    token: {
      classtypes: Object.keys(heroClasses).map(toTitleCase),
      priestcards: cardnames["6"],
      neutralcards: cardnames["12"],
      tokenizer: {
        root: [
          [/^[A-za-z\u4E00-\u9FFF]+/, {
            cases: {
              '@classtypes': 'classtype',
              '@default': 'error'
            }
          }],
          [/[:：].+/, "deckname"],
          [/1 /, 'one'],
          [/2 /, 'two'],
          [/[A-Za-z\u4E00-\u9FFF].+/, {
            cases: {
              '@priestcards': 'priestcards',
              '@neutralcards': 'neutralcards',
              '@default': 'error'
            }
          }],
          [/[\d]+/, 'error'],
          [/^#.+/, 'comments']
        ]
      }
    },
    completion: {
      provideCompletionItems: () => {
        return getCompletionCode('6')
      }
    }
  },
  'hs-3': {
    token: {
      classtypes: Object.keys(heroClasses).map(toTitleCase),
      huntercards: cardnames["3"],
      neutralcards: cardnames["12"],
      tokenizer: {
        root: [
          [/^[A-za-z\u4E00-\u9FFF]+/, {
            cases: {
              '@classtypes': 'classtype',
              '@default': 'error'
            }
          }],
          [/[:：].+/, "deckname"],
          [/1 /, 'one'],
          [/2 /, 'two'],
          [/[A-Za-z\u4E00-\u9FFF].+/, {
            cases: {
              '@huntercards': 'huntercards',
              '@neutralcards': 'neutralcards',
              '@default': 'error'
            }
          }],
          [/[\d]+/, 'error'],
          [/^#.+/, 'comments']
        ]
      }
    },
    completion: {
      provideCompletionItems: () => {
        return getCompletionCode('3')
      }
    }
  },
};


export default languages;
export { getCompletionCode, makeCompletionCode, toTitleCase };
