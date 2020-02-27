<template>
  <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top" sticky>
    <b-img src="/escudo_bandama.png" width="32" />
    <b-navbar-brand href="/">Veteranos Bandama</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="/results">
        <b-icon-archive></b-icon-archive>
        Resultados
      </b-nav-item>
      <b-nav-item href="/calendar">
        <b-icon-calendar></b-icon-calendar>
        Calendario
      </b-nav-item>
      <b-nav-item href="/league">
        <b-icon-trophy></b-icon-trophy>
        Clasificación
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export default {}
</script>
