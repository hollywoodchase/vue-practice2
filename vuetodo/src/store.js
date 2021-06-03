import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    events: [],
    count: 0,
  },
  getters: {
    count: function(state) {
      return state.count;
    },
  },
  mutations: {
    updateEvents: (state, data) => {
      return (state.events = data);
    },
    increment: (state) => {
      if (state.count < 10) {
        state.count++;
      }
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count--;
      }
    },
  },
  actions: {
    loadEvents: async function({ commit }) {
      const events_url =
        "https://api.coindesk.com/v1/bpi/currentprice.json";
      const response = await axios.get(events_url);
      console.log("response: " + response);
      console.log("data: " + response.data);
      commit("updateEvents", response.data.events);
    },
  },
});

export default store;
