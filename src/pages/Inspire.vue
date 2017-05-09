<template>
  <div>
    <h1 class="title triangle has-text-centered">Inspire</h1>
    <section class="section">
       <car-list class="car-list"></car-list>
    </section>
    <section class="section">
      <video-list></video-list>
    </section>
    <footerbar></footerbar>
  </div>
</template>
<script>
import CarList from '@/components/Inspire/CarList'
import VideoList from '@/components/Inspire/VideoList'
import Footerbar from '@/components/Footerbar'
export default {
  components: {
    CarList,
    VideoList,
    Footerbar
  },
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('setDarkMode', true)
  }
}
</script>
<style lang='scss' scoped>
</style>
