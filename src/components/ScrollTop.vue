<template>
  <div>
    <button class="button scroll-top-button" @click="scrollTop()">
      <span class="icon">
        <i class="fa fa-chevron-up"></i>
      </span>
    </button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      thankActive: false
    }
  },
  methods: {
    scrollTop () {
      document.body.scrollTop = 0
    }
  }
}
</script>
<style lang='scss' scoped>
@import "./../styles/colors.scss";
.scroll-top-button{

  position: absolute;;
  right:20px;
  bottom:40px;
  z-index:100;
  background-color: transparent;
  border: none;
}
</style>
