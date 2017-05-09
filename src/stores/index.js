import Vue from 'vue'
import Vuex from 'vuex'
import store from '@/components/Navbar/store'
import Editor from '@/components/Editor/store'
// import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    store,
    Editor
  },
  plugins: [
    // createPersistedState({})
  ]
})
