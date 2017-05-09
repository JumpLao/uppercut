<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{blog.title}}</h1>
      <h2 class="subtitle">{{blog.subtitle}}</h2>
      <div v-for="(b, index) in blog.body" :key="index"> 
        <p v-if="b.type==='paragraph'">
          {{b.data}}
        </p>
        <div v-if="b.type==='images'" class="columns">
          <div class="column" v-for="(img, index) in b.data" :key="index">
            <lightbox :src="img">
              <img :src="img">
            </lightbox>
          </div>
        </div>
        <br>
      </div>
      <section class="">
        <div class="has-text-centered is-black">
          <router-link class="button" :to="{name:'Culture'}">Back</router-link>
        </div>
      </section>
    </div>
  </section>
</template>
<script>
import Lightbox from 'vue-lightbox'
export default {
  components: {
    Lightbox
  },
  props: {
    blog: {}
  },
  data () {
    return {
    }
  }
}
</script>
<style lang='scss'>
</style>
