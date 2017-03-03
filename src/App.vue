<template lang="pug">
div#app
    router-view#splash(name="splash")
    router-view#navi(name='navi')
    router-view#content(name="content")
    router-view#footer(name="footer")
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
#app
  font-family: Roboto, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

.text-center
  text-align: center

.flex-center
  align-items: center
  justify-content: center

.section-a
  background-color: #f8f8f8
  padding: 90px 0

.section-b
  background-color: #ffffff
  padding: 90px 0

@media (min-width: 600px)
  .container
    margin: 5wh 0
</style>
