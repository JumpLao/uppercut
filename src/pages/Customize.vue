<template>
  <div>
    <banner style="margin-top:-50px;"></banner>
  </div>
</template>
<script>
import Banner from '@/components/Customize/CustomizeHeader'

export default {
  components: {
    Banner
  },
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('setDarkMode', false)
  }
}
</script>
<style lang='scss'>
</style>
