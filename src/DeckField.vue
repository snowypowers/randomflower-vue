<template lang="pug">
div.container-fluid.no-margin
  DeckCard(v-for="(deck, index) in decks" v-bind:key="index" v-bind:deckName="deck.deckName" v-bind:deckClass="deck.deckClass" v-bind:deckNum="index")

</template>

<script>
import DeckCard from './DeckCard.vue'
export default {
  name: 'DeckField',
  data () {
    return {
      decks: [
        {deckName: "Deck 1", deckClass: "Paladin", deckList: "long long list"},
        {deckName: "Deck 2", deckClass: "Mage", deckList: "long long list"},
        {deckName: "Deck 3 this is a super duper long dekc name", deckClass: "Druid", deckList: "long long list"},
      ]
    }
  },
  components: {
    DeckCard
  }
}
</script>

<style lang="stylus" scoped>

</style>
