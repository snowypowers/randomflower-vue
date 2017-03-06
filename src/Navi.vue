<template lang="pug">
div(v-bind:class="{stickTop: isSticky}")
    md-toolbar
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
        offsetY:0,
        isSticky: false
    }
  },
  methods: {
      calculateSticky: function(e) {
          let currentY = window.scrollY
          this.isSticky = currentY > this.offsetY? true : false
      }
  },
  mounted() {
    this.offsetY = this.$el.offsetTop
  },
  created() {
      
      window.addEventListener('scroll', this.calculateSticky)
  },
  destroyed() {
      window.removeEventListener('scroll', this.calculateSticky)
  }
}
</script>

<style lang="stylus" scoped>
.stickTop
    position: fixed
    top: 0px

#navi
    width: 100%
    z-index: 999

h2
    flex: 1
    text-align: left

</style>