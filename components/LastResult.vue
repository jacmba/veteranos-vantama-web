<template>
  <div v-if="lastResult">
    <p>
      <b-card title="Resultado del último partido">
        {{ lastResult.home_team }} <strong>{{ lastResult.home_score }}</strong>
        -
        <strong>{{ lastResult.away_score }}</strong> {{ lastResult.away_team }}
        <br />
        El {{ lastResult.date }}
      </b-card>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['lastResult'])
  },
  mounted() {
    this.$store.dispatch('loadResults')
  }
}
</script>
