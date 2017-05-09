<template>
  <section class="section" :style="{'background-image': 'url('+blog.cover+')'}">
    <div class="section-content-bottom">
      <div class="container">
        <h1 class="title has-uppercase">
          {{blog.title}}
        </h1>
      </div>
    </div>
    
  </section>
</template>
<script>
export default {
  props: {
    blog: {}
  },
  data () {
    return {
    }
  }
}
</script>
<style lang='scss' scoped>
@import './../../styles/colors.scss';
section {
  background-color: $black;
  height: calc(100vh - 50px);
  
  background-size:cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: table;
  width:100vw;
  .section-content-bottom{
    display: table-cell; 
    vertical-align: bottom;
    .title{
      color: white;
    }
    .icon{
      color: white;
    }
  }
}
</style>
