<template lang="pug">
div.section-f
  md-layout.container.md-column.flex-center(md-flex="50")
    p {{ footerMsg }}

</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footerMsg: 'Made with VueJS'
    }
  }
}
</script>