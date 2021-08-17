export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/jobs/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Flexe.io',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'img/favicon.png' },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: 'img/apple-touch-icon.png' // [your-domain]
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/scss/base.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-scroll', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
