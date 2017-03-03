<template lang="pug">
md-toolbar.md-dense#navi
    md-button.md-icon-button
        md-icon menu
    h2.md-title(style="flex: 1") RF
    md-button.md-raised Add
    md-button.md-raised Remove
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

<style lang="stylus">
#navi
    position: relative
    width: 100%
    z-index: 999
    color: #34495e

.toTop
    position: fixed
    top: 0px


</style>