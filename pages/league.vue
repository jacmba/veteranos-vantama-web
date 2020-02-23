<template>
  <div>
    <h2>Clasificación liga veteranos +38B</h2>
    <table width="100%">
      <thead>
        <th>Puesto</th>
        <th>Equipo</th>
        <th>Puntos</th>
        <th>Partidos</th>
        <th>Victorias</th>
        <th>Empates</th>
        <th>Derrotas</th>
        <th>GF</th>
        <th>GC</th>
      </thead>
      <tbody>
        <tr
          v-for="team in league"
          :key="team.id"
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['league'])
  },
  mounted() {
    this.$store.dispatch('loadLeague')
  }
}
</script>

<style scoped>
.highlighted {
  background-color: chartreuse;
}
</style>
