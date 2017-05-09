<template>
  <section class="section">
    <div class="section-background"></div>
    <div class="section-content-bottom">
      <div class="container">
        <img class="" src="/static/img/customize/welcome.png">
        <p>
          This website is a senior project for communication design programm and is for non-profit purposes only.  All design trademarked, branded and images are property of their respect owner. All videos in website were given credit to Mike koziel, a youtuber who’ve been associated in car society. In this session, it is created for users to understand the process of vehicle customize and educational purpose only.
        </p>
        <div style="padding-top:30px;">
          <router-link class="build-btn button is-primary is-outlined more-padding more-margin" :to="{name:'Home'}">Back</router-link>
          <router-link class="build-btn button is-primary is-outlined more-padding more-margin" :to="{name:'Editor'}">Next</router-link>
        </div>
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
section {
  background-color: $black;
  height: 100vh;
  text-align: center;
  display: table;
  width:100vw;
  .section-content-bottom{
    color: white;
    display: table-cell; 
    vertical-align: bottom;
  }
  .section-background{
    position:absolute;
    top:0px;
    left:0px;
    right:0px;
    bottom:0px;
    filter:blur(10px);
    background-image: url('/static/img/customize/bg.jpg');
    background-size:cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
}
.blur{
  filter:blur(20px);
}
</style>
