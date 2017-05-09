<template>
  <div>
    <h1 class="title triangle has-text-centered">Culture</h1>
    <section>
      <div class="container">
        <div class="columns">
          <div class="column is-8">
            <blog-list></blog-list>
          </div>
          <div class="column">
            <ads-list></ads-list>
          </div>
        </div>
      </div>
      
    </section>
    <footerbar></footerbar>
  </div>
</template>
<script>
import BlogList from '@/components/Culture/BlogList.vue'
import AdsList from '@/components/Culture/AdsList.vue'
import Footerbar from '@/components/Footerbar'
export default {
  components: {
    BlogList,
    AdsList,
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
