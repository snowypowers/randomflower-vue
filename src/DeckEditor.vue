<template lang="pug">
MonacoEditor(ref="editor" v-bind:options="options" v-bind:changeThrottle="500" srcPath="dist" @mounted="loadHS" @codeChange="onType")

</template>

<script>
import MonacoEditor from 'vue-monaco-editor/src/Monaco.vue'
import languages from './js/languages.js'
import {col, heroClasses} from './data/en.js'

export default {
  name: 'app',
  data () {
    return {
      options: {
        theme: 'hstheme',
        value: "initial_deck_text",
        language: 'hs-0',
        fontSize: 18,
        lineNumbers: null,
        wordWrap: true,
        scrollbar: {
            horizontal: 'hidden'
        }
      },
      editor: null,
      currentLang: 'neutral'
    }
  },
  computed: {
    selectedDeck: function() {
      return this.$store.state.selectedDeck
    }
  },
  watch: {
    selectedDeck: function(newValue) {
      if(this.editor) {
        if (newValue == -1) {
          this.editor.setValue("// No Deck Selected")
          return
        } else {
          let deck = this.$store.state.decks.filter((d)=> d.id == this.$store.state.selectedDeck)[0]
          this.editor.setValue(deck.deckList)
        }
      }
    }
  },
    methods: {
      loadHS(editor) {
        this.editor = editor
        Object.keys(languages).forEach((val) => {
          window.monaco.languages.register({ id: val });
          window.monaco.languages.setMonarchTokensProvider(val, languages[val]['token']);
          window.monaco.languages.registerCompletionItemProvider(val, languages[val]['completion']);
        })
        window.monaco.editor.defineTheme('hstheme', {
          base: 'vs',
          inherit: true,
          rules: [
            { token: 'classtype', foreground: '000000', fontStyle: 'bold' },
            { token: 'deckname', foreground: '000000', fontStyle: 'bold' },
            { token: 'priestcards', foreground: 'C7C19F' },
            { token: 'warlockcards', foreground: '7624AD' },
            { token: 'magecards', foreground: '0092AB' },
            { token: 'huntercards', foreground: '016E01' },
            { token: 'paladincards', foreground: 'AA8F00' },
            { token: 'druidcards', foreground: '703606' },
            { token: 'warriorcards', foreground: '8E1002' },
            { token: 'shamancards', foreground: '021885' },
            { token: 'roguecards', foreground: '5C5D58' },
            { token: 'neutralcards', foreground: '5e5249' },
            { token: 'one', foreground: 'FFA500' },
            { token: 'two', foreground: '008800' },
            { token: 'comments', foreground: '888888', fontStyle: 'italic' },
            { token: 'error', foreground: 'FF0000', fontStyle: 'bold' }
          ]
        })
        editor.updateOptions({
          theme: 'hstheme'
        })
        window.monaco.editor.setModelLanguage(editor.model, 'hs-0')
      },
      onType(editor) {
        var text = editor.getValue()
        var heroClass = text.split(col, 1)[0].trim().toLowerCase()
        if (Object.keys(heroClasses).includes(heroClass) && this.currentLang != heroClass) {
          this.currentLang = heroClass
          window.monaco.editor.setModelLanguage(editor.model, 'hs-' + heroClasses[heroClass].toString())
        }
        this.$store.dispatch('saveDeck', text)
      },
      handleResize() {
        if (this.editor) this.editor.layout()
      }
  },
  components: {
    MonacoEditor
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  }

}
</script>

<style lang="stylus" scoped>

</style>
