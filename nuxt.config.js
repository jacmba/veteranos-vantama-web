export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Veteranos Bandama',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Club de amigos Veteranos Bandama'
      },
      {
        name: 'image',
        description: 'https://www.veteranosbandama.com/escudo_bandama.png'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Club de amigos Veteranos Bandama'
      },
      {
        name: 'og:image',
        description: 'https://www.veteranosbandama.com/escudo_bandama.png'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Club de amigos Veteranos Bandama'
      },
      {
        name: 'twitter:image',
        description: 'https://www.veteranosbandama.com/escudo_bandama.png'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: {
    '/api': {
      target: 'http://tinamar.api.jazbelt.net',
      pathRewrite: {
        '^/api': '/'
      }
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
