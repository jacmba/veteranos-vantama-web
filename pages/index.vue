<template>
  <div>
    <br />
    <nextGame />
    <position />
    <lastResult />
    <carrousel />
    <logo />
    <div class="links">
      <a
        href="https://ligatinamar.com/category/once_veteranos_38b"
        target="_blank"
        class="button--blue"
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
import LastResult from '~/components/LastResult'

export default {
  components: {
    Logo,
    Carrousel,
    NextGame,
    Position,
    LastResult
  }
}
</script>
