<template>
  <div class="container">
    <part-picker v-if="currentPart.part === 'Color'" part="color"></part-picker>
    <part-picker v-if="currentPart.part === 'Decal'" part="decal"></part-picker>
    <part-picker v-if="currentPart.part === 'Rims'" part="rims"></part-picker>
    <part-picker v-if="currentPart.part === 'Skirts'" part="skirts"></part-picker>
    <part-picker v-if="currentPart.part === 'Hood'" part="hood"></part-picker>
    <part-picker v-if="currentPart.part === 'Body Kit'" part="bodykit"></part-picker>
    <part-picker v-if="currentPart.part === 'Sticker'" part="sticker"></part-picker>
    <part-picker v-if="currentPart.part === 'Spoiler'" part="spoiler"></part-picker>
    <part-picker v-if="currentPart.part === 'Side Mirror'" part="sidemirror"></part-picker>
    <part-picker v-if="currentPart.part === 'Grill'" part="grill"></part-picker>
    <part-picker v-if="currentPart.part === 'Libs'" part="lib"></part-picker>
    <part-picker v-if="currentPart.part === 'Bodykit'" part="bodykit"></part-picker>
    <part-picker v-if="currentPart.part === 'Other'" part="other"></part-picker>
  </div>
</template>
<script>
import PartPicker from './PartPicker'
export default {
  components: {
    PartPicker
  },
  data () {
    return {
    }
  },
  computed: {
    currentPart () {
      return this.$store.getters['Editor/currentPart']
    }
  }
}
</script>
<style lang='scss'>
</style>
