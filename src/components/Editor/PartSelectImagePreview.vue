<template>
  <div>
    <div class="preview-image-container" v-if="currentCar.parts.spoiler" :style="{'background-image': `url(/static/img/editor/${currentCar.brand}/${currentCar.model}/${currentCar.year}/${currentCar.type}/${currentCar.style.replace(/\s+/g, '').toLowerCase()}/spoiler/${currentCar.parts.spoiler.filename || currentCar.parts.spoiler.name }.png)`}">
    </div>
    <div class="preview-image-container" :style="{'background-image': `url(/static/img/editor/${currentCar.brand}/${currentCar.model}/${currentCar.year}/${currentCar.type}/${currentCar.style.replace(/\s+/g, '').toLowerCase()}/color/${currentCar.parts.color.filename || currentCar.parts.color.name}.png)`}">
    </div>
    <div class="preview-image-container" v-if="currentCar.parts.bodykit" :style="{'background-image': `url(/static/img/editor/${currentCar.brand}/${currentCar.model}/${currentCar.year}/${currentCar.type}/${currentCar.style.replace(/\s+/g, '').toLowerCase()}/bodykit/${currentCar.parts.bodykit.filename || currentCar.parts.bodykit.name }.png)`}">
    </div>
    <div class="preview-image-container" v-if="currentCar.parts.decal" :style="{'background-image': `url(/static/img/editor/${currentCar.brand}/${currentCar.model}/${currentCar.year}/${currentCar.type}/${currentCar.style.replace(/\s+/g, '').toLowerCase()}/decal/${currentCar.parts.decal.filename || currentCar.parts.decal.name }.png)`}">
    </div>
    <div class="preview-image-container" v-if="currentCar.parts.rims" :style="{'background-image': `url(/static/img/editor/${currentCar.brand}/${currentCar.model}/${currentCar.year}/${currentCar.type}/${currentCar.style.replace(/\s+/g, '').toLowerCase()}/rims/${currentCar.parts.rims.filename || currentCar.parts.rims.name }.png)`}">
    </div>
    <div class="preview-image-container" v-if="currentCar.parts.skirts" :style="{'background-image': `url(/static/img/editor/${currentCar.brand}/${currentCar.model}/${currentCar.year}/${currentCar.type}/${currentCar.style.replace(/\s+/g, '').toLowerCase()}/skirts/${currentCar.parts.skirts.filename || currentCar.parts.skirts.name }.png)`}">
    </div>
    <div class="preview-image-container" v-if="currentCar.parts.hood" :style="{'background-image': `url(/static/img/editor/${currentCar.brand}/${currentCar.model}/${currentCar.year}/${currentCar.type}/${currentCar.style.replace(/\s+/g, '').toLowerCase()}/hood/${currentCar.parts.hood.filename || currentCar.parts.hood.name }.png)`}">
    </div>
    <div class="preview-image-container" v-if="currentCar.parts.bodykit" :style="{'background-image': `url(/static/img/editor/${currentCar.brand}/${currentCar.model}/${currentCar.year}/${currentCar.type}/${currentCar.style.replace(/\s+/g, '').toLowerCase()}/bodylit/${currentCar.parts.bodykit.filename || currentCar.parts.bodykit.name }.png)`}">
    </div>
    <div class="preview-image-container" v-if="currentCar.parts.sidemirror" :style="{'background-image': `url(/static/img/editor/${currentCar.brand}/${currentCar.model}/${currentCar.year}/${currentCar.type}/${currentCar.style.replace(/\s+/g, '').toLowerCase()}/sidemirror/${currentCar.parts.sidemirror.filename || currentCar.parts.sidemirror.name }.png)`}">
    </div>
    <div class="preview-image-container" v-if="currentCar.parts.grill" :style="{'background-image': `url(/static/img/editor/${currentCar.brand}/${currentCar.model}/${currentCar.year}/${currentCar.type}/${currentCar.style.replace(/\s+/g, '').toLowerCase()}/grill/${currentCar.parts.grill.filename || currentCar.parts.grill.name }.png)`}">
    </div>
    <div class="preview-image-container" v-if="currentCar.parts.lib" :style="{'background-image': `url(/static/img/editor/${currentCar.brand}/${currentCar.model}/${currentCar.year}/${currentCar.type}/${currentCar.style.replace(/\s+/g, '').toLowerCase()}/lib/${currentCar.parts.lib.filename || currentCar.parts.lib.name }.png)`}">
    </div>
    <div class="preview-image-container" v-if="currentCar.parts.sticker" :style="{'background-image': `url(/static/img/editor/${currentCar.brand}/${currentCar.model}/${currentCar.year}/${currentCar.type}/${currentCar.style.replace(/\s+/g, '').toLowerCase()}/sticker/${currentCar.parts.sticker.filename || currentCar.parts.sticker.name }.png)`}">
    </div>
    <div class="preview-image-container" v-if="currentCar.parts.other" :style="{'background-image': `url(/static/img/editor/${currentCar.brand}/${currentCar.model}/${currentCar.year}/${currentCar.type}/${currentCar.style.replace(/\s+/g, '').toLowerCase()}/other/${currentCar.parts.other.filename || currentCar.parts.other.name }.png)`}">
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
    background-position: center 20vh;
    background-size: 900px;
    position:absolute;
    &.cover{
      background-size:cover;
    }
  }
</style>
