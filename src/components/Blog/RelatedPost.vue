<template>
  <section class="section">
    <div class="container">
      <h2 class="title has-uppercase">Related posts</h2>
      <div class="columns">
        <div class="column is-one-quarter" v-for="(post, index) in posts" :key="index">
          <figure class="image is-16by9">
            <img :src="post.cover">
          </figure>
          <small class="has-uppercase has-bold">
            {{post.title}}
          </small>
        </div>
      </div>
    </div>
    
  </section>
</template>
<script>
export default {
  props: {
    posts: {}
  },
  data () {
    return {
    }
  }
}
</script>
<style lang='scss'>
</style>
