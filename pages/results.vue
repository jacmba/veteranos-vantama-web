<template>
  <div>
    <h1>Resultados de partidos</h1>
    <p v-for="round in results" :key="round">
      <b-card :title="'Jornada ' + round[0].round">
        <b-card-body>
          <p>
            <b-card-text
              v-for="game in round"
              :key="game.datetime"
              :class="{
                highlighted: game.isBandama
              }"
            >
              {{ game.home_team }} <b>{{ game.home_score }}</b> -
              <b>{{ game.away_score }}</b>
              {{ game.away_team }}
              <p class="tiny">{{ game.date }}</p>
            </b-card-text>
          </p>
        </b-card-body>
        <br />
      </b-card>
    </p>

    <loadSpinner v-if="!isResultsLoaded"></loadSpinner>
    <br />
    <logo />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from '~/components/Logo'
import LoadSpinner from '~/components/LoadSpinner'

export default {
  components: {
    Logo,
    LoadSpinner
  },
  computed: {
    ...mapGetters(['results', 'isResultsLoaded'])
  },

  mounted() {
    this.$store.dispatch('loadResults')
  }
}
</script>

<style scoped>
.tiny {
  font-size: 75%;
  font-style: italic;
}
</style>
