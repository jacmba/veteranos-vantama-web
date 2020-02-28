<template>
  <div>
    <h2>Clasificación liga veteranos +38B</h2>
    <table v-if="isLeagueLoaded" width="100%">
      <thead>
        <th>Puesto</th>
        <th>Equipo</th>
        <th>Puntos</th>
        <th>PJ</th>
        <th>PG</th>
        <th>PE</th>
        <th>PP</th>
        <th>GF</th>
        <th>GC</th>
      </thead>
      <tbody>
        <tr
          v-for="team in league"
          :key="team.pos"
          :class="{ highlighted: team.name === 'Veteranos Bandama' }"
        >
          <td>{{ team.pos }}</td>
          <td>{{ team.name }}</td>
          <td>{{ team.points }}</td>
          <td>{{ team.played }}</td>
          <td>{{ team.won }}</td>
          <td>{{ team.draw }}</td>
          <td>{{ team.lost }}</td>
          <td>{{ team.favour }}</td>
          <td>{{ team.against }}</td>
        </tr>
      </tbody>
    </table>

    <loadSpinner v-if="!isLeagueLoaded"></loadSpinner>
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
    ...mapGetters(['league', 'isLeagueLoaded'])
  },
  mounted() {
    this.$store.dispatch('loadLeague')
  }
}
</script>
