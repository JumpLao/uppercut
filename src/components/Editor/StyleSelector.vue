<template>
  <div class="padding has-text-centered">
    <div class="steps">
      <button class="button is-link navigation" @click="prev()" :disabled="!enablePrev">
        <span class="icon">
          <i class="fa fa-chevron-left"></i>
        </span>
      </button>
      <div class="step" :class="{active: index==currentStyleIndex}" v-for="(style, index) in styles" :key="index">
      </div>
      <button class="button is-link navigation" @click="next()" :disabled="!enableNext">
        <span class="icon">
          <i class="fa fa-chevron-right"></i>
        </span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    let currentCar = this.$store.getters['Editor/currentCar']
    let styleIndex = 0
    if (currentCar.brand) {
      styleIndex = this.$store.getters['Editor/styles'].map((style) => { return style.style }).indexOf(currentCar.style)
    }
    return {
      currentStyleIndex: styleIndex
    }
  },
  computed: {
    cars () {
      return this.$store.getters['Editor/cars']
    },
    currentCar () {
      return this.$store.getters['Editor/currentCar']
    },
    styles () {
      return this.$store.getters['Editor/styles'].map((style) => { return style.style })
    },
    enablePrev () {
      return this.currentStyleIndex > 0
    },
    enableNext () {
      return this.currentStyleIndex < (this.styles.length - 1)
    }
  },
  methods: {
    next () {
      this.currentStyleIndex++
      let style = this.styles[this.currentStyleIndex]
      this.$store.dispatch('Editor/setStyle', style)
    },
    prev () {
      this.currentStyleIndex--
      let style = this.styles[this.currentStyleIndex]
      this.$store.dispatch('Editor/setStyle', style)
    }
  }
}
</script>
<style lang='scss' scoped>
@import './../../styles/colors.scss';
.padding{
  padding: 30px;
  display: inline-block;
}
.step-title{
  padding: 20px 0;
  .title{
    background-color: $black;
    color: $white;
    display: inline-block;
    padding:10px;
  }
}
.navigation{
  display:inline-block;
  color: $primary;
  .icon{
    height: 0.7em;
  }
  text-decoration:none;
  &:hover{
    background-color:$primary;
    color:white;
  }
}
.steps{
  white-space:nowrap;
  position:relative;
  display: inline-block;
  .line{
    position:absolute;
    top:0px;
    height:50%;
    width: 100%;
    border-bottom: 2px solid $primary;
    z-index: -1;
  }
  :not(:first-child){
    margin-left:16px;
  }
  .step{
    background-color: $white;
    display: inline-block;
    width:12px;
    height:12px;
    text-align: center;
    border-radius:50%;
    vertical-align: middle;
    line-height:38px;
    &.active{
      width:18px;
      height:18px;
      background-color:$primary;
      color: $black;
      font-weight:bolder;
    }
  }
}
</style>
