<template lang="pug">
div
    div#preload
    div.intro-header
        md-layout.intro-text(md-align="center")
            h1 Random Flower
            h3 Deck Analysis Powered by Artificial Intelligence


</template>

<script>
export default {
  name: 'app',
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
    position: absolute
    width: 100%
    top: 20%
    display: block
    text-align: center

.intro-text > h1
    font-size: 80px
    font-weight: 300
    letter-spacing: 6px

.intro-text > h3
    font-size: 20px
    font-weight: 300
</style>