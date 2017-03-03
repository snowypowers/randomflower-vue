<template lang="pug">
div#app {{message}}
    div#splash
      router-view.splash(name="splash")
    div#navi
      router-view.navi(name='navi')
    div#content
      router-view.content(name="content")
    div#footer
      router-view.footer(name="footer")
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

#splash {
  border-style: solid;
  border-color: yellow;
}

#navi {
  border-style: solid;
  border-color: red;
}

#content {
  border-style: solid;
  border-color: green;
}

#footer {
  border-style: solid;
  border-color: blue;
}

</style>
