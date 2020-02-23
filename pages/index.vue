<template>
  <div class="container">
    <div>
      <NavigationBar></NavigationBar>
      <logo />
      <carrousel />
      <div class="links">
        <a
          href="http://ligatinamar.com/category/once_veteranos_38b"
          target="_blank"
          class="button--green"
        >
          Sigue aquí la liga Tinamar Panadería pulido +38B
        </a>
      </div>
      <br /><br />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import NavigationBar from '~/components/NavigationBar'
import Carrousel from '~/components/Carrousel'

export default {
  components: {
    Logo,
    NavigationBar,
    Carrousel
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
