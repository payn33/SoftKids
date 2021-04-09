import { createStore } from "vuex";

const store = createStore({
  state: {
    toggle_reg: false
  },
  mutations: {
    toggle_true(state) {
      state.toggle_reg = true
    },
    toggle_false(state) {
      state.toggle_reg = false
    }
  },
  actions: {
    toggle_true({commit}) {
      commit("toggle_true")
    },
    toggle_false({commit}) {
      commit("toggle_false")
    }
  },
  getters: {},

  strict: process.env.NODE_ENV !== "production",
});

export default store;