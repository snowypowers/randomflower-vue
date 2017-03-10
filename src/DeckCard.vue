<template lang="pug">
md-card.deckcard.md-with-hover(@click.native="selectCard" v-bind:class="selectedCard")
  md-card-header
    md-avatar
      img(v-bind:src="classImg" alt="class")
    md-card-header-text.no-margin
      p.deckname.no-margin {{deckName}}
    md-card-actions
      md-button.md-icon-button.remove-card(@click.native.stop="removeDeck")
        md-icon clear

</template>

<script>
import { heroNumLookup } from './data/en.js'
export default {
  name: 'DeckCard',
  props: ['deckName', 'deckClass', 'deckNum'],
  data () {
    return {
    }
  },
  computed : {
    classImg: function() {
      return '../static/icon/classes/' + heroNumLookup[this.deckClass.toString()] + '.png'
    },
    selectedCard: function() {
      return {selected: this.$store.state.selectedDeck == this.deckNum}
    }
  },
  methods: {
    removeDeck: function() {
      this.$store.dispatch('removeDeck', this.deckNum)
    },
    selectCard: function() {
      console.log("selected card " + this.deckNum.toString())
      this.$store.commit('SELECT_DECK', this.deckNum)
    }
  }
}
</script>

<style lang="stylus" scoped>
.md-card-header-text
  display: flex
  justify-content: center
  flex-direction: column

.deckcard
  width:100%
  height: 80px

.deckname
  text-align:left

.remove-card
  top: 7px

.selected
  border-left: 10px solid blue

</style>
