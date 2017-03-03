<template lang="pug">
div.container
    md-toolbar#navi
        md-avatar.md-primary
            md-icon favorite border
        h2.md-title.md-hide-medium-and-up RF
        h2.md-title.md-hide-small Random Flower
        md-button.md-hide-medium-and-up
            md-icon menu
</template>

<script>
export default {
  name: 'Navi',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
#navi
    position: relative
    width: 100%
    z-index: 999

h2
    flex: 1
    text-align: left

.toTop
    position: fixed
    top: 0px


</style>