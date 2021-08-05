export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hermanos Cafe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
   '~/plugins/axios.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true, 
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    }],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      
      // https://go.nuxtjs.dev/axios
      '@nuxtjs/axios',
      ['bootstrap-vue/nuxt'],
      // https://go.nuxtjs.dev/pwa
      '@nuxtjs/pwa',
    ],

    server: {
      port: 8000, // default: 3000
      host: '0.0.0.0', // default: localhost,
      timing: false
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
      baseUrl : process.env.BASE_URL
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
      manifest: {
        lang: 'en'
      }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
      publicPath: '/nuxt/',
    },
    base: '/app/'
}
