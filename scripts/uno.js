import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.min.js";
import Vuex from "https://unpkg.com/vuex@3.5.0/dist/vuex.esm.browser.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    players: []
  },
  actions: {
    deletePlayer({ state, dispatch }, ind) {
      state.players.splice(ind, 1);
      dispatch("updateLocalStorage");
    },
    deleteAllPalyers({ state, dispatch }) {
      state.players.splice(0, state.players.length);
      dispatch("updateLocalStorage");
    },
    addPlayer({ state, dispatch }, name) {
      state.players.push({ name, score: 0 });
      dispatch("updateLocalStorage");
    },
    incrementPlayerScore({ state, dispatch }, payload) {
      state.players[payload.index].score += payload.score;
      dispatch("updateLocalStorage");
    },
    decrementPlayerScore({ state, dispatch }, payload) {
      state.players[payload.index].score -= payload.score;
      dispatch("updateLocalStorage");
    },
    updateLocalStorage({ state }) {
      localStorage.setItem("players", JSON.stringify(state.players));
    },
    getFromLocalStorage({ state }) {
      state.players = JSON.parse(localStorage.getItem("players") || "[]");
    }
  }
});

const PlayerComponent = Vue.component('Player', {
  props: ["index"],
  template: `
    <tr>
      <th>{{name}}</th>
      <th>{{score}}</th>
      <th><button @click="incrementScore">+</button></th>
      <th><button @click="decrementScore">-</button></th>
      <th><button @click="deletePlayer">✖</button></th>
    </tr>
  `,
  methods: {
    incrementScore() {
      const score = +prompt("How much?");
      if (Number.isNaN(score)) return alert("invalid number");
      store.dispatch("incrementPlayerScore", { index: this.index, score });
    },
    decrementScore() {
      const score = +prompt("How much?");
      if (Number.isNaN(score)) return alert("invalid number");
      store.dispatch("decrementPlayerScore", { index: this.index, score });
    },
    deletePlayer() {
      if (!confirm("Are you sure?")) return;
      store.dispatch("deletePlayer", this.index);
    }
  },
  computed: {
    score() {
      return store.state.players[this.index].score;
    },
    name() {
      return store.state.players[this.index].name;
    }
  }
});

new Vue({
  el: "#root",
  components: {
    PlayerComponent
  },
  template: `
  <div class="main">

    <table>

      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Increment</th>
          <th>Decrement</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        <PlayerComponent v-for="(player, index) in players" :key="index" :index="index" />
      </tbody>

    </table>
    <form @submit.prevent="submit">
      <input placeholder="new player" type="text" v-model="newPlayerName"/>
      <button type="submit">Add Player</button>
    </form>
  
    <button @click="clearAll" class="clear-all" >Clear All</button>

  </div>
  `,
  data() {
    return {
      newPlayerName: ""
    }
  },
  methods: {
    submit() {
      if (!this.nameIsValid) return alert("Player name should be more that 2 symbols");
      store.dispatch("addPlayer", this.newPlayerName);
      this.newPlayerName = "";
    },
    clearAll() {
      if (!confirm("Are you sure? This will delete all players data!")) return;
      store.dispatch("deleteAllPalyers");
    }
  },
  computed: {
    nameIsValid() {
      return this.newPlayerName.length > 2;
    },
    players() {
      return store.state.players;
    }
  },
  created() {
    store.dispatch("getFromLocalStorage");
  }
});