<template lang="pug">
div#app {{message}}
  div#navi
    router-link(to="/foo") Go foo! 
    br
    router-link(to="/bar") Go bar!
  router-view
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      message: "Hello World"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border-style: solid;
}
</style>
