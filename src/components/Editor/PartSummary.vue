<template>
  <div class="summary has-bold fade-bg" :class="{'is-white': currentStepIndex === 3}">
    <table class="summary">
      <tr>
        <td>Subtotal</td>
      </tr>
      <tr v-if="currentCar.parts.color">
        <td>Color</td>
        <td class="has-text-right">{{currentCar.parts.color.price | currency('THB')}}</td>
      </tr>
      <tr v-if="currentCar.parts.rims">
        <td>Rims</td>
        <td class="has-text-right">{{currentCar.parts.rims.price | currency('THB')}}</td>
      </tr>
      <tr v-if="currentCar.parts.spoiler">
        <td>Spoiler</td>
        <td class="has-text-right">{{currentCar.parts.spoiler.price | currency('THB')}}</td>
      </tr>
      <tr v-if="currentCar.parts.bodykit">
        <td>Bodykit</td>
        <td class="has-text-right">{{currentCar.parts.bodykit.price | currency('THB')}}</td>
      </tr>
      <tr v-if="currentCar.parts.decal">
        <td>Decal</td>
        <td class="has-text-right">{{currentCar.parts.decal.price | currency('THB')}}</td>
      </tr>
      <tr v-if="currentCar.parts.skirts">
        <td>Skirts</td>
        <td class="has-text-right">{{currentCar.parts.skirts.price | currency('THB')}}</td>
      </tr>
      <tr v-if="currentCar.parts.hood">
        <td>Hood</td>
        <td class="has-text-right">{{currentCar.parts.hood.price | currency('THB')}}</td>
      </tr>
      <tr v-if="currentCar.parts.sidemirror">
        <td>Sidemirror</td>
        <td class="has-text-right">{{currentCar.parts.cosidemirrorlor.price | currency('THB')}}</td>
      </tr>
      <tr v-if="currentCar.parts.grill">
        <td>Grill</td>
        <td class="has-text-right">{{currentCar.parts.grill.price | currency('THB')}}</td>
      </tr>
      <tr v-if="currentCar.parts.lib">
        <td>Lib</td>
        <td class="has-text-right">{{currentCar.parts.lib.price | currency('THB')}}</td>
      </tr>
      <tr v-if="currentCar.parts.sticker">
        <td>Sticker</td>
        <td class="has-text-right">{{currentCar.parts.sticker.price | currency('THB')}}</td>
      </tr>
      <tr v-if="currentCar.parts.other">
        <td>Other</td>
        <td class="has-text-right">{{currentCar.parts.other.price | currency('THB')}}</td>
      </tr>
    </table>
    
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    currentCar () {
      return this.$store.getters['Editor/currentCar']
    },
    currentStepIndex () {
      return this.$store.getters['Editor/currentStepIndex']
    }
  }
}
</script>
<style lang='scss' scoped>
  .summary{
    width: 100%;
    padding: 30px;
  }
</style>
