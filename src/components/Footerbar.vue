<template>
  <div>
    <footer class="nav">
      <div class="nav-left nav-not-grow">
        <router-link class="nav-item" :to="{name:'Home'}">
          <img src="/static/img/logo.png" alt="Bulma logo">
        </router-link>
        <div class="nav-item social-icon">
          <span class="icon">
             <i class="fa fa-facebook"></i>
          </span>
         <span class="icon">
             <i class="fa fa-twitter"></i>
          </span>
          <span class="icon">
             <i class="fa fa-google-plus"></i>
          </span>
          <span class="icon">
             <i class="fa fa-youtube"></i>
          </span>
          <span class="icon">
             <i class="fa fa-instagram"></i>
          </span>
        </div>
      </div>
      <div class="subscribe-container nav-right">
        <div class="nav-item">
          <div class="field has-addons" style="width:70%;">
            <p class="control has-icon" style="width:100%;">
              <input class="input" type="email" placeholder="Email" v-model="email">
              <span class="icon">
                <i class="fa fa-envelope"></i>
              </span>
            </p>
            <p class="control">
              <button class="button" @click="subscribe()">
                Subscribe
              </button>
            </p>
          </div>
        </div>
      </div>
    </footer>
    <div class="copyright">
      Copyright © 2017 (UPPERCUT). All rights reserved. This Website is for non-profit purposes and educaitonal purpose only
    </div>
    <transition name="fade">
      <div class="modal dialog is-active" v-if="thankActive">
        <div class="modal-content">
          <button class="modal-close is-primary button" @click="closeModal()"></button>
          <div class="box">
            <p class="has-text-centered">
              <span class="">
                <i class="fa fa-check fa-5x"></i>
              </span>
            </p>
            <p class="has-text-centered">
              Thank you for your subscription
            </p>
          </div>
        </div>
      
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      email: '',
      thankActive: false
    }
  },
  methods: {
    subscribe () {
      this.email = ''
      this.thankActive = true
    },
    closeModal () {
      this.thankActive = false
    }
  }
}
</script>
<style lang='scss' scoped>
@import "./../styles/colors.scss";
.copyright{
  background-color:black;
  padding: 10px;
  font-size:10px;
  color: $white;
}
.social-icon{
  .icon{
    margin-left:10px;
    margin-right:10px;
  }
}
.nav-left{
  &.nav-not-grow{
    flex-grow: 0;
    flex-basis: initial;
  }
}
.subscribe-container{
  justify-content: initial;
  border-left: 1px solid $grey;
  .nav-item{
    width:100%;
    input{
      width:100%;
    }
  }
  
}
</style>
