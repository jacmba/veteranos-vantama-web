<template>
  <div>
    <p>
      <b-card v-if="isFixturesLoaded" title="¡¡ Próximo partido del Bandama !!">
        <b-card-body>
          El {{ nextGame.week }} {{ nextGame.date }} a las
          {{ nextGame.time }} en
          {{ nextGame.venue }}
          <h3>{{ nextGame.home_team }} contra {{ nextGame.away_team }}</h3>
        </b-card-body>
      </b-card>
      <loadSpinner v-else></loadSpinner>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LoadSpinner from '~/components/LoadSpinner'

export default {
  components: {
    LoadSpinner
  },
  computed: {
    ...mapGetters(['nextGame', 'isFixturesLoaded'])
  },

  mounted() {
    this.$store.dispatch('loadFixtures')
  }
}
</script>
