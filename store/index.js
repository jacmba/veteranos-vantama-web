import axios from 'axios'
import moment from 'moment'

const LEAGUE_URL = 'https://api.jazbelt.net/league'
const RESULTS_URL = LEAGUE_URL + '/results'
const FIXTURES_URL = LEAGUE_URL + '/calendar'

const BANDAMA_EXP = /veteranos.*bandama/gi

const WEEKDAYS = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo'
]

export const state = () => ({
  league: [],
  leagueSet: false,
  results: [],
  resultsSet: false,
  fixtures: [],
  fixturesSet: false
})

const isBandama = (x) => {
  return BANDAMA_EXP.test(x.home_team) || BANDAMA_EXP.test(x.away_team)
}

const parseDate = (x) => {
  const m = moment(x.datetime)
  x.date = m.format('DD-MM-YYYY')
  x.time = m.format('HH:mm')
  x.week = WEEKDAYS[m.weekday()]
  return x
}

/**
 * Group games by round
 * @param {array} games - List of game objects
 */
const gamesReducer = (games) => {
  const rounds = games.reduce((p, x) => {
    parseDate(x)
    x.isBandama = isBandama(x)

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
  fixtures: (state) => gamesReducer(state.fixtures),
  nextGame: (state) => state.fixtures.filter(isBandama).map(parseDate)[0],
  position: (state) => {
    const bandama = state.league.filter((x) => BANDAMA_EXP.test(x.name))[0]
    if (bandama) {
      return {
        teams: state.league.length,
        position: bandama.pos
      }
    }
  },
  lastResult: (state) => {
    const res = state.results.filter(isBandama).map(parseDate)
    return res[res.length - 1]
  }
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
