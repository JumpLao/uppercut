<template>
  <div id="app">
    <navbar></navbar>
    <div class="site">
      <router-view class="site-content"></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  .site{
    display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox;  /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */
    min-height: calc(100vh - 50px);
    flex-direction: column;
    .site-content{
      -webkit-box-flex: 1;   /* OLD - iOS 6-, Safari 3.1-6 */
      width: 100vw;            /* For old syntax, otherwise collapses. */
      -webkit-flex: 1;       /* Safari 6.1+. iOS 7.1+, BB10 */
      -ms-flex: 1;           /* IE 10 */
      flex: 1;               /* NEW, Spec - Firefox, Chrome, Opera */
      flex-direction: row;
    }
  }
</style>
