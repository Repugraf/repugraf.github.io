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
    setAllToZero({ state, dispatch }) {
      state.players.forEach(el => el.score = 0);
      dispatch("updateLocalStorage");
    },
    addPlayer({ state, dispatch }, name) {
      state.players.push({ name, score: 0 });
      dispatch("updateLocalStorage");
    },
    changePlayerScore({ state, dispatch }, payload) {
      state.players[payload.index].score += payload.score;
      dispatch("updateLocalStorage");
    },
    updateLocalStorage: ({ state }) => localStorage.setItem("players", JSON.stringify(state.players)),
    getFromLocalStorage: ({ state }) => state.players = JSON.parse(localStorage.getItem("players") || "[]")
  }
});

const PlayerComponent = Vue.component("Player", {
  props: ["index"],
  template: `
    <tr>
      <th>{{name}}</th>
      <th>{{score}}</th>
      <th><button @click="changeScore(1)">+</button></th>
      <th><button @click="changeScore(-1)">-</button></th>
      <th><button @click="deletePlayer">✖</button></th>
    </tr>`,
  methods: {
    changeScore(num) {
      try {
        const score = +eval(prompt(`How much (${this.name})?`));
        if (Number.isNaN(score)) throw new Error();
        store.dispatch("changePlayerScore", { index: this.index, score: Math.sign(num) * score });
      } catch (e) {
        alert("Invalid number!");
      }
    },
    deletePlayer() {
      confirm(`Are you sure you want to delete ${this.name}?`) && store.dispatch("deletePlayer", this.index);
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

    <button @click="setAllToZero" class="global-action">SET ALL TO 0</button>
    <button @click="deleteAll" class="global-action">DELETE ALL</button>
  </div>`,
  data: () => ({ newPlayerName: "" }),
  methods: {
    submit() {
      if (!this.nameIsValid) return alert("Player name should be more that 2 symbols");
      store.dispatch("addPlayer", this.newPlayerName), this.newPlayerName = "";
    },
    deleteAll: () => confirm("Are you sure you want delete all players?") && store.dispatch("deleteAllPalyers"),
    setAllToZero: () => confirm("Reset all players score?") && store.dispatch("setAllToZero")
  },
  computed: {
    nameIsValid() {
      return this.newPlayerName.length > 2
    },
    players: () => store.state.players
  },
  created: () => store.dispatch("getFromLocalStorage")
});
