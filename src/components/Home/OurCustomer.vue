<template>
  <div class="section" style="padding:0;margin:0;">
    <section class="section">
      <div class="container">
        <h1 class="title has-text-centered has-uppercase">Our customer</h1>
      </div>
      
    </section>
    <div class="container">
      <image-compare before="static/img/compare/after.png" after="static/img/compare/before.png" class="container" style=""/>
      <p class="has-text-centered">
        Hold left click and drag to see the differences
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang='scss' scoped>
@import './../../styles/colors.scss';
  .section {
    background-color: $background;
  }
</style>
