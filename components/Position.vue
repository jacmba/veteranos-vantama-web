<template>
  <div v-if="position">
    <p>
      <b-card title="Posición en liga +38 B">
        {{ position.position }} de {{ position.teams }}
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
