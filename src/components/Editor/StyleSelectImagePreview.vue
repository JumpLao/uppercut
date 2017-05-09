<template>
    <div v-if="Object.keys(currentCar.parts).length > 0" class="preview-image-container" :style="{'background-image': `url(/static/img/editor/styles/${currentCar.style.replace(/\s+/g, '').toLowerCase()}.jpg)`}">
    </div>
    <div v-else class="preview-image-container" :style="{'background-image': `url(/static/img/editor/styles/notavailable.png)`}">
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
    }
  }
}
</script>
<style lang='scss' scoped>
  .preview-image-container{
    width:100%;
    height:100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position:relative;
  }
</style>
