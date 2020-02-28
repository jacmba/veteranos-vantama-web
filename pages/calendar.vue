<template>
  <div>
    <h1>Calendario de la liga</h1>

    <p v-for="round in fixtures" :key="round">
      <b-card :title="'Jornada' + round[0].round">
        <div
          v-for="game in round"
          :key="game.round"
          :class="{
            highlighted: game.isBandama
          }"
        >
          {{ game.date }} a las {{ game.time }} en
          {{ game.venue }}
          <h3>{{ game.home_team }} - {{ game.away_team }}</h3>
          <br />
        </div>
      </b-card>
    </p>

    <loadSpinner v-if="!isFixturesLoaded"></loadSpinner>
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
    ...mapGetters(['fixtures', 'isFixturesLoaded'])
  },

  mounted() {
    this.$store.dispatch('loadFixtures')
  }
}
</script>
