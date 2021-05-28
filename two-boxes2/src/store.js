import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    events: [],
  },
  getters: {
    count: function(state) {
      return state.events.length;
    },
  },
  mutations: {
    updateEvents: (state, data) => {
      return state.events = data;
    }
  },
  actions: {
    loadEvents: async function ({ commit }) {
      const events_url = "https://3llnczvhs2.execute-api.us-east-2.amazonaws.com/prod/events";
      const response = await axios.get(events_url);
      commit("updateEvents", response.data.events)
    },
  },
});

export default store;