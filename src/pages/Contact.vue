<template>
  <div class="grey-background" style="position:relative;">
    <div class="site">
      <div class="site-content">
        <h1 class="title triangle has-text-centered"> Tel : 02-172-7382 (4)</h1>
          <section class="">
            <div class="container">
              <div class="columns big-gutter" >
                <div class="column">
                  <h1 class="title is-4">
                    <span class="fire-bg">
                      Map
                    </span>
                  </h1>
                  <div class="image is-4by3" style="position:relative;">
                    <gmap-map style="width: 100%; height: 100%; position: absolute; left:0; top:0"
                        :center="{lat: 1.38, lng: 103.8}"
                        :zoom="12">
                    </gmap-map>
                  </div>
                  <div class="has-text-right" style="padding-top:20px;">
                      <p>
                        Address
                        Info@MVRCK
                        Media & Press Inquiries
                        Partnerships, Business opportunity, Sponsorshops
                        Phayathai rd.
                        Khwaeng Thanon Phaya Thai, Khet Ratchathewi
                        Krung Thep Maha Nakhon 10400
                        +66944804484
                      </p>
                    </div>
                </div>
                <div class="column">
                  <h1 class="title is-4"><span class="fire-bg">Contact</span></h1>
                  <p>
                    Japanese car life inspired stickers, car parts, accessories and more!
                  </p>
                  <div class="columns">
                    <div class="column ">

                      <div class="field">
                        <label class="label">Name</label>
                        <p class="control">
                          <input class="input" type="text" placeholder="Name" v-model="contact.name">
                        </p>
                      </div>

                      <div class="field">
                        <label class="label">Email/Facebook</label>
                        <p class="control">
                          <input class="input" type="text" placeholder="Email/Facebook" v-model="contact.email">
                        </p>
                      </div>

                      <div class="field">
                        <label class="label">Please enter the phone number in the field below</label>
                        <p class="control">
                          <input class="input" type="text" placeholder="Phone number" v-model="contact.code">
                        </p>
                      </div>

                      <div class="field">
                        <label class="label">Message</label>
                        <p class="control">
                          <textarea class="textarea" placeholder="Message" v-model="contact.message"></textarea>
                        </p>
                      </div>

                      <div class="field is-grouped">
                        <p class="control">
                          <button class="button is-primary" @click="submit()">Submit</button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
      <footerbar></footerbar>
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
              Email has been sent.
            </p>
          </div>
        </div>
      
      </div>
    </transition>
    
  </div>
</template>
<script>
import Footerbar from '@/components/Footerbar'
export default {
  components: {
    Footerbar
  },
  data () {
    return {
      contact: {
        name: '',
        email: '',
        code: '',
        message: ''
      },
      thankActive: false
    }
  },
  created () {
    this.$store.dispatch('setDarkMode', true)
  },
  methods: {
    submit () {
      this.contact = {
        name: '',
        email: '',
        code: '',
        message: ''
      }
      this.thankActive = true
    },
    closeModal () {
      this.thankActive = false
    }
  }
}
</script>
<style lang='scss' scoped>
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
