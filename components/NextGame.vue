<template>
  <div v-if="nextGame">
    <p>
      <b-card title="¡¡ Próximo partido del Bandama !!">
        <b-card-body>
          El {{ nextGame.week }} {{ nextGame.date }} a las
          {{ nextGame.time }} en
          {{ nextGame.venue }}
          <h3>{{ nextGame.home_team }} contra {{ nextGame.away_team }}</h3>
        </b-card-body>
      </b-card>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['nextGame'])
  },

  mounted() {
    this.$store.dispatch('loadFixtures')
  }
}
</script>
