<template lang="pug">
div
  div.text-center.section-b#how
    div.container
      h1 How this works
      br
      md-layout(md-gutter="40")
        md-layout.md-column.flex-center(md-flex="33" md-flex-xsmall="100")
          md-layout
            img(src="../static/icon/analyze.png")
          md-layout
            h2 Build
          md-layout
            p.lead Craft the decks that you wish to test out with our simple deck editor.
        md-layout.md-column.flex-center(md-flex="33" md-flex-xsmall="100")
          md-layout
            img(src="../static/icon/craft.png")
          md-layout
            h2 Meta
          md-layout
            p.lead Select the matchups you wish to analyze. Choose 2 decks from your crafted list and the number of games you wish to simulate.
        md-layout.md-column.flex-center(md-flex="33" md-flex-xsmall="100")
          md-layout
            img(src="../static/icon/retina.svg")
          md-layout
            h2 Submit
          md-layout
            p.lead We will process your request ASAP and get back to you through email. Once done, you will receive an email detailing the win rates and the turn profile of each deck.

  div.section-a.fill-screen#deckbuilder(style="display: flex; flex-direction: column;")
    h1 Deck Builder
    h4 Build the decks you desire to use and the opponents it will face
    md-layout
      md-layout(md-flex="33" md-flex-xsmall="100")
        DeckField#deckfield
      md-layout(md-flex="33" md-flex-xsmall="100")
        DeckEditor#hseditor
      md-layout(md-flex="33" md-flex-xsmall="100")
  div.section-c.fill-screen


</template>

<script>
import DeckField from './DeckField.vue'
import DeckEditor from './DeckEditor.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
      DeckField,
      DeckEditor
  }
}
</script>

<style lang="stylus" scoped>

</style>
