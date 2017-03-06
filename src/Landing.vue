<template lang="pug">
div
  div.text-center.section-b#product
    div.container
      h1 Build Decks. Test Quickly.
      br
      md-layout(md-gutter="40")
        md-layout.md-column.flex-center(md-flex="33" md-flex-xsmall="100")
          md-layout
            img(src="../static/icon/analyze.png")
          md-layout
            h2 Analyse
          md-layout
            p.lead Follow and analyse the meta to find out the best and worst decks. Find out what makes them tick.
        md-layout.md-column.flex-center(md-flex="33" md-flex-xsmall="100")
          md-layout
            img(src="../static/icon/craft.png")
          md-layout
            h2 Craft
          md-layout
            p.lead The right deck is half the battle won. Craft the correct decks and choose the right tech cards. Run simulations and find out the impact of your choices.
        md-layout.md-column.flex-center(md-flex="33" md-flex-xsmall="100")
          md-layout
            img(src="../static/icon/retina.svg")
          md-layout
            h2 Test
          md-layout
            p.lead 10 rounds of control warrior to find out your tech choice was bad? Simulate it and reduce testing time.

  div.text-center.section-a#vision
    div.container
      md-layout(md-gutter="24")
        md-layout.md-column(md-flex="50" md-flex-xsmall="100")
          h2 Premium Deck Builder
          p.lead.
            Deck building is a core part of the game that is painful and slow. We want to refine this process.
            The vast amount of cards available means some potentially good cards gets forgotten in the process.
            Our data driven analysis will surface all good combinations, creating visibility for hidden combinations.
        md-layout.md-column(md-flex="50" md-flex-xsmall="100")
          img(src="../static/manacurve.png" style="margin: auto")
          
  div.text-center.section-b
    div.container
      md-layout(md-gutter="24")
        md-layout.md-column(md-flex="50" md-flex-xsmall="100")
          img(src="../static/ipad.png" style="margin:auto")
        md-layout.md-column(md-flex="50" md-flex-xsmall="100")
          h2 Rapid testing
          p.lead.
            Deck testing is a long and laborious process of finding the right mix of matchups to test against.
            With our tool, get preliminary results and make the tweaks even before playing.
            We use a machine learned algorithm to run simulations of your deck against a specified lineup, testing out your tech choices in a fast and efficient manner.

  div.text-center.section-a#try
    div.container
      md-layout.md-column.flex-center(md-flex="50")
        h2 Try it now!
        router-link.md-raised.md-primary(tag="md-button" to="/play") Get Started

  div.text-center.section-c#signup
    div.container
      md-layout.md-column.flex-center(md-flex="50")
        h2 Interested?
        p.lead Sign up for updates!
        router-link.md-raised.md-primary(tag="md-button" to="/sign") Sign Up!

  div.section-a#contact
    div.container
      md-layout.md-column.flex-center(md-flex="50")
        h2 Contact Us
        p Drop us a mail at
        p junxiang@randomflower.com

</template>

<script>
export default {
  name: 'landing-content',
  data () {
    return {
    }
  }
}
</script>