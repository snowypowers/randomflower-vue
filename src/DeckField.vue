<template lang="pug">
div.container-fluid.no-margin
  md-toolbar.md-accent#deckhead
    h4.md-title(style="flex: 1; text-align: left;") Decks
    md-button.md-icon-button#addDeck(v-on:click.native="addNewDeck" title="Add New Deck")
      md-icon add_circle
    md-button.md-icon-button#saveDecks(@click.native="saveDecks" title="Save Current Decks")
      md-icon save
    md-button.md-icon-button#restoreDecks(@click.native="confirmRestore" title="Restore Default Decks")
      md-icon restore
          md-dialog(md-open-from="#restoreDecks" md-close-to="#restoreDecks" ref="restoreDialog")
            md-dialog-title Restore Default Decks?
            md-dialog-content Erase all decks and restore defaults?
            md-dialog-actions
              md-button.md-primary(@click.native="closeDialog('restoreDialog')") Cancel
              md-button.md-primary(@click.native="restoreDefaults") Confirm
  div#deckcards
    DeckCard(v-for="(deck, index) in decks" v-bind:key="index" v-bind:deckName="deck.deckName" v-bind:deckClass="deck.deckClass" v-bind:deckNum="deck.id")

</template>

<script>
import DeckCard from './DeckCard.vue'

export default {
  name: 'DeckField',
  computed: {
    decks() {
      return this.$store.state.decks
    }
  },
  components: {
    DeckCard
  },
  methods :{
    addNewDeck: function() {
      this.$store.dispatch('newDeck', null)
    },
    saveDecks: function() {
      this.$store.dispatch('saveDecks')
    },
    confirmRestore: function() {
      this.$refs["restoreDialog"].open()
    },
    closeDialog: function(ref) {
      this.$refs[ref].close()
    },
    restoreDefaults: function() {
      this.$refs["restoreDialog"].close()
      this.$store.dispatch('restoreDefaults')
    }
  },
  beforeMount() {
    this.$store.commit('POPULATE_DECKS')
  }
}
</script>

<style lang="stylus" scoped>

#deckcards
  height: calc(100% - 64px)
  overflow-y: scroll
  overflow-x: hidden
</style>
