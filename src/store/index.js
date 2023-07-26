import { createStore } from "vuex";

export default createStore({
  state: {
    isOpen: false,
  },
  actions: {
    handSideOpen(context) {
      const bool = !context.state.isOpen;
      context.commit("handOpenState", bool);
    },
  },
  mutations: {
    handOpenState(state, bool) {
      state.isOpen = bool;
    },
  },
  getters: {
    isOpen(state) {
      return state.isOpen;
    },
  },
});
