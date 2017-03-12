<template lang="pug">
div
  div.text-center.section-b#how
    div.container
      h1.no-margin How this works
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

  div.section-a.fill-screen
    div.container#deckbuilder
      div.text-center.md-column
        h1.no-margin Deck Builder
        h4 Build the decks you desire to use and the opponents it will face
      md-layout
        md-layout(md-flex="33" md-flex-xsmall="100")
          DeckField#deckfield
        md-layout(md-flex="33" md-flex-xsmall="100")#hseditor
          DeckEditor
        md-layout(md-flex="33" md-flex-xsmall="100")

  div.container.section-b.fill-screen#matchups
    div.text-center.md-column
      h1.no-margin Matchups
      h4 Select your deck matchups, choose the number of matches to be simulated and click the red button to add them. There is a total limit of 1000 simulations.
    Matchups

  div.section-c#submit
    md-layout.container.text-center.md-column
      h1.no-margin Submit
      p We will get back to you with an email as soon as the simulations are done! We approximate 1 day processing for 1000 simulations.
      h4 Send the results to:
      md-layout(md-align="center")
        md-input-container(md-align="center" style="width:50%; color: white")
          label(style="color: white") Email
          md-input(style="color: white" v-model="email")
      md-layout(md-flex="30" md-flex-xsmall="100" md-align="center")
        md-button.md-raised(@click.native="submitReq" ) Submit
</template>

<script>
import DeckField from './DeckField.vue'
import DeckEditor from './DeckEditor.vue'
import Matchups from './Matchups.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      email: ""
    }
  },
  methods: {
    submitReq() {
      this.$store.dispatch('submitReq', this.email)
      this.email = ""
    }
  },
  components: {
      DeckField,
      DeckEditor,
      Matchups
  }
}
</script>

<style lang="stylus" scoped>

#deckbuilder
  display: flex
  flex-flow: column
  height:100%

#hseditor
  @media(max-width: 600px)
    height:50vh

</style>
