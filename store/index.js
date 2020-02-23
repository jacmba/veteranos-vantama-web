import axios from 'axios'

const LEAGUE_URL = '/api/league'

export const state = () => ({
  league: []
})

export const getters = {
  league: (state) => state.league
}

export const mutations = {
  setLeague(state, league) {
    state.league = league
  }
}

export const actions = {
  loadLeague({ commit }) {
    axios.get(LEAGUE_URL).then((r) => {
      commit('setLeague', r.data)
    })
  }
}