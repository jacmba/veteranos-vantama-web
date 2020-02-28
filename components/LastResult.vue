<template>
  <div>
    <p>
      <b-card v-if="isResultsLoaded" title="Resultado del último partido">
        {{ lastResult.home_team }} <strong>{{ lastResult.home_score }}</strong>
        -
        <strong>{{ lastResult.away_score }}</strong> {{ lastResult.away_team }}
        <br />
        El {{ lastResult.date }}
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
    ...mapGetters(['lastResult', 'isResultsLoaded'])
  },
  mounted() {
    this.$store.dispatch('loadResults')
  }
}
</script>
