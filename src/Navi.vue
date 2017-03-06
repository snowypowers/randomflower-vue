<template lang="pug">
div(v-bind:class="{stickTop: isSticky}")
  md-toolbar
    md-avatar.md-primary
      md-icon favorite border
    router-link.md-title#homeButton(to="/")
      h2.md-title.md-hide-medium-and-up RF
      h2.md-title.md-hide-small Random Flower
    md-layout.fill
    md-menu(md-direction="bottom left")
      md-button(md-menu-trigger).md-hide-medium-and-up
        md-icon menu
      md-menu-content
          md-menu-item Item 1
          md-menu-item Item 2
          md-menu-item Item 3
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

.md-toolbar
    @media(min-width:600px)
        padding: 0 5%
.fill
    flex-grow: 1
#navi
    width: 100%
    z-index: 10

#homeButton
    text-align: left

</style>
