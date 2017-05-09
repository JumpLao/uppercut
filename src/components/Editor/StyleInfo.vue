<template>
  <div class="padding has-text-left fade-bg">
    <h1 class="title is-4" :class="{'text-black':['Kanjo','Rocket Bunny'].indexOf(currentStyle.style)!=-1}">{{currentStyle.style}}</h1>
    <small class="style-description" :class="{'text-black':['Kanjo','Rocket Bunny'].indexOf(currentStyle.style)!=-1}">
      {{currentStyle.description}}
    </small>
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
    currentCar () {
      return this.$store.getters['Editor/currentCar']
    },
    styles () {
      return this.$store.getters['Editor/styles']
    },
    currentStyle () {
      let self = this
      return self.styles.filter((style) => { return style.style === self.currentCar.style })[0]
    }
  }
}
</script>
<style lang='scss' scoped>
@import './../../styles/colors.scss';
.padding{
  padding: 30px 60px 30px 30px;
  display: inline-block;
  max-width: 350px;
  color: $white;
  .title{
    color: $white;
  }
}
.text-black{
  color: black !important;
}
</style>
