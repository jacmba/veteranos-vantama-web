<template>
  <div v-if="position">
    <p>
      <b-card title="Posición en liga +38 B">
        <h4>{{ position.position }} de {{ position.teams }}</h4>
      </b-card>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['position'])
  },
  mounted() {
    this.$store.dispatch('loadLeague')
  }
}
</script>
