import { createStore } from 'vuex'

export default createStore({
  state: {
    isNight: false,
    isDay: false
  },
  getters: {
    getIsDay(state){
      return state.isDay
    },
    getIsnight(state){
      return state.isNight
    }
  },
  mutations: {
    setNight(state, value){
      state.isNight = value;
    },
    setDay(state, value){
      state.isDay = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
