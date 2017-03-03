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
  border-style: solid

#splash
  border-style: solid
  border-color: yellow

#navi
  border-style: solid
  border-color: red

#content
  border-style: solid
  border-color: green

#footer
  border-style: solid
  border-color: blue

</style>
