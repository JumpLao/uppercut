<template>
  <div>
    <div class="preview-image-container cover" :style="{'background-image': `url(/static/img/editor/light.png)`}">
    </div>
    <div class="preview-image-container cover" :style="{'background-image': `url(/static/img/editor/smoke.png)`}">
    </div>
    <div class="preview-image-container car" :style="{'background-image': `url(/static/img/editor/${currentCar.brand}/${currentCar.model}/${currentCar.year}/${currentCar.type}.png)`}">
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
    background-size: contain;
    position:absolute;
    top:0px;
    left:0px;
    &.cover{
      background-size: cover;
    }
    &.car{
      background-size: contain;
      background-position: center center;
    }
  }
</style>
