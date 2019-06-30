import pkg from './package'

require('dotenv').config()

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'the swell space',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "" },
      { hid: 'twitter:card', name: 'twitter:card', content: "summary" },
      { hid: 'twitter:site', name: 'twitter:site', content: "@emdecr" },
      { hid: 'twitter:title', name: 'twitter:title', content: "the swell space" },
      { hid: 'twitter:description', name: 'twitter:description', content: "" },
      { hid: 'twitter:creator', name: 'twitter:creator', content: "@emdecr" },
      { hid: 'twitter:image', name: 'twitter:image', content: "" },
      { hid: 'og:title', name: 'og:title', content: "the swell space" },
      { hid: 'og:type', name: 'og:type', content: "Website" },
      { hid: 'og:url', name: 'og:url', content: "https://theswell.space/" },
      { hid: 'og:image', name: 'og:image', content: "" },
      { hid: 'og:description', name: 'og:description', content: "" },
      { hid: 'og:site_name', name: 'og:site_name', content: "the swell space" }
    ],
    script: [
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
    ],
  },
  /*
  ** Used to go to top of page for pagaination
  */
  router: {
    base: process.env.BASE_ROUTER,
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#e3e3e3', height: '3px' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/typography.css',
    '@/assets/css/layout.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fontawesome',
    '~/plugins/vue-paginate',
    { src: "~/plugins/vue-aos", ssr: false },
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Server configuration
  */
  server: {
    port: 1515, // default: 3000
  },
}
