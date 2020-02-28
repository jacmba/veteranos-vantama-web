<template>
  <div>
    <p v-if="isLeagueLoaded">
      <b-card title="Posición en liga +38 B">
        <h4>{{ position.position }} de {{ position.teams }}</h4>
      </b-card>
    </p>
    <loadSpinner v-else></loadSpinner>
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
    ...mapGetters(['position', 'isLeagueLoaded'])
  },
  mounted() {
    this.$store.dispatch('loadLeague')
  }
}
</script>
