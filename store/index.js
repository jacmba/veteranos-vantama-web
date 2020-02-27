import axios from 'axios'
import moment from 'moment'

const LEAGUE_URL = 'https://api.jazbelt.net/league'
const RESULTS_URL = LEAGUE_URL + '/results'
const FIXTURES_URL = LEAGUE_URL + '/fixtures'

export const state = () => ({
  league: [],
  leagueSet: false,
  results: [],
  resultsSet: false,
  fixtures: [],
  fixturesSet: false
})

/**
 * Group games by round
 * @param {array} games - List of game objects
 */
const gamesReducer = (games) => {
  const rounds = games.reduce((p, x) => {
    const m = moment(x.datetime)
    x.date = m.format('DD-MM-YYYY')
    x.time = m.format('HH:mm')

    if (p[x.round]) {
      p[x.round] = [...p[x.round], x]
    } else {
      p[x.round] = [x]
    }

    return p
  }, {})

  const roundsList = Object.keys(rounds)
  return roundsList.map((x) => rounds[x])
}

export const getters = {
  league: (state) => state.league,
  results: (state) => gamesReducer(state.results),
  fixtures: (state) => gamesReducer(state.fixtures)
}

export const mutations = {
  setLeague(state, league) {
    state.league = league
    state.leagueSet = true
  },

  setResults(state, results) {
    state.results = results
    state.resultsSet = true
  },

  setFixtures(state, fixtures) {
    state.fixtures = fixtures
    state.fixturesSet = true
  }
}

export const actions = {
  loadLeague({ commit }) {
    if (!state.leagueSet) {
      axios.get(LEAGUE_URL).then((r) => {
        commit('setLeague', r.data)
      })
    }
  },

  loadResults({ commit }) {
    if (!state.resultsSet) {
      axios.get(RESULTS_URL).then((r) => {
        commit('setResults', r.data)
      })
    }
  },

  loadFixtures({ commit }) {
    if (!state.fixturesSet) {
      axios.get(FIXTURES_URL).then((r) => {
        commit('setFixtures', r.data)
      })
    }
  }
}
