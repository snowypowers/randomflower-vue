<template lang="pug">
md-card.deckcard(md-with-hover=true)
  md-card-header
    md-avatar
      img(v-bind:src="classImg" alt="class")
    md-card-header-text.no-margin
      p.deckname.no-margin {{deckName}}
    md-card-actions
      md-button.md-icon-button.remove-card
        md-icon clear

</template>

<script>
export default {
  name: 'DeckCard',
  props: ['deckName', 'deckClass', 'deckNum'],
  data () {
    return {
    }
  },
  computed : {
    classImg: function() {
      return '../static/icon/classes/' + this.deckClass.toLowerCase() + '.png'
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

</style>
