<template>
  <section class="section" id="whoarewe">
    <div class="container">
      <div class="columns">
        <div class="column is-5">
          <h1 class="title is-1 has-bold">
            <div>WHO ARE WE?</div>
            <div>WHY ARE WE REDESIGN?</div>
          </h1>
          <p>
            If you to customize your car without a wasting any money? Why don’t you try our services? You can easily modify your car by only a few clicks on "Customize " option. We were inspired to redesign vehicles among car modification society around the world. We do believe in vehicle aesthetic will reflect owner personalities and it could changes the whole society for better living. Our goal isn’t to build a car, but we aim to create a piece of art.
          </p>
        </div>
        <div class="column" style="padding:50px;">
          <youtube class="youtube" video-id="MvH3oC5R71E"></youtube>
        </div>
      </div>
      <div class="img">
        <img src="/static/img/who-are-we.png">
      </div>
    </div>
  </section>
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
  section{
    color: white;
    background-color: black;
    .title{
      color: white;
    }
    .img{
      img{;
        width:100%;
      }
    }
  }
</style>
