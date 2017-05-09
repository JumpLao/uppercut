<template>
  <div>
    <swiper class="car-list" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="fit" v-for="car in cars" :key="car.username">
        <car-list-item :car="car"></car-list-item>
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
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.button-next',
        prevButton: '.button-prev',
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        spaceBetween: 30
      },
      cars: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.cars = [
        {
          user: {
            username: 'Somkiat789',
            profile: 'static/img/profiles/1.png'
          },
          car: {
            brand: 'Honda',
            model: 'Camry',
            year: 2016,
            style: 'VIP',
            color: 'Mint Green',
            rim: 'Gran Seeker CCX 19" inch',
            image: 'static/img/gallery/1.png'
          }
        },
        {
          user: {
            username: 'John115',
            profile: 'static/img/profiles/2.png'
          },
          car: {
            brand: 'Honda',
            model: 'Jazz GE',
            year: 2012,
            style: 'JDM',
            color: 'Light Champagne Gold Metallic',
            rim: 'Spoon Spot 15" inch',
            image: 'static/img/gallery/2.png'
          }
        },
        {
          user: {
            username: 'Thanat135',
            profile: 'static/img/profiles/3.png'
          },
          car: {
            brand: 'Honda',
            model: 'City',
            year: 2013,
            style: 'Hellaflush + STWP',
            color: 'Silver Blonde',
            rim: 'BBS RS 18" inch',
            image: 'static/img/gallery/3.png'
          }
        }
      ]
    }
  }
}
</script>
<style lang='scss'>
@import './../../styles/colors.scss';
.car-list{
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
}
</style>
