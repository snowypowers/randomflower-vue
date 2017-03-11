<template lang="pug">
div#app
  router-view#splash(name="splash")
  router-view#navi(name='navi')
  router-view#content(name="content")
  router-view#footer(name="footer")
  md-snackbar(md-position="top right" md-duration="2000" ref="infobar")
    span {{ infoMsg }}
    md-button(@click.native="$refs.infobar.close()") OK
  md-snackbar(md-position="top right" md-duration="2000" ref="errorbar")
    md-icon.md-warn error_outline
    span {{ errorMsg }}
    md-button(@click.native="$refs.errorbar.close()") OK
</template>

<script>
export default {
  name: 'App',
  data () {
    return {

    }
  },
  computed: {
    errorMsg() {
      return this.$store.state.msg.error
    },
    infoMsg() {
      return this.$store.state.msg.info
    }
  },
  watch: {
    errorMsg(newValue) {
      if (newValue != "") this.$refs.errorbar.open()
    },
    infoMsg(newValue) {
      if (newValue != "") this.$refs.infobar.open()
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family: Roboto, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

h1
  font-size: 80px
  line-height:80px

h2
  font-size: 64px
  line-height:64px


h3
  font-size: 48px
  line-height:48px

h4
  font-size: 24px
  line-height:24px

p
  font-size: 16px

.lead
  margin: 10px 0
  line-height: 1.5
  font-weight:300

.text-center
  text-align: center

.flex-center
  align-items: center
  justify-content: center

.section-a
  background-color: #f8f8f8
  padding: 90px 0
  min-height: 300px

.section-b
  background-color: #ffffff
  padding: 90px 0
  min-height: 300px

.section-c
  background-color: #34495e
  padding: 90px 0
  min-height: 300px
  color: white

.section-f
  padding: 10px 0 90px 0
  background-color: #34495e
  color: white

img
  margin: auto

.container
  @media (min-width: 600px)
    margin: 0 5%

.container-fluid
  width:100%
  @media (min-width: 600px)
    margin: 0 5%

.fill-screen
  height: 100vh

.no-pad
  padding: 0 0

.no-margin
  margin: 0 0
</style>
