const state = {
  darkMode: false
}
const getters = {
  isDarkMode (state) {
    return state.darkMode
  }
}
const mutations = {
  SET_DARK_MODE (state, darkMode) {
    console.log('dark mode set', darkMode)
    state.darkMode = darkMode
  }
}
const actions = {
  setDarkMode ({commit, state, dispatch}, darkMode) {
    commit('SET_DARK_MODE', darkMode)
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
