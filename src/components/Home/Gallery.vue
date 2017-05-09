<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-uppercase has-text-centered">Gallery</h1>
      <div class="columns">
        <div class="column is-4" v-for="img in imgs">
          <lightbox :src="img">
            <img :src="img">
          </lightbox>
        </div>
      </div>
    </div>
    
  </section>
</template>
<script>
import Lightbox from 'vue-lightbox'
export default {
  components: {
    Lightbox
  },
  data () {
    return {
      imgs: ['/static/img/gallery/1.png', '/static/img/gallery/2.png', '/static/img/gallery/3.png']
    }
  }
}
</script>
<style lang='scss' scoped>
@import './../../styles/colors.scss';
  section{
    color: white;
    background-color: black;
    .title{
      color: white;
    }
  }
</style>
