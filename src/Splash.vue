<template lang="pug">
div
    div#preload
    div.intro-header
        md-layout.intro-text(md-align="center")
            div.md-display-4(style="color: white") Random Flower
            div.md-display-2(style="color: white") Deck Analysis Powered by Artificial Intelligence


</template>

<script>
export default {
  name: 'Splash',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="stylus">
.intro-header
    height: 100vh
    padding-top: 50px
    padding-bottom: 50px
    color: #f8f8f8
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(../static/introbg.png) no-repeat center center;
    background-size: cover
    text-align: center

.intro-text
    padding: 0 15px
    position: relative
    width: 100%
    top: 20%
    display: block
    text-align: center
    text-shadow: 4px 4px #0f0f0f
</style>