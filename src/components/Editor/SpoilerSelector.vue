<template>
  <div>
    <swiper :options="swiperOption" class="swiper-selector">
      <!-- slides -->
      <swiper-slide class="item" v-for="(skirt,index) in skirts" :key="index">
        <div class="card" @click="selectColor(skirt)">
          <div class="card-image">
            <figure class="image">
              <img :src="`static/img/editor/${currentCar.brand}/${currentCar.model}/${currentCar.year}/${currentCar.type}/${currentCar.style}/Spoiler/${skirt.filename || skirt.spoiler}.png`" alt="Image">
            </figure>
          </div>
          <div class="card-content">
            {{skirt.skirt}}
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="button-prev" slot="button-prev">
        <span class="icon">
          <i class="fa fa-chevron-left"></i>
        </span>
      </div>
      <div class="button-next" slot="button-next">
        <span class="icon">
          <i class="fa fa-chevron-right"></i>
        </span>
      </div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        nextButton: '.button-next',
        prevButton: '.button-prev',
        spaceBetween: 30,
        slidesPerView: 'auto'
      }
    }
  },
  computed: {
    skirts () {
      return this.$store.getters['Editor/currentPart'].spoiler
    },
    currentCar () {
      return this.$store.getters['Editor/currentCar']
    }
  },
  methods: {
    selectColor (skirt) {
      console.log(skirt)
      return this.$store.dispatch('Editor/setCarPart', {part: 'spoiler', data: skirt})
    }
  }
}
</script>
<style lang='scss' scoped>
  .item{
    width:200px;
  }
  .swiper-selector{
    padding: 30px 100px;
  }
  .button-next, .button-prev{
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    z-index:10;
  }
  .button-next{
    right:10px;
  }
  .button-prev{
    left:10px;
  }
</style>
