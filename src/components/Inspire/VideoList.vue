<template>
  <div class="video-list">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="fit" v-for="(video,index) in ['F6OlGiOrPFw', 'hGCqU8lkiPE', 'BxJ4zW4c2ys']" :key="index">
        <div class="video-container">
          <youtube class="youtube" :video-id="video"></youtube>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="button-prev swiper-button" slot="button-prev"><i class="fa fa-chevron-left fa-2x"></i></div>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="button-next swiper-button" slot="button-next"><i class="fa fa-chevron-right fa-2x"></i></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import CarListItem from './CarListItem'
export default {
  components: {
    swiper,
    swiperSlide,
    CarListItem
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.button-next',
        prevButton: '.button-prev',
        slidesPerView: 'auto',
        centeredSlides: true
      },
      videos: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.videos = ['F6OlGiOrPFw', 'hGCqU8lkiPE', 'BxJ4zW4c2ys']
    }
  }
}
</script>
<style lang='scss'>
@import './../../styles/colors.scss';
.video-list{
  .swiper-slide.fit {
    display:inline-block;
    width: auto;
  }
  .swiper-container{
    padding-bottom:100px;
  }
  .swiper-pagination{
    .swiper-pagination-bullet-active {
      background: $primary !important;
    }
  }
  .swiper-button{
    position:absolute;
    bottom: 2px;
    text-align: center;
    color: $primary;
    z-index:11;
    -webkit-transform: translateX(-50%);
    -moz-transform:    translateX(-50%);
    -ms-transform:     translateX(-50%);
    -o-transform:      translateX(-50%);
    transform:         translateX(-50%);
  }
  .button-next{
    left: calc(50% + 60px);
  }
  .button-prev{
    left: calc(50% - 60px);
  }
  .video-container{
    width:80vw;
  }
  .swiper-slide{
    opacity:0.5;
    &.swiper-slide-active{
      opacity:1;
    }
  }
}
</style>
