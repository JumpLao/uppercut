<template>
  <div class="padding">
    <button class="button is-outlined  more-padding more-margin" :class="{'is-primary':currentStepIndex==1 && currentCar.parts.color, 'is-dark':currentStepIndex!==1 || !currentCar.parts.color}" @click="prevStep()" :disabled="!prevStepEnable" v-if="currentStepIndex!=0">Back</button>
    <button class="button is-outlined  more-padding more-margin" :class="{'is-primary':currentStepIndex==1 && currentCar.parts.color, 'is-dark':currentStepIndex!==1 || !currentCar.parts.color}" @click="nextStep()" :disabled="!nextStepEnable" v-if="currentStepIndex!=4">Next</button>
    <button class="button is-outlined  more-padding more-margin" :class="{'is-primary':currentStepIndex==1 && currentCar.parts.color, 'is-dark':currentStepIndex!==1 || !currentCar.parts.color}" @click="done()" v-if="currentStepIndex==4">Done</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    nextStepEnable () {
      return this.$store.getters['Editor/nextStepEnable']
    },
    prevStepEnable () {
      return this.$store.getters['Editor/prevStepEnable']
    },
    currentStepIndex () {
      return this.$store.getters['Editor/currentStepIndex']
    },
    currentCar () {
      let car = this.$store.getters['Editor/currentCar']
      console.log(car)
      return car
    }
  },
  methods: {
    nextStep () {
      this.$store.dispatch('Editor/nextStep')
    },
    prevStep () {
      this.$store.dispatch('Editor/prevStep')
    },
    done () {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
