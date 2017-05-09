<template>
  <div class="car-list-item">
    <div class="columns">
      <div class="column is-4">
        <div class="media">
          <div class="media-left">
            <p class="image is-64x64">
              <img :src="car.user.profile">
            </p>
          </div>
          <div class="media-content">
            <h1 class="title is-4 has-uppercase">{{car.user.username}}</h1>
            <h2 class="subtitle is-6 has-uppercase">User account name</h2>
          </div>
        </div>
        <div class="info">

          <div class="columns">
            <div class="column is-2 has-text-right">
              <label>Brand</label>
            </div>
            <div class="column">
              {{car.car.brand}}
            </div>
          </div>

          <div class="columns">
            <div class="column is-2 has-text-right">
              <label>Model</label>
            </div>
            <div class="column">
              {{car.car.model}}
            </div>
          </div>

          <div class="columns">
            <div class="column is-2 has-text-right">
              <label>Year</label>
            </div>
            <div class="column">
              {{car.car.year}}
            </div>
          </div>

          <div class="columns">
            <div class="column is-2 has-text-right">
              <label>Style</label>
            </div>
            <div class="column">
              {{car.car.style}}
            </div>
          </div>

          <div class="columns">
            <div class="column is-2 has-text-right">
              <label>Color</label>
            </div>
            <div class="column">
              {{car.car.color}}
            </div>
          </div>

          <div class="columns">
            <div class="column is-2 has-text-right">
              <label>Rims</label>
            </div>
            <div class="column">
              {{car.car.rim}}
            </div>
          </div>

        </div>
      </div>
      <div class="column">
        <img :src="car.car.image">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    car: {}
  },
  data () {
    return {
    }
  }
}
</script>
<style lang='scss' scoped>
  .car-list-item{
    width:80vw;
  }
  .info{
    padding-top:20px;
    label{
      font-weight: bolder;
    }
  }
</style>
