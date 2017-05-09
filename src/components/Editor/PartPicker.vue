<template>
  <div>
    <swiper :options="swiperOption" class="swiper-selector">
      <!-- slides -->
      <swiper-slide class="item" v-for="(obj,index) in data" :key="index">
        <div class="card" :class="{active: currentCar.parts[part] && obj.name == currentCar.parts[part].name}" @click="selectPart(obj)">
          <div class="card-image">
            <figure class="image">
              <img :src="`static/img/editor/${currentCar.brand}/${currentCar.model}/${currentCar.year}/${currentCar.type}/${currentCar.style.replace(/\s+/g, '').toLowerCase()}/${part}/${obj.thumbnail || obj.filename || obj.name}.png`" alt="Image">
            </figure>
          </div>
          <div class="card-content">
            {{obj.name}}
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
  props: {
    part: {}
  },
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
        slidesPerView: 'auto',
        watchSlidesVisibility: true
      }
    }
  },
  computed: {
    data () {
      return this.$store.getters['Editor/currentPart'].data
    },
    currentCar () {
      return this.$store.getters['Editor/currentCar']
    }
  },
  methods: {
    selectPart (obj) {
      return this.$store.dispatch('Editor/setCarPart', {part: this.part, data: obj})
    }
  }
}
</script>
<style lang='scss' scoped>
@import './../../styles/colors.scss';
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
  .card.active{
    border: 1px solid $primary;
  }
</style>
