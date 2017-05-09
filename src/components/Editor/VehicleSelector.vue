<template>
  <div class="padding has-text-centered">
    <h1 class="title is-4 has-uppercase has-bold">Select</h1>
    <swiper  :options="brandSwiperOption" class="swiper-selector" ref="brandSwiper">
      <!-- slides -->
      <swiper-slide v-for="(value,index) in brands" :key="index">
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
    <label class="has-bold">Brand</label>

    <swiper :options="modelSwiperOption" class="swiper-selector" ref="modelSwiper">
      <!-- slides -->
      <swiper-slide v-for="(value,index) in models" :key="index">
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
    <label class="has-bold">Model</label>

    <swiper :options="yearSwiperOption" class="swiper-selector" ref="yearSwiper">
      <!-- slides -->
      <swiper-slide v-for="(value,index) in years" :key="index">
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
    <label class="has-bold">Year</label>

    <swiper :options="typeSwiperOption" class="swiper-selector" ref="typeSwiper">
      <!-- slides -->
      <swiper-slide v-for="(value,index) in types" :key="index">
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
    <label class="has-bold">Type</label>
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
    let swiperOption = {
      nextButton: '.button-next',
      prevButton: '.button-prev',
      spaceBetween: 30,
      slidesPerView: 1,
      centeredSlides: true
    }
    let self = this
    let currentCar = this.$store.getters['Editor/currentCar']
    let brandIndex = 0
    let modelIndex = 0
    let yearIndex = 0
    let typeIndex = 0
    if (currentCar.brand) {
      brandIndex = this.$store.getters['Editor/cars'].map((car) => { return car.brand }).indexOf(currentCar.brand)
      modelIndex = this.$store.getters['Editor/models'].map((model) => { return model.model }).indexOf(currentCar.model)
      yearIndex = this.$store.getters['Editor/years'].map((year) => { return year.year }).indexOf(currentCar.year)
      typeIndex = this.$store.getters['Editor/types'].map((type) => { return type.type }).indexOf(currentCar.type)
    }
    return {
      brandSwiperOption: {
        ...swiperOption,
        initialSlide: brandIndex,
        onSlideChangeEnd (swiper) {
          let brand = self.brands[swiper.activeIndex]
          self.$store.dispatch('Editor/setBrand', brand)
        }
      },
      modelSwiperOption: {
        ...swiperOption,
        initialSlide: modelIndex,
        onSlideChangeEnd (swiper) {
          let model = self.models[swiper.activeIndex]
          self.$store.dispatch('Editor/setModel', model)
        }
      },
      yearSwiperOption: {
        ...swiperOption,
        initialSlide: yearIndex,
        onSlideChangeEnd (swiper) {
          let year = self.years[swiper.activeIndex]
          self.$store.dispatch('Editor/setYear', year)
        }
      },
      typeSwiperOption: {
        ...swiperOption,
        initialSlide: typeIndex,
        onSlideChangeEnd (swiper) {
          let type = self.types[swiper.activeIndex]
          self.$store.dispatch('Editor/setType', type)
        }
      }
    }
  },
  created () {
    let currentCar = this.$store.getters['Editor/currentCar']
    if (currentCar.brand === undefined) {
      console.log(this.brands)
      this.$store.dispatch('Editor/setBrand', this.brands[0])
    }
  },
  computed: {
    cars () {
      return this.$store.getters['Editor/cars']
    },
    currentCar () {
      return this.$store.getters['Editor/currentCar']
    },
    brands () {
      return this.$store.getters['Editor/cars'].map((car) => { return car.brand })
    },
    models () {
      return this.$store.getters['Editor/models'].map((model) => { return model.model })
    },
    years () {
      return this.$store.getters['Editor/years'].map((year) => { return year.year })
    },
    types () {
      return this.$store.getters['Editor/types'].map((type) => { return type.type })
    }
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
