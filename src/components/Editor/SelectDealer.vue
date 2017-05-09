<template>
  <div class="has-text-left padding">
    <div class="columns">
      <div class="" style="padding:0.75rem">
        <h2 class="title is-4">Contact</h2>
        <div class="list">
          <div class="box round" :class="{active:index==selectedIndex}" v-for="(dealer,index) in dealers" @click="selectedIndex = index;">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64 round">
                  <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <div>
                    <strong>{{dealer.part}}</strong>
                  </div>
                  <div>
                    <small>{{dealer.name}}</small>
                  </div>
                  <div>
                    <span class="icon" v-for="n in dealer.rate">
                      <img src="/static/assets/start.png">
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column" style="max-width:400px;">
        <h2 class="title is-4">Profiles</h2>
        <div class="media">
          <div class="media-left">
            <figure class="image is-96x96 round">
              <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure>
            <div class="mybuttons">
              <button class="button is-small is-primary">Call</button>
              <button class="button is-small is-primary">Queue</button>
            </div>
          </div>
          <div class="media-content">
            <div class="content">
              <h1 class="title is-5">
                {{dealers[selectedIndex].name}}
              </h1>
              <p class="small">
                Address : {{dealers[selectedIndex].address}} Date open : {{dealers[selectedIndex].open}}
              </p>
              <p  class="small">
                Experiences : {{dealers[selectedIndex].experience}}
              </p>
              <p  class="small">
                Tel: {{dealers[selectedIndex].tel}}
              </p>
              <div>
                <span class="icon" v-for="n in dealers[selectedIndex].rate">
                      <img src="/static/assets/start.png">
                    </span>
              </div>
              <div class="icon-group">
                <img :class="{fade:!dealers[selectedIndex].services.engine}" src="/static/assets/icon_engine.png">
                <img :class="{fade:!dealers[selectedIndex].services.color}" src="/static/assets/icon_color.png">
                <img :class="{fade:!dealers[selectedIndex].services.wheel}" src="/static/assets/icon_wheel.png">
                <img :class="{fade:!dealers[selectedIndex].services.suspension}" src="/static/assets/icon_suspension.png">
                <img :class="{fade:!dealers[selectedIndex].services.exhuat}" src="/static/assets/icon_exhuat.png">
              </div>
            </div>
          </div>
        </div>
        <div class="image is-2by1" style="position:relative;">
          <gmap-map style="width: 100%; height: 100%; position: absolute; left:0; top:0"
                  :center="{lat: 1.38, lng: 103.8}"
                  :zoom="12">
              </gmap-map>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import Rating from 'vue-bulma-rating'
export default {
  components: {
    Rating
  },
  data () {
    return {
      selectedIndex: 0,
      items: [
        {
          title: '5 Stars',
          value: 5
        },
        {
          title: '4 Stars',
          value: 4
        },
        {
          title: '3 Stars',
          value: 3
        },
        {
          title: '2 Stars',
          value: 2
        },
        {
          title: '1 Star',
          value: 1
        }
      ],
      dealers: [
        {
          part: 'Bodyparts',
          name: 'UFS Fiber',
          rate: 4,
          address: `Chang Akat Uthit Rd, Khwaeng Don Mueang,
                    Khet Don Mueang, Krung Thep Maha Nakhon 10210`,
          open: 'Mon 10:00 - Sat 20:30',
          experience: '40 yrs. familiar with Fiber Glass',
          tel: '0924723717',
          services: {
            engine: true,
            color: true,
            wheel: false,
            suspension: false,
            exhuat: false
          }
        },
        {
          part: 'Exhuats',
          name: 'TOPMOTORSPORT',
          rate: 3,
          address: `Villa California Village 
                    Mueang Pathum Thani District Pathum Thani 12000`,
          open: 'Mon 09:00 - Sat 20:30',
          experience: '10 yrs. familiar with honda',
          tel: '0967756745',
          services: {
            engine: true,
            color: true,
            wheel: false,
            suspension: false,
            exhuat: false
          }
        },
        {
          part: 'Rims',
          name: 'Senhaisou Auto',
          rate: 5,
          address: `91 Thanon Chaeng Watthana, Khet Lak Si
                    Krung Thep Maha Nakhon 10210`,
          open: 'Mon 10:00 - Sat 20:30',
          experience: '22 yrs. familiar with honda',
          tel: '0897758785',
          services: {
            engine: true,
            color: false,
            wheel: true,
            suspension: true,
            exhuat: true
          }
        },
        {
          part: 'Suspension',
          name: 'Savit.autosuspension',
          rate: 3,
          address: `Soi Klang Tambon Khu Khot, 
                    Amphoe Lam Luk Ka Chang Wat Pathum Thani 12130`,
          open: 'Mon 10:00 - Sat 20:30',
          experience: '8yrs. familiar with honda suspension',
          tel: '021143232-23',
          services: {
            engine: false,
            color: false,
            wheel: true,
            suspension: true,
            exhuat: true
          }
        },
        {
          part: 'Colors',
          name: 'Perfectgarage',
          rate: 5,
          address: `35/463 bangyhai tha-pra, nonthaburi,10342`,
          open: 'Mon 10:00 - Sat 20:30',
          experience: '22 yrs. familiar with honda',
          tel: '023245536',
          services: {
            engine: true,
            color: true,
            wheel: true,
            suspension: true,
            exhuat: false
          }
        }
      ]
    }
  }
}
</script>
<style lang='scss' scoped>
  @import './../../styles/colors.scss';
  .padding{
    padding: 30px;
  }
  .box.round{
    border-radius:5rem;
    padding:0.5rem 1.5rem 0.5rem 0.5rem;
    background-color:$primary;
    &:not(.active){
      background-color:transparent;
      border-color:transparent;
      box-shadow:none;
    }
  }
  .rating{
    min-height:0;
  }
  .image{
    &.round{
      img{
        border-radius:50%;
      }
    }
  }
  .mybuttons{
    .button{
      border-radius: 1rem;
      margin-right:5px;
      margin-top:20px;
    }
  }
  p.small{
    font-size:0.7rem;
    margin-bottom:0px;
  }
</style>
<style lang="scss">
.rating.small{
  &.starability-basic{
    width:75px;
  }
  &.starability-basic > input:checked ~ label, .starability-basic > input:focus ~ label{
    background-position:0 -15px;
  }
  &.starability-basic > label{
    background-size: 15px auto;
  }
  &.starability-basic > label{
    width: 15px;
    height: 15px;
  }
}
.fade{
  opacity:0.5;
}
</style>
