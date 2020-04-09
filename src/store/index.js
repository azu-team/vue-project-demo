import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      count: 0,
      // menu:cube,
      menuObj: {},
      menuClick: {},
      bread: [],
      Collapse: false,
      options: [],
      schoolInfo: [],
      hasSeted: false,
      userInfo: undefined,
      webSocket:'',
    },
    mutations: {
      updateCount(state, num) {
        state.count = num
      },
      updateMenuObj(state, menuObj) {
        state.menuObj = menuObj
      },
      updateMenuClick(state, menuClick) {
        state.menuClick = menuClick
      },
      updateBread(state, bread) {
        state.bread = bread
      },
      updateCollapse(state, num) {
        state.Collapse = num
      },
      UPDATE_VALUE(state, {
        key,
        value
      }) {
        state[key] = value;
      },
    },
    actions: {
    }
  })