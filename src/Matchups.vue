<template lang="pug">
md-table-card
  md-toolbar.md-accent(md-gutter="24")
    md-input-container.select-deck
      label Deck 1
      md-select(name="deck1" v-model='deck1')
        md-option(v-for="(d1, index) in decks" v-bind:key="index" v-bind:value="d1.id") {{d1.deckName}}
    md-input-container.select-deck
      label Deck 2
      md-select(name="deck2" v-model='deck2')
        md-option(v-for="(d2, index) in decks" v-bind:key="index" v-bind:value="d2.id") {{d2.deckName}}
    md-input-container.select-num
      label No. of Matchups
      md-input(type="number" placeholder="100" v-model="num")
    md-button.md-warn(@click.native="addMatchup") Add Matchup

  md-table(md-sort="num" @sort="sortTable")
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
          md-button.md-icon-button(v-if="colIndex === 'del'" @click.native="removeRow(rowIndex)")
              md-icon delete
</template>

<script>
export default {
  name: 'Matchups',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      deck1: null,
      deck2: null,
      num: 100
    }
  },
  computed:{
    decks() {
      return this.$store.state.decks
    },
    matchups() {
      return this.$store.getters.matchupTable
    }
  },
  methods: {
    addMatchup: function() {
      this.$store.dispatch('addMatchup', {deck1: this.deck1, deck2: this.deck2, num: this.num})
      this.deck1 = null
      this.deck2 = null
      this.num = 100
    },
    removeRow: function(rowIndex) {
      this.$store.dispatch('removeMatchup', rowIndex)
    },
    sortTable: function(params) {
      this.$store.dispatch('sortMatchups', params)
    }
  }
}
</script>

<style lang="stylus" scoped>
.md-toolbar > .select-deck
  width:auto
  flex: 2 1 auto

.md-toolbar > .select-num
  width:auto
  flex: 1

.md-toolbar > .md-button
  flex: 1

.md-table .md-table-cell .md-button .md-icon
  width: auto
  height: auto
  font-size: 24px
  top: 5px

.select-deck
.select-num
  margin-left: 5px
  margin-right: 5px
</style>
