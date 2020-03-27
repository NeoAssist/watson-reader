import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chart: {},
    file: {},
    locale: "pt_br",
    direction: "TB"
  },
  mutations: {
    /**
     * Set global language
     *
     * @param state
     * @param locale
     */
    SET_LANG(state, locale) {
      state.locale = locale;
    },
    /**
     * Save File contents
     *
     * @param state
     * @param file
     */
    SET_FILE(state, file) {
      state.file = file;
    },

    /**
    * Set chart contents
    *
    * @param state
    * @param file
    */
    SET_CHART(state, chart) {
      state.chart = chart;
    },

    /**
     * Toggles direction
     *
     * @param state
     */
    TOGGLE_DIRECTION(state) {
      if (state.direction == "TB") {
        state.direction = "LR";
      } else {
        state.direction = "TB";
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
