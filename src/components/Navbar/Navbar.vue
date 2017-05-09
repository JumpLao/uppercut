<template>
  <div>
    <nav class="nav cabin" :class="{dark: darkMode}">
      <div class="nav-left">
        <router-link class="nav-item" :to="{name:'Home'}" active-class="">
          <img src="/static/img/logo.png" alt="Bulma logo">
        </router-link>
      </div>
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div class="nav-right nav-menu">
        <router-link :to="{name:'Home'}" class="nav-item" exact>
          Home
        </router-link>
        <router-link :to="{name:'Customize'}" class="nav-item">
          Customize
        </router-link>
        <router-link :to="{name:'Inspire'}" class="nav-item">
          Inspire
        </router-link>
        <router-link :to="{name:'Culture'}" class="nav-item">
          Culture
        </router-link>
        <router-link :to="{name:'Contact'}" class="nav-item">
          Contact
        </router-link>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
    darkMode () {
      return this.$store.getters.isDarkMode
    }
  }
}
</script>
<style lang='scss' scoped>
@import './../../styles/colors.scss';
  .nav { 
    background-color: transparent;
    &.dark{
      background-color: rgb(43,41,42);
    }
  }
  a.nav-item{
    text-transform: uppercase;
    color: white;
    position: relative;
    margin: 0 20px;
    padding-left:0px;
    padding-right:0px;
    &:hover{
      color: white;
    }
    &.router-link-active::after{
        content: '';
        border-bottom: 2px solid rgb(240,175,66);
        position: absolute;
        left: 0;
        bottom: 15px;
        width: 100%;
    }
  }
</style>
