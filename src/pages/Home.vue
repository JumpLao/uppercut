<template>
  <div style="position:relative;">
    <Banner style="margin-top:-50px;"></Banner>
    <who-are-we></who-are-we>
    <gallery></gallery>
    <div class="section-break"></div>
    <our-customer></our-customer>
    <events></events>
    <scroll-top></scroll-top>
    <footerbar></footerbar>
  </div>
</template>
<script>
import Banner from '@/components/Home/Banner'
import WhoAreWe from '@/components/Home/WhoAreWe'
import Gallery from '@/components/Home/Gallery'
import OurCustomer from '@/components/Home/OurCustomer'
import Events from '@/components/Home/Events'
import ScrollTop from '@/components/ScrollTop'
import Footerbar from '@/components/Footerbar'
export default {
  components: {
    Banner,
    WhoAreWe,
    Gallery,
    OurCustomer,
    Events,
    ScrollTop,
    Footerbar
  },
  created () {
    this.$store.dispatch('setDarkMode', false)
  },
  data () {
    return {
    }
  }
}
</script>
<style lang='scss' scoped>
@import './../styles/colors.scss';
.section-break{
  height:30px;
  background-color: $primary
}
</style>
