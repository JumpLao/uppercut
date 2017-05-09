<template>
  <div class="padding fade-bg">
    <div class="step-title">
      <h1 class="title is-5 has-uppercase" >{{currentStep.name}}</h1>
    </div>
    <div class="steps">
      <div class="step" :class="{active: index==currentStepIndex}" v-for="(step, index) in steps" :key="index">
        {{index+1}}
      </div>
      <div class="line"></div>
    </div>
    <div v-if="currentStepIndex !== 3" class="description" :class="{'text-white': currentStepIndex===1 && ['Kanjo','Rocket Bunny','Hella Flush'].indexOf(currentStyle.style)===-1}">
      <small v-if="currentStepIndex==0">
        Welcome to the first session. You’ll be able to choose
from many different types of car, similar car that 
you have or you wish to. We offer customizations
in various ways. It’s time to pick your car!
      </small>
      <small v-if="currentStepIndex==1">
        In this session, user are able to pick the 
right styles for youself and your car.
Each of the style has a vrious combination
from difference cultures and performance
uses in more aestheric ways. 
      </small>
      <small v-if="currentStepIndex==2">
        In your garage you can claim parts 
found while exploring, Select a vehicle color 
and Visually customize car. Create or edit wraps
and tune your handling style. You can begin with 
set up your statement before customize your car.
It’s would be easily to controll your budget.
      </small>
      <small v-if="currentStepIndex==4">
        This is the last session, it’s times for you
to choose your helpers from contact list.
They all have great difference kind of
abilities. If you are worry about the distance,
you can find the nearest dealers on map for 
a few second by clicking. You dream is
close enough, it’s time to begin the
new journey.
      </small>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    currentStep () {
      return this.$store.getters['Editor/currentStep']
    },
    currentStepIndex () {
      return this.$store.getters['Editor/currentStepIndex']
    },
    steps () {
      return this.$store.getters['Editor/steps']
    },
    nextStepEnable () {
      return this.$store.getters['Editor/nextStepEnable']
    },
    prevStepEnable () {
      return this.$store.getters['Editor/prevStepEnable']
    },
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
  padding: 0px 30px 30px 30px;
  display: inline-block;
}
.description{
  max-width:300px;
  padding:10px;
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
.steps{
  white-space:nowrap;
  position:relative;
  display: inline-block;
  top: 0;
  left: 0; 
  z-index: 0; 
  .line{
    position:absolute;
    top:0px;
    height:50%;
    width: 100%;
    border-bottom: 2px solid $primary;
    z-index: -1;
  }
  .steps-container{
    :first-child{
      margin-right:20px;
    }
  }
  .step:not(:first-child){
    margin-left:15px;
  }
  .step{
    border: 5px solid $primary;
    background-color: $grey;
    color: $white;
    display: inline-block;
    width:40px;
    height:40px;
    text-align: center;
    border-radius:50%;
    vertical-align: middle;
    line-height:30px;
    &.active{
      width:60px;
      height:60px;
      line-height:48px;
      font-size:24px;
      background-color:$white;
      color: $black;
      font-weight:bolder;
    }
  }
}
.text-white{
  color: white !important;
}
</style>
