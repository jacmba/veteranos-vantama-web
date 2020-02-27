<template>
  <div>
    <br />
    <nextGame />
    <position />
    <carrousel />
    <logo />
    <div class="links">
      <a
        href="https://ligatinamar.com/category/once_veteranos_38b"
        target="_blank"
        class="button--green"
      >
        Sigue aquí la liga Tinamar Panadería pulido +38B
      </a>
    </div>
    <br /><br />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Carrousel from '~/components/Carrousel'
import NextGame from '~/components/NextGame'
import Position from '~/components/Position'

export default {
  components: {
    Logo,
    Carrousel,
    NextGame,
    Position
  }
}
</script>
