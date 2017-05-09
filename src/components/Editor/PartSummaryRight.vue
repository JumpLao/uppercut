<template>
  <div class="summary has-bold fade-bg">
    <div class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="/static/img/profiles/1.png">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <div class="has-uppercase">User:Name</div>
          <small class="has-uppercase">Overall review</small>
        </div>
      </div>
    </div>
    <hr>
    <div class="content has-text-left">
      <p>Exterior</p>
      <p v-if="currentCar.parts.rims">Rims Size: {{currentCar.parts.rims.spec.Size}}</p>
      <p v-if="currentCar.parts.skirts">Parts: {{currentCar.parts.skirts.name}}</p>
      <p v-if="currentCar.parts.spoiler">Spoiler: {{currentCar.parts.spoiler.name}}</p>
      <p v-if="currentCar.parts.color">Color: {{currentCar.parts.color.name}}</p>
    </div>
    <br>
    <div class="content has-text-left">
      <p>Suspension</p>
      <p v-if="currentCar.parts.rims">Rims Size: {{currentCar.parts.rims.spec.Size}}</p>
      <p v-if="currentCar.parts.skirts">Parts: {{currentCar.parts.skirts.name}}}</p>
      <p v-if="currentCar.parts.spoiler">Spoiler: {{currentCar.parts.spoiler.name}}</p>
      <p v-if="currentCar.parts.color">Color: {{currentCar.parts.color.name}}</p>
    </div>
    <br>
    <div class="content has-text-left">
      <p>LOWED</p>
      <p>1.5 inch</p>
      <p v-if="currentCar.parts.rims">Tire Size: {{currentCar.parts.rims.spec['Tire size']}}</p>
      <p v-if="currentCar.parts.rims">Rim Size: {{currentCar.parts.rims.spec.Size}}{{currentCar.parts.rims.spec.ET}}</p>
    </div>
    <br>
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
  .summary{
    width: 300px;
    padding: 30px;
    display:inline-block;
    .content{
      color: white !important;
    }
  }
</style>
