<template>
    
  <div class="box">
    <figure class="image">
      <img :src="blog.thumbnail" alt="Image">
    </figure>
    <h1 class="title blog-title has-uppercase">{{blog.title}}</h1>
    <div class="blog-subtitle has-uppercase">
      {{blog.author}} 
      <small> 
        <span class="icon"><i class="fa fa-times"></i></span>
        {{blog.created | moment("MMMM Do YYYY")}}
      </small>
    </div>
    <div class="content">
      {{blog.content}}
    </div>
  </div>
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
  .blog-title{
    font-weight:bolder;
    padding-top:10px;
    margin-bottom:0px;
  }
  .blog-subtitle{
    padding: 10px 0;
  }
  .box:last-child{
    margin-bottom:20px;
  }
  .icon .fa{
    font-size:0.6em;
  }
</style>
