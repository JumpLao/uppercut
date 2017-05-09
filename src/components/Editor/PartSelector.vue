<template>
  <div class="padding has-text-centered">
    <h1 class="title is-4 has-uppercase">Selection</h1>
    <swiper :options="partSwiperOption" class="swiper-selector" ref="yearSwiper">
      <!-- slides -->
      <swiper-slide v-for="(value,index) in parts" :key="index">
        {{value}}
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
    let self = this
    let partIndex = 0
    let swiperOption = {
      nextButton: '.button-next',
      prevButton: '.button-prev',
      spaceBetween: 30,
      slidesPerView: 1,
      centeredSlides: true
    }
    return {
      currentPartsIndex: partIndex,
      partSwiperOption: {
        ...swiperOption,
        initialSlide: partIndex,
        onSlideChangeEnd (swiper) {
          let part = self.parts[swiper.activeIndex]
          self.$store.dispatch('Editor/setPart', part)
        }
      }
    }
  },
  computed: {
    cars () {
      return this.$store.getters['Editor/cars']
    },
    currentCar () {
      return this.$store.getters['Editor/currentCar']
    },
    parts () {
      return this.$store.getters['Editor/parts'].map((part) => { return part.part })
    },
    enablePrev () {
      return this.currentPartsIndex > 0
    },
    enableNext () {
      return this.currentPartsIndex < (this.parts.length - 1)
    }
  },
  methods: {
  }
}
</script>
<style lang='scss' scoped>
@import './../../styles/colors.scss';
.padding{
  padding: 30px;
  display: inline-block;
}
.swiper-selector{
  width:200px;
  &:not(:first-child){
    margin-top:40px;
  }
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
