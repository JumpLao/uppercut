<template>
  <section class="section">
    <div class="section-content-bottom">
      <router-link class="build-btn button is-primary is-outlined" :to="{name:'Customize'}">Build your own</router-link>
    </div>
    <div class="absolute-bottom-right" @click="scrollTo('whoarewe')">
      <div class="">
        <span class="icon">
          <i class="fa fa-chevron-down"></i>
        </span> Explore
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    scrollTo (id) {
      let top = document.getElementById(id).offsetTop
      document.body.scrollTop = top
    }
  }
}
</script>
<style lang='scss' scoped>
@import './../../styles/colors.scss';
section {
  background-color: $black;
  height: 100vh;
  background-image: url('/static/img/home-banner-bg.jpg');
  background-size:cover;
  background-position: center center;
  background-repeat: no-repeat;
  text-align: center;
  display: table;
  position: relative;
  width:100vw;
  .section-content-bottom{
    display: table-cell; 
    vertical-align: bottom;
  }
  .absolute-bottom-right{
    position:absolute;
    bottom:20px;
    right:20px;
    color: white;
  }
}
</style>
