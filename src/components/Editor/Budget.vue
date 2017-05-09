<template>
  <div class="padding fade-bg">
    <h1 class="title is-4 has-uppercase" :class="{'is-white': currentStepIndex === 3}">Statement</h1>
    <div class="slider-container" :class="{'is-primary': budget >= currentCost, 'is-danger': budget < currentCost}">
      <input type="range" :value="budget" @input="updateBudget" min=0 :max="max">
      <progress class="progress is-danger" :value="currentCost" :max="max">90%</progress>
      <div class="has-text-centered">
        <span class="has-bold" :class="{'is-white': currentStepIndex === 3}">{{currentCost | currency('THB')}}</span>
        <span class="has-bold budget-text">/{{budget | currency('THB')}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    max: {
      default: 1000000
    }
  },
  data () {
    return {
    }
  },
  computed: {
    budget () {
      return this.$store.getters['Editor/budget']
    },
    currentCost () {
      return this.$store.getters['Editor/currentCost']
    },
    currentStepIndex () {
      return this.$store.getters['Editor/currentStepIndex']
    }
  },
  methods: {
    updateBudget (el) {
      this.$store.dispatch('Editor/setBudget', parseInt(el.target.value))
    }
  }
}
</script>
<style lang='scss' scoped>
@import './../../styles/colors.scss';
  .padding{
    padding: 10px 30px;
  }
  .slider-container{
    width:100%;
    position:relative;
    padding-top:28px;
    &.is-danger{
      progress { color: $danger; }
      progress::-webkit-progress-value { background: $danger; }
      progress::-moz-progress-bar { background: $danger; }
      input[type=range]::-webkit-slider-thumb { background: $danger }
      input[type=range]::-moz-range-thumb { background: $danger }
      input[type=range]::-ms-thumb { background: $danger }
      .budget-text {
        color: $danger;
      }
    }
    &.is-primary{
      progress { color: $primary; }
      progress::-webkit-progress-value { background: $primary; }
      progress::-moz-progress-bar { background: $primary; }
      input[type=range]::-webkit-slider-thumb { background: $primary }
      input[type=range]::-moz-range-thumb { background: $primary }
      input[type=range]::-ms-thumb { background: $primary }
      .budget-text {
        color: $primary;
      }
    }
    input[type=range]{
      top:0px;
      position:absolute;
      width:100%;
      -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
      background: transparent; /* Otherwise white in Chrome */
    }
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
    }

    input[type=range]:focus {
      outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
    }

    input[type=range]::-ms-track {
      width: 100%;
      cursor: pointer;

      /* Hides the slider so custom styles can be added */
      background: transparent; 
      border-color: transparent;
      color: transparent;
    }
        /* Special styling for WebKit/Blink */
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      border: 4px solid $white;
      outline: 1px solid $black;
      height: 30px;
      width: 16px;
      background: $primary;
      cursor: pointer;
      margin-top: -10px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */  
    }

    /* All the same stuff for Firefox */
    input[type=range]::-moz-range-thumb {
      border: 4px solid $white;
      outline: 1px solid $black;
      height: 30px;
      width: 16px;
      background: $primary;
      cursor: pointer;
      margin-top: -10px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */  
    }

    /* All the same stuff for IE */
    input[type=range]::-ms-thumb {
      border: 4px solid $white;
      outline: 1px solid $black;
      height: 30px;
      width: 16px;
      background: $primary;
      cursor: pointer;
      margin-top: -10px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */  
    }
  }
  
</style>
