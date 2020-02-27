<template>
  <div>
    <h1>Calendario de la liga</h1>

    <b-card
      v-for="round in fixtures"
      :key="round"
      :title="'Jornada' + round[0].round"
    >
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['fixtures'])
  },

  mounted() {
    this.$store.dispatch('loadFixtures')
  }
}
</script>
