<template lang="pug">
md-table-card(md-sort="matchupNum")
  md-toolbar.md-accent
    md-input-container
      label Deck 1
      md-select(name="deck1" v-model='deck1')
        md-option(v-for="(d1, index) in decks" v-bind:key="'deck1_' + d1.id" v-bind:value="d1.id") {{d1.deckName}}
    md-input-container
      label Deck 2
      md-select(name="deck2" v-model='deck2')
        md-option(v-for="(d2, index) in decks" v-bind:key="'deck2_' + d2.id" v-bind:value="d2.id") {{d2.deckName}}
    md-input-container
      label No. of Matchups
      md-input(type="number" placeholder="100")
    md-button Add Matchup
  md-table
    md-table-header
      md-table-row
        md-table-head(md-sort-by="deck1") Deck 1
        md-table-head(md-sort-by="deck2") Deck 2
        md-table-head(md-sort-by="num" md-numeric) No. of Matches
        md-table-head Delete
    md-table-body
      md-table-row(v-for="(matchup, rowIndex) in matchups" v-bind:key="rowIndex" v-bind:md-item="matchup" md-selection)
        md-table-cell(v-for="(column, colIndex) in matchup" v-bind:key="colIndex" v-bind:md-numeric="colIndex !== 'deck1' && colIndex !== 'deck2'")
          span(v-if="colIndex !== 'del'") {{ column }}
          md-button.md-icon-button(v-if="colIndex === 'del'")
              md-icon delete

</template>

<script>
export default {
  name: 'Matchups',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      deck1: null,
      deck2: null
    }
  },
  computed:{
    decks() {
      return this.$store.state.decks
    },
    matchups() {
      return this.$store.getters.matchupTable
    }
  }
}
</script>

<style lang="stylus" scoped>
.md-toolbar > .md-input-container
  width:auto
  flex: 1

.md-toolbar > .md-button
  flex: 1
</style>
